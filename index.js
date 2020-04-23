const express = require('express');

const todoRoutes = require('./routes/todo');
const sequelize = require('./utils/database');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/todo', todoRoutes);

async function start() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
