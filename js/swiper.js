var swiper = new Swiper('.swiper-container-my1', {
    pagination: '.swiper-pagination-my1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-my2', {
    pagination: '.swiper-pagination-my2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-my3', {
    pagination: '.swiper-pagination-my3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-my3',
    prevButton: '.swiper-button-prev-my3'
});