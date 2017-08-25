// $(function () {
//         $("#ltmXdt").load('common/ltm-xdt.html')
//         $("#ltmHeader").load('common/ltm-header.html')
//         $("#ltmFooter").load('common/ltm-footer.html')
// })
//返回顶部
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop()< 400) {
            $('.goTop').hide();
        } else {
            $('.goTop').show();
        }
    })
    $('.goTop').click(function(){
        $('body,html').animate({scrollTop:0},function(){
            return;
        })
    });
})
//吸顶条
var t = 100;
onscroll = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>t){
        ltmNav.style.position = 'fixed';
        ltmNav.style.top = '-15px';
        ltmNav.style.display = 'block';
    }
    else{
        ltmNav.style.display = 'none';
    }
};
//轮播
$(function() {
    var width = innerWidth;
    var speed =1000;
    var delay = 5000;
    var now = 0;
    var max = 6;
    var $imgs = $('.ltm-lunbo-imgs');
    var timer = setInterval(changeAuto, delay);
    $(window).resize(function () {
        window.location.reload()
    });
    $('.ltm-lunbo').on({
        mouseenter: function () {
            clearInterval(timer)
        },
        mouseleave: function () {
            timer = setInterval(changeAuto, delay);
        }
    });
    function changeAuto() {
        if (!$imgs.is(':animated')) {
            if (now < max) {
                now += 1;
                changeNext();
            } else {
                now = 0;
                changeFirst();
            }
            changeNum();
        }
    }
    function changeNext() {
        $imgs.animate({
            'left': -innerWidth * now
        }, speed);
    }
    function changeFirst() {
        $imgs.animate({
            left: -innerWidth * (max + 1)
        }, speed, function () {
            $(this).css('left', '0')
        })
    }
    var $lunboNum = $('.ltm-lunbo-num li');
    $lunboNum.click(function () {
        now = $(this).index();
        changeNext();
        changeNum();
    });

    function changeNum() {
        $lunboNum.eq(now).addClass('ltm-current').siblings().removeClass('ltm-current')
    }
});
//选项卡
$(function(){
    $('.xycf-qie').click(function(){
        $(this).css('color','#f2a02d').siblings().css('color','#000');
        var a=$(this).index();
        $('.xycf-bannar img').eq(a).css('display','block').siblings().css('display','none');
    });
});
//校区环境
$(function(){
    var speed=30;
    var demo = $(".schoolAll");
    var demo1 = $("#demo1");
    var demo2 = $("#demo2");
    demo2.html(demo1.html());

    function Marquee(){
        if(demo.scrollLeft()>=demo1.width())
            demo.scrollLeft(0);
        else{
            demo.scrollLeft(demo.scrollLeft()+1);
        }
    }
    var MyMar=setInterval(Marquee,speed);
    demo.mouseover(function() {
        clearInterval(MyMar);
    } );
    demo.mouseout(function() {
        MyMar=setInterval(Marquee,speed);
    } )
});
//培训
$(function () {
    $("#ltmPxFstUl li").click(function(){
        $(this).css('color','#f2a02d').siblings().css('color','#000');
        var a=$(this).index();
        $('#ltmCon>div').eq(a).css('display','block').siblings().css('display','none');
    })
});
/*师资力量 */
$(function(){
    $.getJSON("js/ltmJson.json",function(datas){
        var data=datas.shouye;
        console.log(datas);
        $.each(data,function(i,item){
            $('#ltmul').append('<li class="sz-list">' +
                '<a href="">' +
                '<div class="sz-img">' +
                '<img src="'+item.img+'" alt="'+item.name+'" title="'+item.name+'">' +
                '<p>'+item.name+'</p>' +
                '</div>' +
                '<span>'+item.byyx+'</span>' +
                '<span>'+item.jl+'</span>' +
                '<span>'+item.jxkc+'</span>' +
                '</a>' +
                '</li>');
        })
    });
// *************************************************************************
//师资力量--->更多教师
    $.getJSON("../ltmJson.json",function(datas){
        var data=datas.szll;
        console.log(datas);
        $.each(data,function(i,item){
            $('#ltmszllUl').append('<li class="sz-list">' +
                '<a href="">' +
                '<div class="sz-img">' +
                '<img src="../'+item.img+'" alt="'+item.name+'" title="'+item.name+'">' +
                '<p>'+item.name+'</p>' +
                '</div>' +
                '<span>'+item.byyx+'</span>' +
                '<span>'+item.jl+'</span>' +
                '<span>'+item.jxkc+'</span>' +
                '</a>' +
                '</li>');
        })
    });
    $.getJSON("../ltmJson.json",function(datas){
        var data=datas.szlls;
        console.log(datas);
        $.each(data,function(i,item){
            $('#ltmszllUl').append('<li class="sz-list">' +
                '<a href="">' +
                '<div class="sz-img">' +
                '<img src="../'+item.img+'" alt="'+item.name+'" title="'+item.name+'">' +
                '<p>'+item.name+'</p>' +
                '</div>' +
                '<span>'+item.byyx+'</span>' +
                '<span>'+item.jl+'</span>' +
                '</a>' +
                '</li>');
        })
    });
    //*****************************************************
    //课程研发
    $.getJSON("../ltmJson.json",function(datas){
        var data=datas.shouye;
        console.log(datas);
        $.each(data,function(i,item){
            $('#ltkcyfUl').append('<li class="sz-list">' +
                '<a href="">' +
                '<div class="sz-img">' +
                '<img src="../'+item.img+'" alt="'+item.name+'" title="'+item.name+'">' +
                '<p>'+item.name+'</p>' +
                '</div>' +
                '<span>'+item.byyx+'</span>' +
                '<span>'+item.jl+'</span>' +
                '<span>'+item.jxkc+'</span>' +
                '</a>' +
                '</li>');
        })
    });
    //学员评价
    $.getJSON("../ltmJson.json",function(datas){
        var data=datas.xypj;
        console.log(datas);
        $.each(data,function(i,item){
            $('#ltm-qwe').append('<li>' +
                '<a href="" target="_blank">' +
                    '<div class="xypjImg">' +
                        '<img src="'+item.img+'" alt="'+item.name+'" title="'+item.name+'">' +
                    '</div>' +
                    '<h3>'+item.name+'</h3>' +
                    '<hr>' +
                    '<div class="xypjCont">'+item.con +'</div>' +
                '</a>' +
           '</li>');
        })
    });
});
var wordL=document.querySelector('.wordL');
wordL.style.height=innerHeight+'px';























