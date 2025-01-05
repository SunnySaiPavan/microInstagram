const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use force: false in production
    console.log('Database connected and synced.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
