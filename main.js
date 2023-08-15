 const containerEL = document.querySelector(".container");

 const btnEL = document.querySelector(".btn");

 const popupContainerEL = document.querySelector(".popup-container");

 const closeIconEL = document.querySelector(".close-icon");

 btnEL.addEventListener("click", () => {
    containerEL.classList.add("active");
    popupContainerEL.classList.remove("active");
 });

 closeIconEL.addEventListener("click", () => {
    containerEL.classList.remove("active");
    popupContainerEL.classList.add("active");
 });