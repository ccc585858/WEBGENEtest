var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 獲取所有連結元素
const linka = document.querySelectorAll(".navList a");

// 當用戶滾動時觸發
window.addEventListener("scroll", () => {
  // 獲取當前滾動位置
  const scrollY = window.scrollY;

  // 對每個連結進行檢查
  linka.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    // 檢查滾動位置是否在該部分的範圍內
    if (
      section &&
      scrollY >= section.offsetTop &&
      scrollY < section.offsetTop + section.offsetHeight
    ) {
      // 添加或刪除 .active 類別以更改樣式
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// 點擊連結時平滑滾動到目標部分
linka.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

let buttonContainer = document.querySelector(".button_container");
let overlay = document.querySelector(".overlay");
let links = document.querySelectorAll(".overlay ul li a");

// 添加點擊事件監聽器到每個連結
links.forEach((link) => {
  link.addEventListener("click", () => {
    // 收起hamburger
    buttonContainer.classList.remove("active");
    overlay.classList.remove("open");

    // 移除所有連結的樣式
    links.forEach((link) => {
      link.classList.remove("bgcolor");
    });

    // 添加樣式到被點擊的連結
    link.classList.add("bgcolor");
  });
});

// 添加點擊事件監聽器到hamburger按鈕
buttonContainer.addEventListener("click", () => {
  // 切換hamburger的狀態
  buttonContainer.classList.toggle("active");
  overlay.classList.toggle("open");
});

/* ======================= progress ============================== */
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  // console.log(pos);
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // console.log(calcHeight);
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });

  // scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, transparent ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
