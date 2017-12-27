function openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
    if($(window).width() < 768) {
    	$("#mySidenav").addClass('full-width');
    } else {
    	$("#mySidenav").addClass('small-width');
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    $("#mySidenav").removeClass('full-width');
    $("#mySidenav").removeClass('small-width');
}