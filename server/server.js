import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'

const app = express()

// DB connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}
mongoose
  .connect(process.env.DATABASEURI, options)
  .then(() => console.log('DB Connected ...'))
  .catch((err) => console.log(err.message))

// Middlewares
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`)
})
