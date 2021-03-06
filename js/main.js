var openerElem = document.querySelector('.button-search');
var modalElem = document.querySelector('.offer');
modalElem.classList.toggle('offer-open');

var leaving = modalElem.querySelector("[name=date-leaving]");
var adult = modalElem.querySelector("[name=adult]");
var form = modalElem.querySelector(".modal-open");

if (openerElem) {
    openerElem.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalElem.classList.toggle('offer-open');
        form.classList.toggle('offer-show');
        form.classList.remove("offer-error");
    });
}

var isStorageSupport = true;

form.addEventListener("submit", function (evt) {
    if (!adult.value || !leaving.value) {
        evt.preventDefault();
        form.classList.remove("offer-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("offer-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem('adults', guests.item(0).value);
            localStorage.setItem('children', guests.item(1).value);
        }
    }
});
