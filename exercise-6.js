import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

collection
  .updateMany({ customer_name: 'Jack' }, { $set: { isAdmin: false } })
  .then(data => console.log(data))

collection
  .updateMany({}, { $set: { country: 'Thailand' } })
  .then(data => console.log(data))

collection
  .updateOne(
    { customer_name: 'M' },
    {
      $set: {
        size: 'large',
        total_price: 200000,
        quantity: 20,
        customer_name: 'M',
        credit_card_type: 'mastercard',
        created_at: '2022-01-01T10:48:40Z',
      },
    },
    {
      upsert: true,
    }
  )
  .then(data => console.log(data))
