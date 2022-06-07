//////////////////////////////////////////// СЛАЙДЕР////////////////////////////////////////
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    // freeMode: true,
    // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 5000,
    },
});

//   //////////////////////////////// NAVIGATION BAR EFFECTS ON SCROLL ////////////////////////////////////
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//  //////////////////////////////// RESPONSIVE NAVIGATION MENU TOGGLE ////////////////////////////////////


const menuBtn = document.querySelector(".nav-menu-bth");
const closeBtn = document.querySelector(".nav-close-bth");
const navigation = document.querySelector(".navigation");

const closeMenu = document.querySelector(".nav-items");



menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

closeMenu.addEventListener("click", () => {
    navigation.classList.remove("active");
});



// closeUslug.addEventListener("click", () => {
//     navigation.classList.remove("active");
// });


// /////////////////////////////////////////// КАРТЫ ///////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////// картинки самолета (услуги)////////////////////////////////////////


const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");
window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        gallery[i].onclick = () => {
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview() {
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; //decrement index
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; //increment index
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }

    }
}



// /////////////////////////////////////////////////////////////////////////////// СЛАЙДЕР ДЛЯ СТРАНИЦЫ "Uslug1" ////////////////////////////////////////////////////////