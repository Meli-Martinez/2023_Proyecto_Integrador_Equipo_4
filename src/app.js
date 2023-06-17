import express from 'express';
import { router } from '../src/routes/router.js';

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
