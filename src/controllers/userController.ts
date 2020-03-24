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
      return res.status(406).send({ message: "Informações insuficientes" });
    }

    Users.findOne({ email }, (error, data) => {
      if (error)
        return res.status(500).send({ message: "Erro ao buscar usuário" });
      if (data) return res.status(406).send({ message: "Usuário já existe" });

      Users.create({ email, username, password }, (error: any, data: any) => {
        if (error)
          return res
            .status(500)
            .send({ message: "Erro ao criar usuário: " + error });
        return res.send(data);
      });
    });
  },

  userLogin(req: Request, res: Response) {
    const { user, passwd } = req.body;

    res.send("voce agora esta logado");
  }
};
