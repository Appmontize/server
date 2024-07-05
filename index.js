const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');
const walletRoutes = require('./routes/walletRoute');
const cors = require('cors'); // Import the cors middleware
const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use('/auth', authRoutes);
app.use('/api/wallet', walletRoutes);

app.listen(3005, () => {
  console.log('Server is running on port 3000');
});
