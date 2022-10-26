const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

const user_router = require('./src/routes/userRouter');
const comment_router = require('./src/routes/commentRouter');
const theme_router = require('./src/routes/themeRouter');
const notification_router = require('./src/routes/notificationRouter');
const group_router = require('./src/routes/groupRouter');
const collection_router = require('./src/routes/collectionRouter');
const tag_router = require('./src/routes/tagRouter');
const userRole_router = require('./src/routes/userRoleRouter');
const post_router = require('./src/routes/postRouter');
const record_router = require('./src/routes/recordRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is running");
}); 

app.use('/api',user_router);
app.use('/api',comment_router);
app.use('/api',theme_router);
app.use('/api',notification_router);
app.use('/api',group_router);
app.use('/api',collection_router);
app.use('/api',tag_router);
app.use('/api',userRole_router);
app.use('/api',post_router);
app.use('/api',record_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})
