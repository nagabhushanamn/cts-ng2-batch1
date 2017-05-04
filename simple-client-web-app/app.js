//console.log("-app.js-");



// using DOM API

document.addEventListener('DOMContentLoaded', function (e) {

    console.log('DOM Ready..');

    let box = document.querySelector('.well');
    let hideBtn = document.querySelector('.btn-danger');
    let showBtn = document.querySelector('.btn-primary');


    hideBtn.addEventListener('click', function (event) {
        box.style.display = 'none';
    });

    showBtn.addEventListener('click', function (event) {
        box.style.display = '';
    });

});