import { MongoClient, Db, Collection } from 'mongodb'
import { envConfig } from '~/constants/config'
import User from '~/models/schemas/User.schema'
const uri = `mongodb+srv://${envConfig.DATABASE_USER}:${envConfig.DATABASE_PASSWORD}@sandbox.zw2ujou.mongodb.net/?retryWrites=true&w=majority`
class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(envConfig.DATABASE_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }
  get user(): Collection<User> {
    return this.db.collection(envConfig.DB_USERS_COLLECTION)
  }
}

const databaseService = new DatabaseService()
export default databaseService
