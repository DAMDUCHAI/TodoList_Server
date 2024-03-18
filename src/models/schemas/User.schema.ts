import { ObjectId } from 'mongodb'

interface UserType {
  _id?: ObjectId
  username: string
  email: string
  password: string
  created_at?: Date
  updated_at?: Date
  avatar?: string
}
class User {
  _id?: ObjectId
  username: string
  email: string
  password: string
  created_at?: Date
  updated_at?: Date
  avatar?: string
  constructor(user: UserType) {
    this.username = user.username
    this.email = user.email
    this.password = user.password
  }
}
export default User
