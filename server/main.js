import express from 'express';
import bodyParser from 'body-parser';

import setRoutes from './router';

const app = express();
const port = process.env.PORT || 8082;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setRoutes(app);

if (process.env.NODE_ENV === 'production') {
  
}
else {
  
}

const server = app.listen(port, () => {
  console.log(`Backend Running on port ${port}!`);
});