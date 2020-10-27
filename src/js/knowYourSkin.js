const knowYourSkin = (function () {
    var growthCycleDiagram = document.querySelector("#growthCycleDiagram");
    var SVGPhases = growthCycleDiagram.querySelectorAll("svg .phase-bg");
    var growthCycleTabs = document.querySelectorAll("#growthCycleTabs .fl-tabs-labels .fl-tabs-label");
    var SVGActiveClass= "active";
    var tabsActiveClass = "fl-tab-active";

    function forceSVGClick(index) {
        setTimeout(function() {
            var elmToCheck = document.querySelector(`svg [data-index="${index}"]`);
            if(!elmToCheck.classList.contains(SVGActiveClass)) {
                elmToCheck.dispatchEvent(new Event('click'));
            }
        }, 0);      
    }

    function forceTabClick(index) {
        setTimeout(function() {
            var elmToCheck = document.querySelector(`#growthCycleTabs [data-index="${index}"]`);
            if(!elmToCheck.classList.contains(tabsActiveClass)) {
                elmToCheck.click();
            }  
        }, 0);
    }

    function init() {
        styleTabs();
        SVGPhases.forEach(function(el) {
            el.addEventListener('click', function(e) {
                var clickedElm = e.target;
    
                // highlight the correct phase in svg
                SVGPhases.forEach(function(elm) {
                    elm.classList.contains("active")
                    ? elm.classList.remove("active")
                    : "";
    
                    elm.getAttribute("id") === clickedElm.getAttribute("id")
                    ? elm.classList.add("active")
                    : "";
                });
    
                forceTabClick(clickedElm.getAttribute("data-index"));
            });
        });
        
        // when the tab is clicked force a click on the corresponding svg phase
        growthCycleTabs.forEach(function(el) {
            el.addEventListener('click', function(e) {
                var diagramIndex = e.target.getAttribute("data-index");
                forceSVGClick(diagramIndex);  
            })
        });
    }

    function styleTabs() {
        growthCycleTabs.forEach(function(el) {
            var array = el.innerHTML.split(" ");
            var lastWord = array[array.length-1];
            if(!isNaN(lastWord)) {
                array.pop();
                var newHeading = `${array.join(' ')}<span class="phase-number">${lastWord}</span>`;
                el.innerHTML = newHeading;
            }
        })
    }

    return {
        init: init
    }
});

export default knowYourSkin;