"use strict";

$(document).ready(function(){

 
  $(".toggle-menu").click(function() {
    $(this).toggleClass("active");
    $('.menu-drawer').toggleClass("open");
  });
 
 


	$('.tab-item .fix-width .menu-item').css({'width': 100/$('.tab-item .fix-width .menu-item').length+'%'});

	if ($('.wizard').length)
	{
		wizardFixHeight();
		$(window).resize();
	}



	if ($('.animated-text').length)
		animateText();

});


$(".wrapper-inline").on("scroll", function(e) {
	if (this.scrollTop > 150) {
		$('header.no-background').addClass("set-bg");
	} else {
		$('header.no-background').removeClass("set-bg");
	}
  
});

 

var wizardFixHeight = function(){
	$(window).on('resize', function(e){
		$('.wizard .wizard-item').height($(window).height()-50);
	});
}

var animateText = function(){
	$('.vertical-center').css({'margin-top':$(window).height()/2 - $('.vertical-center').height()/2});
	$('.animated-text').removeClass('zero-opacity');
	$('[data-transation]').each(function(e,i){
		var that = $(this);
		that.addClass('hide');
		
		var transation = that.attr('data-transation');
		if (transation == '')
			transation = 'fadeInDown';

		var startTime = parseInt(that.attr('data-start-time'));
		if (isNaN(startTime))
			startTime = 0;

		setTimeout(function(){
			that.addClass('animated '+transation);
		},startTime);
	})
}


/*sweet checkbox scripts*/
$('.sweet-check :checkbox:checked').each(function(e,i){
	$(this).parent().addClass('checked');
});


$(document).on('click', '.sweet-check', function(){
	if ($(this).hasClass('checked'))
	{
		$(this).removeClass('checked');
		$(this).find('input').prop('checked', false);
	}
	else
	{
		$(this).addClass('checked');
		$(this).find('input').prop('checked', true);
	}

	//console.log($(this).find('input').prop('checked'));
});

$(document).on('click','[data-loader]', function(){
	$('.sweet-loader').show().addClass('show');
});


/*expandable list scrips****/
$(document).on('click', '.expandable-item .expandable-header', function(){
	if ($(this).parent().hasClass('accordion'))
	{
		if ($(this).parent().hasClass('active'))
		{
			$(this).parent().removeClass('active');
			$(this).parent().find('.expandable-content').attr('style','');
		}
		else
		{
			var accordionGroup = $(this).parent().attr('data-group');
			$('[data-group="'+accordionGroup+'"]').removeClass('active');
			$('[data-group="'+accordionGroup+'"]').find('.expandable-content').attr('style','');
			$(this).parent().find('.expandable-content').css({'max-height':$(this).parent().find('.expandable-content')[0].scrollHeight});
			$(this).parent().addClass('active');
		}
	}
	else
	{
		if ($(this).parent().hasClass('active'))
			$(this).parent().find('.expandable-content').attr('style','');
		else
			$(this).parent().find('.expandable-content').css({'max-height':$(this).parent().find('.expandable-content')[0].scrollHeight});

		$(this).parent().toggleClass('active');
	}
});



$(document).on('click', '.tab-item .menu-item', function(e){
	e.preventDefault();
	var tabContentId = $(this).attr('data-content');

	$(this).parents('.tab-item').find('.menu-item').removeClass('active');
	$(this).addClass('active');

	$(this).parents('.tab-item').find('.content-item').removeClass('active');
	$('#'+tabContentId).addClass('active');
});


/*post item scripts **************/
$(document).on('click', '.post-item .post-share > i', function(e){
	e.preventDefault();
	$(this).parent().find('.social-links').fadeToggle('fast');
});


/*popup actions ******************/
$(document).on('click', '[data-dismiss="true"]', function(){
	$(this).parents('.popup-overlay').fadeOut('fast');
});

$(document).on('click', '[data-popup]', function(){
	var modalId = $(this).attr('data-popup');
	$('#'+modalId).fadeIn('fast');
});

$(document).on('click', '.popup-overlay', function(e){
	if ($(e.target).hasClass('popup-overlay'))
	{
		$(this).fadeOut('fast');
	}
});



/*search popup actions ************/

var openSearchPopup = function(){
	$('.search-form').fadeIn('fast');
	$('.search-form input').focus();
}

var closeSearchPopup = function(){
	$('.search-form').fadeOut('fast');
}

$(document).on('click', '[data-search="open"]', function(){
	openSearchPopup();
});

$(document).on('click', '[data-search="close"]', function(){
	closeSearchPopup();
});

$(function(){
$("#navbar").load("nav.html"); 
}); 

$(function(){
$("#loginnav").load("loginnav.html"); 
}); 
$(function(){
$("#footer").load("footer.html"); 
}); 
$(function(){
$("#footer-login").load("login-footer.html"); 
}); 


 $('#appiontment').validate({ // initialize the plugin
        rules: {
            service: {
                required: true,
            },
			 consultant: {
                required: true,
            },
			 aptdaytime: {
                required: true,
            },
			 fullname: {
                required: true,
            },
			phone: {
                required: true,
				number: true,
            },
			email: {
                required: true,
				email:true,
            },
			gender: {
                required: true,
            },
			
			issues: {
                required: true,
            },
			
            building: {
                required: true,
            },
			 },
		 
       
    });