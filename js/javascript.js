// PC ver gnb 메뉴
$(function(){
    $('nav').before('<div class="bg_lnb"></div>');
    $('header>.container>.forPC>.gnb>li>a').after('<div class="bar"></div>');
    const $mnu = $('header>.container>.forPC>.gnb>li');
    const $mnubar = $('header>.container>.forPC>.gnb>li>.bar');

    let nowIdx = 0;

    $mnu.on({
        'mouseover': function(){
            nowIdx = $mnu.index(this);
            $('ol, .bg_lnb').stop().slideDown(300);
            $mnubar.eq(nowIdx).stop().animate({width:'100%'},200);
        },
        'mouseleave': function(){
            $('ol, .bg_lnb').stop().slideUp(300);
            $mnubar.eq(nowIdx).stop().animate({width:0},200);
        },
    });
});


// MO ver 세로메뉴
$(function(){
    const $btnMnu = $('header>.container>.headerIn>.mnuBtn>a');
    const $vtclMnu = $('header>.vtclMnu');
    const $btnClse = $('header>.vtclMnu>.clse');

    $('header').after('<div class="shadow"></div>');

    const hideMnu = function(){
        $vtclMnu.stop().animate({
            right:-300
        },300);
        $('body').css({'overflow-y':'visible'});
        $('.shadow').hide();
    };

    $btnMnu.on('click', function(evt){
        evt.preventDefault();

        $vtclMnu.stop().animate({
            right:0
        },300);
        $('body').css({'overflow-y':'hidden'});
        $('.shadow').show();
    });

    $btnClse.on('click', function(evt){
        evt.preventDefault();

        hideMnu();
    });
    $('.shadow').on('click', function(){
        hideMnu();
    });
});


// visual scroll ico
$(function(){
    const $scroll = $('.visual>.scroll');

    let intervalKey = null;

    $(window).on('load', function(){
        intervalKey = setInterval(function(){
            $scroll.stop().animate({
                bottom:20
            },800).animate({bottom:30},800);
        },2000);

        $('header>.container').animate({top: 0, opacity: '1'}, 400);
    });
});


// 프로그램 hover 효과 
$(function(){
    const $program = $('.cont>.program>.list>a>dl');

    $program.on({
        mouseenter: function(){
            $(this).find('img').css({transform: 'scale(1.05)'});

            $(this).find('dd').css({color:'#fff', backgroundColor:'#0db2b4'});            
            $(this).find('span').css({color:'#fff'});           
        },
        mouseleave: function(){
            $(this).find('img').css({transform: 'initial'});

            $(this).find('dd').css({color: '#333', backgroundColor:'#efefef'});           
            $(this).find('span').css({color: '#666'}); 
        }
    });
});


// notice
$(function(){
    const $slides = $('.cont>.notice>.newsbox>ul');
    $slides.find('a').after('<div class="bar"></div>');
    const $news = $('.cont>.notice>.newsbox>ul>li');
    const $bar = $('.cont>.notice>.newsbox>ul>li>.bar');

    let nowIdx = 0;
    
    //슬라이드 이동    
    moveSlide = function(){
        let newsWidth = $news.eq(nowIdx).width();
        
        $slides.stop().animate({
            left: newsWidth * -1
        },400,"swing",function(){
            $slides.children('li').first().appendTo($slides);
            $slides.css({left:"0"});
        });
    };

    setInterval(function(){
        moveSlide();            
    },3000);

    // 마우스on 하이라이트
    $news.on({
        mouseenter: function(){
            nowIdx = $news.index(this);
            $bar.eq(nowIdx).stop().animate({width:'100%'}, 500);
        },
        mouseleave: function(){
            $bar.eq(nowIdx).stop().animate({
                width:'0%', opacity:'20%'
            }, 500, function(){
                $bar.css({opacity:1})
            });
        }
    });

});


// info icon
$(function(){
    const $ico = $('.cont>.btmcont>.info>.infobox>.btmbox>ul>li');

    let nowIdx = 0;

    $ico.on({        
        mouseenter: function(){
            nowIdx = $ico.index(this);
            $ico.eq(nowIdx).addClass('on');
        },
        mouseleave: function(){
            $ico.eq(nowIdx).removeClass('on');
        }
    });
});


//footer
$(function(){
    const $infoBtn = $('footer>.container>.footerIn>.btnLicense');
    const $infotxt = $('footer>.container>.footerIn>.information>.infobox');

    $infoBtn.on('click', function(evt){
        evt.preventDefault();
        
        $infotxt.stop().slideToggle();
        $infoBtn.toggleClass('on');
    });

    $(window).on('resize', function(){
        let screenWidth = $(window).width();

        if(screenWidth>623){
            $infotxt.show();
        }else{
            $infotxt.hide();
        }
    });
});
