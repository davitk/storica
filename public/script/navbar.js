let isTop = $(".navbar").offset().top < 50;

handleResize();

$(window).scroll(function () {
    handleResize();
});
$(window).resize(function () {
    handleResize();
});

function handleResize() {
    let navbarTopThreshold = 0;
    let navbarBottomThreshold = 50;
    let windiwWidthThreshold = 751;

    let navbarScroll = $(".navbar").offset().top;
    let windowWidth = $(window).width();
    let isWide = windowWidth > windiwWidthThreshold;
    const hash = window.location.pathname;


    if (isTop) {
        if (navbarScroll > navbarBottomThreshold) {
            isTop = false;
        }
    } else {
        if (navbarScroll == navbarTopThreshold) {
            isTop = true;
        }
    }

    if (isWide) {
        if(hash == "/") {
            if (isTop) {
                $(".navbar-default").css({"background": "transparent", "border": "none","box-shadow": "none"});
                $(".brand-logo").css({"background-image": "url(../../public/img/logo-white.png)"});
                $(".navbar-nav>li>a").css({"color": "#ffffff"});
            } else {
                $(".navbar-default").css({"background-color": "#ffffff", "border": "none", "box-shadow": "0 2px 2px -2px grey"});
                $(".brand-logo").css({"background-image": "url(../../public/img/logo-black.png)"});
                $(".navbar-nav>li>a").css({"color": "#000000"});
            }
        }else if(hash !== "/") {
            if (isTop) {
                $(".navbar-default").css({"background-color": "#ffffff", "border": "none", "box-shadow": "0 2px 2px -2px grey"});
                $(".brand-logo").css({"background-image": "url(../../public/img/logo-black.png)"});
                $(".navbar-nav>li>a").css({"color": "#000000"});
            }else {
                $(".navbar-default").css({"background-color": "#ffffff", "border": "none", "box-shadow": "0 2px 2px -2px grey"});
                $(".brand-logo").css({"background-image": "url(../../public/img/logo-black.png)"});
                $(".navbar-nav>li>a").css({"color": "#000000"});
            }
        }
    } else {
        if(hash == "/") {
            if (isTop) {
                $(".navbar-default").css({"background": "transparent", "border": "none"});
                $(".navbar-brand").css({"background-image": "url(../../public/img/logo-white.png)"});
            } else {
                $(".navbar-brand").css({"background-image": "url(../../public/img/logo-white.png)"});
            }
        }else if(hash !== "/") {
            if (isTop) {
                $(".navbar-default").css({"background-color": "red", "border": "none"});
            } else {

            }
        }
    }
}
