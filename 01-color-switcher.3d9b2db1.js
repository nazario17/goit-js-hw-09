const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){document.body.style.backgroundColor=o(),d=setInterval((()=>{document.body.style.backgroundColor=o()}),1e3),d&&(t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled"))})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled","disabled"),e.startAttribute("disabled","disabled")}));let d=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.3d9b2db1.js.map
