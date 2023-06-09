const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models');

app.use(express.json());
app.use(cors());

// Routes
const housesRouter = require('./routes/houses');
app.use('/houses', housesRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log('Server started on port 3002');
  });
});
