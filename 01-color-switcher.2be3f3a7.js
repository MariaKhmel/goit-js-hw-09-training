!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.startBtn.addEventListener("click",(function(n){a=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){console.log("aaaaaaaaa"),clearInterval(a),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}));var a=null;t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.2be3f3a7.js.map