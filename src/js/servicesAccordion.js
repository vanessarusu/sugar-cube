const servicesAccordion = (function () {
    function init() {
        var accordionHeadings = document.querySelectorAll('.servicesAccordion .fl-accordion-button-label');
        accordionHeadings.forEach(function(el) {
            var array = el.innerHTML.split(" ");
            var lastWord = array[array.length-1];
            
            if(lastWord.indexOf("$") !== -1) {
                array.pop();
                var newHeading = `<span class="title"> ${array.join(' ')} </span><span class="service-price">${lastWord}</span>`;
                el.innerHTML = newHeading;
            }
        })
    }

    return {
        init: init
    }
});

export default servicesAccordion;