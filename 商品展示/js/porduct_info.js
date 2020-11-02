var galleryThumbs = new Swiper('.bot_1', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper

    observeParents:true//修改swiper的父元素时，自动初始化swiper
  });
  var galleryTop = new Swiper('.top_1', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    observer:true,//修改swiper自己或子元素时，自动初始化swiper

    observeParents:true//修改swiper的父元素时，自动初始化swiper
  });