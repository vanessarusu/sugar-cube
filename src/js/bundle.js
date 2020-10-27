import knowYourSkin from './knowYourSkin';
import servicesAccordion from './servicesAccordion';

(function(){
    var pageIds = {
        knowYourSkin: "108",
        services: "92"
    }
    
    // change to switch cases
    if(document.querySelector(`body.page-id-${pageIds.knowYourSkin}`)) {
        const kys = knowYourSkin();
        kys.init();
    }
    else if (document.querySelector(`body.page-id-${pageIds.services}`)) {
        const sa = servicesAccordion();
        sa.init();
    }



    var hamburgerMenu = document.querySelector('button.hamburger-container');
    var mobileMenu = document.querySelector('.fl-page-nav-collapse.navbar-collapse');
    
    hamburgerMenu.addEventListener('click', toggleNav, false);

    function toggleNav() {

        if(mobileMenu.classList.contains('in')) {
            hamburgerMenu.classList.toggle('navbar-open');
        }

        else {
            hamburgerMenu.classList.toggle('navbar-open');
        }
    }
    // site credits
    console.clear();
    console.log('%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com', 'color: #76bc21; font-size: 14px;');
})();