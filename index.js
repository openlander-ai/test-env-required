const express = require('express');

if (!process.env.DATABASE_URL) {
  console.error('FATAL: DATABASE_URL environment variable is required');
  process.exit(1);
}

const app = express();

app.get('/', (req, res) =>
  res.json({
    status: 'ok',
    db: `${process.env.DATABASE_URL.substring(0, 20)}...`,
  }),
);

app.listen(process.env.PORT || 3000, () => console.log('Server started'));
