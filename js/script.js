function openSlideMenu() {
    document.getElementById('menu').style.width = '500px';
    document.getElementById('content').style.marginRight = '500px';

}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginRight = '0';

}

var open = false;
function surprise() {
    if (open == false) {
        var open = true;
        document.getElementById('foot').style.height = '100px';
        document.getElementById('footerContent').style.marginBottom = '100px';
        document.getElementById('surprise').style.height = '150px';
    } else {
        document.getElementById('foot').style.height = '0px';
        document.getElementById('footerContent').style.marginBottom = '0px';
        document.getElementById('surprise').style.height = '50px';
    }

    
}