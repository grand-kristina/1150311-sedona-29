
var openerElem = document.querySelector('.button-search');
var modalElem = document.querySelector('.offer');
modalElem.classList.toggle('offer-open');

if (openerElem) {
    openerElem.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalElem.classList.toggle('offer-open');
    });
}

