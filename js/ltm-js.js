// $(function () {
//         $("#ltmXdt").load('common/ltm-xdt.html')
//         $("#ltmHeader").load('common/ltm-header.html')
//         $("#ltmFooter").load('common/ltm-footer.html')
// })

$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop()<400) {
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
}


