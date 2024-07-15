require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
const walletRoutes = require('./routes/walletRoute');
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth/user', authRoutes);
app.use('/api/wallet', walletRoutes);

app.listen(3008, () => {
  console.log('Server is running on port 3008');
  
  sequelize.authenticate()
    .then(() => {
      console.log('Database connected');
    })
    .catch(err => {
      console.log('Error: ' + err);
    });
});
