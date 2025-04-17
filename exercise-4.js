import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection
  .find({ quantity: { $lt: 5 }, credit_card_type: 'mastercard' })
  .toArray()
  .then(data => console.log(data))

collection
  .find({ quantity: { $lte: 5 } })
  .toArray()
  .then(data => console.log(data))
