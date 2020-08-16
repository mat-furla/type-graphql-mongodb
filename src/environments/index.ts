import dotenv from 'dotenv'
dotenv.config()

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT! || 4000

// mongodb
const MONGO_USER = process.env.MONGO_USER || 'teste'
const MONGO_PASS = process.env.MONGO_PASS || 'teste'
const MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1'
const MONGO_PORT = +process.env.MONGO_PORT! || 27017
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'nest'
const MONGO_URL =
	process.env.MONGO_URL ||
	`mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT! || 12

// nodemailer
//const NODEMAILER_USER: string = process.env.NODEMAILER_USER || 'xxx'
//const NODEMAILER_PASS: string = process.env.NODEMAILER_PASS || 'xxx'

export {
	DOMAIN,
	PORT,
	MONGO_USER,
	MONGO_PASS,
	MONGO_HOST,
	MONGO_PORT,
	MONGO_DATABASE,
	MONGO_URL,
	BCRYPT_SALT,
//	NODEMAILER_USER,
//	NODEMAILER_PASS,
}