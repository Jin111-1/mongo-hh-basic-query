import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection
  .findOne({
    customer_name: 'Cherlyn',
  })
  .then(data => console.log(data))

collection
  .find({
    credit_card_type: 'mastercard',
  })
  .toArray()
  .then(data => console.log(data))

collection
  .find({
    size: 'medium',
  })
  .limit(5)
  .toArray()
  .then(data => console.log(data))
