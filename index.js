const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());

const userRouter = require('./routes/authRoute');
const walletRouter = require('./routes/walletRoute');
const clickRouter = require('./routes/click');
const postbackRouter = require('./routes/postback');

app.use('auth/user', userRouter);
app.use('api/wallet', walletRouter);
app.use('/click', clickRouter);
app.use('/postback', postbackRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
