import mongoose from 'mongoose';

const CONNECTION_URL = `${process.env.MONGO_FULL_URL}`;

mongoose.connect(`${CONNECTION_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', (error: any) => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
