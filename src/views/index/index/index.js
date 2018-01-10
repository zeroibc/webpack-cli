require('./page.less');

$(() => {
  window.layui.use('carousel', function() {
    let carousel = window.layui.carousel;
    // 建造实例
    carousel.render({
      elem: '#test1',
      width: '100%', // 设置容器宽度
      arrow: 'always', // 始终显示箭头
      interval: 99999,
      //, anim: 'updown' //切换动画方式
    });
  });
});
