import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "./../../../MyContext";
import { JWT_ACCESS_SECRET } from "./../../../environments";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers['authorization']

  if (!authorization) {
    throw new Error("Usuário não autorizado")
  }

  try {
    const token = authorization!.split(' ')[1]
    const payload = verify(token, JWT_ACCESS_SECRET)
    context.payload = payload as any;
  } catch (err) {
    console.log(err)
    throw new Error("Usuário não autorizado")
  }

  return next();
}