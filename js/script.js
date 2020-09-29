function openSlideMenu() {
    document.getElementById('menu').style.right = '0%';
    document.getElementById('content').style.marginRight = '25%';

}
function closeSlideMenu() {
    document.getElementById('menu').style.right = '-25%';
    document.getElementById('content').style.marginRight = '0';

}

function surprise() {
    document.getElementById('foot').style.bottom = '0%';
    document.getElementById('footerContent').style.marginBottom = '12%';

    document.getElementById('surprise').style.bottom = '15%';
    document.getElementById('surprise').style.opacity = '0';
    document.getElementById('surprise').style.zIndex = '5';

    document.getElementById('surpriseClose').style.bottom = '15%';
    document.getElementById('surpriseClose').style.opacity = '1';
    document.getElementById('surpriseClose').style.zIndex = '6';

    document.getElementById('marsIm').style.bottom = '10%';
    document.getElementById('marsTxt').style.bottom = '65%';

    document.getElementById('surpriseBackground').style.zIndex = '4';
    document.getElementById('surpriseBackground').style.visibility = 'visible';

    document.getElementById('closeSurprise').style.visibility = 'visible';

    document.getElementById('contactArrow').style.visibility = 'hidden';
}

function closeSurprise() {
    
    document.getElementById('foot').style.bottom = '-12%';
    document.getElementById('footerContent').style.marginBottom = '0%';

    document.getElementById('surprise').style.bottom = '2%';
    document.getElementById('surprise').style.opacity = '1';
    document.getElementById('surprise').style.zIndex = '6'

    document.getElementById('surpriseClose').style.bottom = '1.8%';
    document.getElementById('surpriseClose').style.opacity = '0';
    document.getElementById('surpriseClose').style.zIndex = '5'

    document.getElementById('marsIm').style.bottom = '-100%';
    document.getElementById('marsTxt').style.bottom = '-75%';



    document.getElementById('surpriseBackground').style.zIndex = '-1';
    document.getElementById('surpriseBackground').style.visibility = 'hidden';

    document.getElementById('closeSurprise').style.visibility = 'hidden';

    document.getElementById('contactArrow').style.visibility = 'visible';
}