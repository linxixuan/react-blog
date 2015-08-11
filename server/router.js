var router = require('koa-router')();

router.get('/', require('./controllers/index.js'));
router.get('/blogs', require('./controllers/blog.js'));

module.exports = router;
