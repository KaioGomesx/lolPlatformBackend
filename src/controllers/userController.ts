import { Request, Response } from "express";

import Users from "../models/Users";

type userType = {
  email: string;
  username: string;
  password: string;
};

export default {
  userCreate(req: Request, res: Response) {
    const { email, username, password }: userType = req.body;

    if (!email || !username || !password) {
      return res.send({ message: "Informações insuficientes" }).status(406);
    }

    Users.findOne({ email }, (error, data) => {
      if (error)
        return res.send({ message: "Erro ao buscar usuário" }).status(500);
      if (data) return res.send({ message: "Usuário já existe" }).status(406);

      Users.create({ email, username, password }, (error: any, data: any) => {
        if (error)
          return res
            .send({ message: "Erro ao criar usuário: " + error })
            .status(500);
        return res.send(data);
      });
    });
  },

  userLogin(req: Request, res: Response) {
    const { user, passwd } = req.body;

    res.send("voce agora esta logado");
  }
};
