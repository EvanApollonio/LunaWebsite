function openSlideMenu() {
    document.getElementById('menu').style.width = '25%';
    document.getElementById('content').style.marginRight = '25%';

}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginRight = '0';

}

function surprise() {
    document.getElementById('foot').style.height = '12%';
    document.getElementById('footerContent').style.marginBottom = '12%';
    document.getElementById('surprise').style.height = '15%';
    document.getElementById('marsIm').style.bottom = '12%';


    document.getElementById('surpriseBackground').style.backgroundColor = '#e2e1ce';

    document.getElementById('closeSurprise').style.visibility = 'visible';
}

function closeSurprise() {
    
    document.getElementById('foot').style.height = '0%';
    document.getElementById('footerContent').style.marginBottom = '0%';
    document.getElementById('surprise').style.height = '0%';
    document.getElementById('marsIm').style.bottom = '-100%';


    document.getElementById('surpriseBackground').style.color = '#e2e1ce';
    document.getElementById('surpriseBackground').style.opacity = '';

    document.getElementById('closeSurprise').style.visibility = 'hidden';
}