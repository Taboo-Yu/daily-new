/*
 * @Author       : 俞涛
 * @Date         : 2020-07-27 11:10:36
 * @LastEditors  : 俞涛
 * @LastEditTime : 2020-07-29 20:07:20
 * @FilePath     : \daily-new\js\main.js
 */

/*pageone.html...*/
$(document).on('pagecreate', '#mypage1', function () {
  $('#mypage1').on('swipeleft', function () {
    window.location.href = 'pagetwo.html'
  })
})
$(document).on('pagecreate', '#mypage2', function () {
  $('#mypage2').on('swipeleft', function () {
    window.location.href = 'pagethree.html'
  })
})
$(document).on('pagecreate', '#mypage2', function () {
  $('#mypage2').on('swiperight', function () {
    window.location.href = 'pageone.html'
  })
})
$(document).on('pagecreate', '#mypage3', function () {
  $('#mypage3').on('swipeleft', function () {
    window.location.href = 'pagefour.html'
  })
})
$(document).on('pagecreate', '#mypage3', function () {
  $('#mypage3').on('swiperight', function () {
    window.location.href = 'pagetwo.html'
  })
})

$(document).on('pagecreate', '#mypage4', function () {
  $('#mypage4').on('swiperight', function () {
    window.location.href = 'pagethree.html'
  })
})
