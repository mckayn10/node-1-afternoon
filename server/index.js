const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controllers.js')

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );
app.put( `${messagesBaseUrl}/:id`, mc.update );
app.delete( `${messagesBaseUrl}/:id`, mc.delete );

app.listen(3001, function () {
    console.log(`http://localhost:${this.address().port}`)
})