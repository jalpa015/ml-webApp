const app = require('./app');


const port = process.env.PORT || 4545;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

