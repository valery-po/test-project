/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}



const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");


sidebarToggleBtn.onclick = function (){
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar--mobile-active");
};

btnShowMoreCards.addEventListener("click", () => {
  
 
  
  hiddenCards.forEach(function (card) {
     
    card.classList.remove("card-link--hidden");
    
  });
 
});


const widgets = document.querySelectorAll(".widget");

widgets.forEach( widget => {
  
  widget.addEventListener("click", (e) => {
    
   if(e.target.classList.contains("widget__title")){
     
     e.target.classList.toggle("widget__title--active");
     
     e.target.nextElementSibling.classList.toggle("widget__body--hidden")
   }
  });
});

const checkBoxAny = document.querySelector("#location-05");
const topLocationCheckboxes = document.querySelectorAll("[data-location-param]");


checkBoxAny.addEventListener("change", () => {
  
  if(checkBoxAny.checked){
    topLocationCheckboxes.forEach (el => {
      
      el.checked = false;
    });
  }
});

topLocationCheckboxes.forEach(el => {
  el.addEventListener("change", () => {
     if(checkBoxAny.checked){
       checkBoxAny.checked = false;
     }
    
  });
});

const showMoreOptions = document.querySelector(".widget__show-hidden");
const checkBoxHidden = document.querySelectorAll(".checkbox--hidden");



showMoreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  if(showMoreOptions.dataset.options == "hidden"){
    checkBoxHidden.forEach(el => {
    el.style.display = "block";
  });
  
    showMoreOptions.textContent = "Скрыть дополнительные опции";
    showMoreOptions.dataset.options = "visible";
  }
  
  else if(showMoreOptions.dataset.options == "visible"){
       
  checkBoxHidden.forEach(el => {
    el.style.display = "none";
  });
    showMoreOptions.textContent = "Показать еще";
    showMoreOptions.dataset.options = "hidden";
  }
  
});
