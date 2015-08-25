var router = require('koa-router')();

router.get('/', require('./controllers/index'));
router.get('/blogs', require('./controllers/blog').list);
router.get('/blog/:bid', require('./controllers/blog').blog);

module.exports = router;
