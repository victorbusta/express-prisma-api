import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {  
  const email = req.body?.email;  

  if (email === undefined) return res.sendStatus(400);

  if (await prisma.user.findUnique({
    where: {
      email: email
    }}) !== null
  ) return res.sendStatus(401);

  prisma.user.create({data : user});

  console.log(user);

};

export const login = (req: Request, res: Response) => {    

};