import { config } from 'dotenv'
config({
  path: '.env'
})
export const envConfig = {
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD as string,
  DATABASE_USER: process.env.DATABASE_USER as string,
  DATABASE_NAME: process.env.DATABASE_NAME as string,
  DB_USERS_COLLECTION: process.env.DB_USERS_COLLECTION as string
}
