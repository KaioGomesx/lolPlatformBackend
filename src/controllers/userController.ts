import { Request, Response } from "express";

const users: object[] = [];

type userType = {
  email: string;
  user: string;
  passwd: string;
};

export default {
  userCreate(req: Request, res: Response) {
    const { email, user, passwd }: userType = req.body;

    users.push({
      email,
      user,
      passwd
    });

    res.send("OK");
  },

  userLogin(req: Request, res: Response) {
    const { user, passwd } = req.body;

    const userInArray = users.find(
      (item: any) => item.user === user && item.passwd === passwd
    );

    if (!userInArray) res.send("Credenciais erradas");

    res.send("voce agora esta logado");
  }
};
