//console.log("-app.js-");



// using DOM API

// document.addEventListener('DOMContentLoaded', function (e) {

//     console.log('DOM Ready..');

//     let box = document.querySelector('.well');
//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');


//     hideBtn.addEventListener('click', function (event) {
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (event) {
//         box.style.display = '';
//     });

// });


//----------------------------------------------------------------


$(document).ready(function () { 

    let box = $('.well');
    $('.btn-danger').click(function () { box.slideUp(2000);});
    $('.btn-primary').click(function () { box.slideDown(2000);});

});

//----------------------------------------------------------------