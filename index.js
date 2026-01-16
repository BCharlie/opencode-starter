const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/dev';

app.use(express.json());

let db;

async function connectDB() {
  const client = new MongoClient(mongoUrl);
  await client.connect();
  db = client.db();
  console.log('Connected to MongoDB');
}

app.get('/', (req, res) => {
  res.json({ message: 'OpenCode + MongoDB Starter', status: 'ready' });
});

connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(console.error);
