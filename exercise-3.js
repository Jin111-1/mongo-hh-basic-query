import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection
  .find({})
  .sort({ total_price: -1 })
  .toArray()
  .then(data => console.log(data))

collection
  .find({})
  .sort({ created_at: 1 })
  .toArray()
  .then(data => console.log(data))
