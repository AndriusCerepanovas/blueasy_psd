$(function(){var e=$(".m-menu-link"),n=$(".close-menu"),t=$(".m-menu");e.on("click",function(e){e.preventDefault(),t.toggleClass("m-menu__active")}),n.on("click",function(e){e.preventDefault(),t.toggleClass("m-menu__active")})}),window.onscroll=function(){myFunction()};var header=document.getElementById("myHeader"),sticky=header.offsetTop;function myFunction(){window.pageYOffset>=sticky?header.classList.add("sticky"):header.classList.remove("sticky")}$(window).on("scroll",function(){var e=$(this).scrollTop();645<e&&$(".content").addClass("scrolled"),e<=645&&$(".content").removeClass("scrolled")});