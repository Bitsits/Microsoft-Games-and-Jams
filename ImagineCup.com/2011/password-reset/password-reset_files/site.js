var showLoginBox = false;
var loggedIn = false;

jQuery.fn.fadeToggle = function(speed, easing, callback) {
    return this.animate({ opacity: 'toggle' }, speed, easing, callback);
};

this.randomimg = function() {
    var length = $("#extended_footer #sponsors li").length;
    var ran = Math.floor(Math.random() * length) + 1;
    $("#extended_footer #sponsors li:nth-child(" + ran + ")").show();
};

/**
* Equal Heights Plugin
* Equalize the heights of elements. Great for columns or any elements
* that need to be the same size (floats, etc).
* 
* Version 1.0
* Updated 12/10/2008
*
* Copyright (c) 2008 Rob Glazebrook (cssnewbie.com) 
*
* Usage: $(object).equalHeights([minHeight], [maxHeight]);
* 
* Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
* Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
* Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
* than 300 pixels tall. Elements with too much content will gain a scrollbar.
* 
*/
$.fn.equalHeights = function(minHeight, maxHeight) {
    tallest = (minHeight) ? minHeight : 0;
    this.each(function() {
        if ($(this).height() > tallest) {
            tallest = $(this).height();
        }
    });
    if ((maxHeight) && tallest > maxHeight) tallest = maxHeight;
    return this.each(function() {
        $(this).height(tallest);
    });
}

var selectedTabIndex = -1;

$(document).ready(function() {

    randomimg();

    /* Zebra Table ---------------------------*/
    $("table.zebra tr:nth-child(odd)").addClass("odd");

    /* Infield Label -------------------------*/
    $(".infieldlabel").inFieldLabels();

    /* Jquery Tabs ---------------------------*/


    var $tabs = $('.jqueryTabs').tabs({
        select: function(event, ui) {
            var url = $.data(ui.tab, 'load.tabs');
            if (url) {
                location.href = url;
                return false;
            }
            return true;
        }
    });

    if (selectedTabIndex >= 0)
        $(".jqueryTabs").tabs({ selected: selectedTabIndex });
    
    /* Accordion Layouts */
    $("div.accordion").accordion({
        autoHeight: false,
        navigation: true
    });

    /* News Ticker -------------------------*/
    $('ul#news_ticker_list').cycle();

    /* Random Backgrounds */
    var rnd = Math.floor(Math.random() * 3) + 1;
    $("body").attr("class", "v" + rnd);

    /* Imgs w/ Strokes -----------------------*/

    $('.img_170').wrap('<div class="img_170_wrapper" />');
    $('.img_170').before('<span></span>');

    $('.img_135').wrap('<div class="img_135_wrapper" />');
    $('.img_135').before('<span></span>');

    $('.img_130').wrap('<div class="img_130_wrapper" />');
    $('.img_130').before('<span></span>');


    /* Image Slider */
    $(".image_slider").scrollable();

    /* Login Box -----------------------------*/

    function toggleLogin() {
        $('#login_button').toggleClass('on');
        $('#login_dropdown').fadeToggle(function() {
            hideRemember();
        });
    };

    function showLogin() {
        $('#login_button').addClass('on');
        $('#login_dropdown').fadeIn(function() {
            hideRemember();
        });
    };

    function showRemember() {
        $('.login .login_form').slideUp(400, function() {
            $('.login .remember_form').slideDown(400);
        });
    };

    function hideRemember() {
        $('.login .login_form').show();
        $('.login .remember_form').hide();
    };


    if (!loggedIn) {
        $('#login_button').click(function() {
            toggleLogin();
            return false;
        });
    }

    $('#login_close').click(function() {
        toggleLogin();
        return false;
    });

    $('#login_forgot').click(function() {
        showRemember();
        return false;
    });

    if (showLoginBox)
        showLogin();

    //Cufon Font Replacement
    Cufon.replace('.competition_title', { fontSize: "26px", textShadow: '1px 1px rgba(0, 0, 0, 0.5)' });

    //Equal heights for Competitions page
    $(".competition_item").equalHeights();
    $(".challenge_item").equalHeights();

    $("a").filter(function() {
        return this.hostname && this.hostname !== location.hostname
        && this.hostname != "www.imaginecup.com"
        && this.hostname != "imaginecup.com"
        && this.hostname != "localhost"
        && this.hostname != "180.150.137.91"
        && this.hostname != "180.150.137.94"
    }).attr("target", "_blank");

});