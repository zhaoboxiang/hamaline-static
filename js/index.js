$(function () {
  $('img[src*="wechat.png"]').hover(function () {
    $('img[src*="wechat-hover.png"]').show();
    $('.login-weixin').show();
  })
  $('.login-left').mouseleave(function () {
    $('img[src*="wechat-hover.png"]').hide();
    $('.login-weixin').hide();
  })

  $('img[src*="weibo.png"]').hover(function () {
    $('img[src*="weibo-hover.png"]').show();
    $('.login-weibo').show();
  }).mouseleave(function () {
    $('img[src*="weibo-hover.png"]').hide();
    $('.login-weibo').hide();
  })
})
