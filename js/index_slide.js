//fotogalerija
var workSlideBtns = $$('#darbi .box-buttons-ring button')
var workSlides = $$('#galerija .box-slide')
for (var i in workSlideBtns) {
    workSlideBtns[i].onclick = function(e) {
        e && e.preventDefault();
        slideToX(workSlideBtns.indexOf(this), workSlideBtns, workSlides);
    }
}
//darbinieku bildes
var teamSlideBtns = $$('#komanda .box-buttons-ring button')
var teamSlides = $$('#komanda .box-slide')
for (var i in teamSlideBtns) {
    teamSlideBtns[i].onclick = function(e) {
        e && e.preventDefault();
        slideToX(teamSlideBtns.indexOf(this), teamSlideBtns, teamSlides);
    }
}
//
function slideToX(index = 0, btns = [], slides = []) {
    if (index >= 0 && index < btns.length && slides.length > 0) {
        for (var i in btns) btns[i].classList.remove('btn-ring-active')
        btns[index].classList.add('btn-ring-active');
        for (var i in slides) slides[i].style.transform = 'translateX(' + (-100 * index) + '%)'
    }
}
//
