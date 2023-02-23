import { env } from "process";

const hasher = require('simple-pass-hasher');

const getHasher = (u_password: string): typeof hasher => {
    return hasher({
        password: u_password,
        key: env.PASSWORD_HASHER_KEY,
        algorithm: env.PASSWORD_HASHER_ALGORITHM,
        encoding: env.PASSWORD_HASHER_ENCODING, 
        hmac: env.PASSWORD_HASHER_HMAC,
    });
}

export const hashPassword = (password: string): string => getHasher(password).digest;

export const validatePassword = (password: string, u_password: string): boolean => getHasher(password).digest === u_password;