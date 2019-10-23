/*!

 * name：hujizhuo

 * E-mail：hujizhuo@163.com

 *

 * time：2019/9/20

 */



$(document).ready(function() {

	$(".gcz-bot-tab-t li").click(function() {

		var index = $(this).index();

		$(this).addClass("active").siblings("li").removeClass("active");

		$(".gcz-bot-tabs .gcz-bot-tab-list").eq(index).show().siblings(".gcz-bot-tab-list").hide();

	});

	$(".gjb-tab-t li").click(function() {

		var index = $(this).index();

		$(this).addClass("active").siblings("li").removeClass("active");

		$(".gjb-tables").eq(index).show().siblings(".gjb-table").hide();

	});
 // a href 对应跳转位置的id
 $('.a_links a,.gm_a').click(function () {
	$('html, body').animate({
	scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
	});
	// $(".gqx-map a").click(function() {

	// 	var index = $(this).index();

	// 	$(".gqx-text .gqx-text-list").eq(index).show().siblings(".gqx-text-list").hide();

	// 	$(".gqx-tables .gqx-table-list").eq(index).show().siblings(".gqx-table-list").hide();

	// });

	$(".tzf-video img").click(function(){

		$(this).fadeOut();

		$(".tzf-liwu").fadeOut();

	})

	$(".fix-menu-r .fix-menu-list").click(function(){

		var index = $(this).attr("data-id");

		$(this).addClass("active").siblings(".fix-menu-list").removeClass("active");

		if(index == 0){

			$("html , body").animate({

				scrollTop: $(".index-item3").offset().top

			}, 900);

		}else if(index == 1){

			$("html , body").animate({

				scrollTop: $(".index-item4").offset().top

			}, 900);

		}else if(index == 2){

			$("html , body").animate({

				scrollTop: $(".index-item5").offset().top

			}, 900);

		}else if(index == 3){

			$("html , body").animate({

				scrollTop: $(".index-item6").offset().top

			}, 900);

		}else if(index == 4){

			$("html , body").animate({

				scrollTop: $(".index-item7").offset().top

			}, 900);

		}

	})

	$(".index-top").click(function(){

		$("html , body").animate({

			scrollTop: 0

		}, 900);

	})
	var date = new Date().getFullYear()
	$(".year").text(date)

})

