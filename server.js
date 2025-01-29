import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import {fileURLToPath} from 'url';
import path from 'path';
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/posts', posts);

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});