!function(){var t=null,e={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.stop.disabled=!0,e.start.addEventListener("click",(function(){e.start.disabled=!0,e.stop.disabled=!1,t=setInterval((function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.stop.addEventListener("click",(function(){e.start.disabled=!1,e.stop.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.39f61238.js.map