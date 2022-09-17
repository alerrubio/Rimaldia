const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

const student_router = require('./src/routes/studentRouter');
const user_router = require('./src/routes/userRouter');
const comment_router = require('./src/routes/commentRouter');
const theme_router = require('./src/routes/themeRouter');
const post_router = require('./src/routes/postRouter');
const record_router = require('./src/routes/recordRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is running");
}); 

app.use('/api',student_router);
app.use('/api',user_router);
app.use('/api',comment_router);
app.use('/api',theme_router);
app.use('/api',post_router);
app.use('/api',record_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})