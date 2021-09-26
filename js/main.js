// var myCarousel = document.querySelector('#myslide')
// var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 1000,
//     // wrap: false
// })






//hide and show the color box
var box = document.querySelector(".color-box i")
var option = document.querySelector(".option")
box.onclick = function () {
    option.classList.toggle("show")
}



//change style color when click on color 
var li = document.querySelectorAll(".color-box li")
var link = document.head.querySelector("link[href*='color']")

li.forEach((e) => e.addEventListener("click" , function () {
    link.href = this.dataset.value
}))


// let navLink = document.querySelectorAll(".nav-link")

// navLink.onclick =function () {
//     navLink.forEach((e) => {
//         this.classList.add("active")
//     })
// } 