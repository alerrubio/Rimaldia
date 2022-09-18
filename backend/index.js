const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

const student_router = require('./src/routes/studentRouter');
const user_router = require('./src/routes/userRouter');
const comment_router = require('./src/routes/commentRouter');
const theme_router = require('./src/routes/themeRouter');
const collection_router = require('./src/routes/collectionRouter');
const tag_router = require('./src/routes/tagRouter');
const userRole_router = require('./src/routes/userRoleRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is running");
}); 

app.use('/api',student_router);
app.use('/api',user_router);
app.use('/api',comment_router);
app.use('/api',theme_router);
app.use('/api',collection_router);
app.use('/api',tag_router);
app.use('/api',userRole_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})