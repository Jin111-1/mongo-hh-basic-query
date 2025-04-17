import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection.deleteMany({ customer_name: 'Jack' }).then(data => console.log(data))
