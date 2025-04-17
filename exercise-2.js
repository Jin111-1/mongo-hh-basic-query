import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection
  .findOne(
    {
      customer_name: 'Zoe',
    },
    { projection: { total_price: 1, created_at: 1 } }
  )
  .then(data => console.log(data))
