import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/soccerRoutes';
import cors from 'cors';

const app = express();
const PORT = 4000;
const dbURI = 'mongodb://127.0.0.1:27017/soccerDB';

// MongoDB Connection setup
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.log(error);
  });

// HTTP Request body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => {
  res.send(`Our MERN app is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Node-Express api/server is listening on port ${PORT}`);
});
