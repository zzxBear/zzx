
new Swiper('.swiper-container',{
    pagination: '.swiper-pagination',
    effect : 'flip',
    flip: {
        slideShadows : true,
        limitRotation : true,
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView : 'auto',
    loopedSlides :4,
    loop:true
});