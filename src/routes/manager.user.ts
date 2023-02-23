import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';
import { checkRequirement } from './route.utils';
import { hashPassword } from '../security/manager.password';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const requieredFields = ["email", "name", "adresse", "password"];

  if (!checkRequirement(requieredFields, req, res)) return;

  var user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    }});  

  if (user) {
    res.statusCode = 401;
    res.statusMessage = 'user already exists !';
    res.end();

    return;
  }

  const role = await prisma.role.findUniqueOrThrow({
    where : {
      role: 'ROLE_USER',
    }});

  user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      adresse: req.body.adresse,
      password: hashPassword(req.body.password),
      roleId: role.id,
    }});

  res.statusCode = 200;
  res.statusMessage = `successfully added : ${user.name}`;
  res.end();
};

export const login = (req: Request, res: Response) => {    

};