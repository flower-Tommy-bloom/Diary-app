const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const mock = require('./mock');

app.use(bodyParser())

app.use(mock.routes())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.listen(3000);
console.log('http://localhost:8000')
    