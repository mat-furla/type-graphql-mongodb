import dotenv from 'dotenv'
dotenv.config()

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost'
const PORT: number = +process.env.PORT! || 4000

// mongodb
const MONGO_USER = process.env.MONGO_USER || 'default'
const MONGO_PASS = process.env.MONGO_PASS || 'default'
const MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1'
const MONGO_PORT = +process.env.MONGO_PORT! || 27017
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'default'
const MONGO_URL =
	process.env.MONGO_URL ||
	`mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`

// bcrypt
//const BCRYPT_SALT: number = +process.env.BCRYPT_SALT! || 12

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'default'
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'default'

export {
	DOMAIN,
	PORT,
	MONGO_USER,
	MONGO_PASS,
	MONGO_HOST,
	MONGO_PORT,
	MONGO_DATABASE,
	MONGO_URL,
	JWT_ACCESS_SECRET,
	JWT_REFRESH_SECRET,
}