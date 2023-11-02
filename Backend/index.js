const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./database/connection");
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;