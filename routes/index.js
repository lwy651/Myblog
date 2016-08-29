var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '小五blog'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
