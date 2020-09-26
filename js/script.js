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

    document.getElementById('surprise').style.height = '15%';
    document.getElementById('mars').style.bottom = '10%';


    document.getElementById('surpriseBackground').style.zIndex = '4';
    document.getElementById('surpriseBackground').style.visibility = 'visible';

    document.getElementById('closeSurprise').style.visibility = 'visible';
}

function closeSurprise() {
    
    document.getElementById('foot').style.bottom = '-12%';
    document.getElementById('footerContent').style.marginBottom = '0%';
    document.getElementById('surprise').style.height = '0%';
    document.getElementById('mars').style.bottom = '-100%';


    document.getElementById('surpriseBackground').style.zIndex = '-1';
    document.getElementById('surpriseBackground').style.visibility = 'hidden';

    document.getElementById('closeSurprise').style.visibility = 'hidden';
}