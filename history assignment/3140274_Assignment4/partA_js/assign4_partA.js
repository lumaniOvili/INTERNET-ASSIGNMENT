window.onload = function() {
    const textMore = "Read the whole article";
    const textLess = "[Hide]";
    const whatToHide = document.getElementById("show-hide");
    const moreLess = document.getElementById("more-less");
    whatToHide.classList.add("hidden");
    moreLess.innerHTML = textMore;
    
    moreLess.addEventListener("click", function() {
        if (moreLess.innerHTML === textMore) {
            moreLess.innerHTML = textLess;
            whatToHide.classList.remove("hidden");
            whatToHide.classList.add("visible");
        } else {
            moreLess.innerHTML = textMore;
            whatToHide.classList.remove("visible");
            whatToHide.classList.add("hidden");
        }
    });

    var absractDiv = document.getElementById("absractDiv");
    absractDiv.addEventListener("click", function(){changePadding(absractDiv)});
    
    var introDiv = document.getElementById("introDiv");
    introDiv.addEventListener("click", function(){changePadding(introDiv)});

    var controDiv = document.getElementById("controDiv");
    controDiv.addEventListener("click", function(){changePadding(controDiv)});

    var resultDiv = document.getElementById("resultDiv");
    resultDiv.addEventListener("click", function(){changePadding(resultDiv)});

    function changePadding(divElm) { 
        var currentColor = divElm.style.backgroundColor;
        var topPadding = divElm.style.paddingTop;
        var bottomPadding = divElm.style.paddingBottom;
        divElm.style.paddingBottom = "#e61e1e";
        divElm.style.paddingTop = "#1ee62f";
        if (bottomPadding === "2px") {
            divElm.style.paddingTop = "2px";
            divElm.style.backgroundColor = "#1ee62f";
            divElm.style.paddingBottom = "0";
        } else {
            divElm.style.paddingTop = "0";
            divElm.style.paddingBottom = "2px";
            divElm.style.backgroundColor = "#e61e1e";
        }
    }
    const table = document.getElementById("tableId");
    table.addEventListener("mouseenter", function() { 
        table.style.backgroundColor = "#0000ff"; // Change color on mouseenter
    });
    table.addEventListener("mouseleave", function() {  
        table.style.backgroundColor = "#1ee62f"; // Change color on mouseleave
    });
};
