import { client, collection } from './utils/db.js'

client
  .connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error))

/* collection
  .insertOne({
    size: 'small',
    total_price: 3000,
    quantity: 8,
    customer_name: 'John',
    credit_card_type: null,
    created_at: '2021-02-07T10:48:40Z',
  })
  .then(data => console.log(data)) */

collection
  .insertMany([
    {
      size: 'small',
      total_price: 3000,
      quantity: 1,
      customer_name: 'James',
      credit_card_type: null,
      created_at: '2021-02-07T10:48:40Z',
    },
    {
      size: 'large',
      total_price: 12000,
      quantity: 13,
      customer_name: 'K',
      credit_card_type: null,
      created_at: '2022-03-05T10:48:40Z',
    },
    {
      size: 'small',
      total_price: 2000,
      quantity: 2,
      customer_name: 'Jack',
      credit_card_type: null,
      created_at: '2022-02-14T10:48:40Z',
    },
  ])
  .then(data => console.log(data))
