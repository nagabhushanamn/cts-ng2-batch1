'use strict';

/*

     by default ,
     every event-listener's context exexuted by event-emitter.

*/

var tnr = {
    name: 'Nag'
};

var tnrService = {
    doTeach: function doTeach() {
        console.log(this.name + ' teaching .js');
    }
};

var btn = document.querySelector('.btn-primary');

// btn.addEventListener('click', function () { 
//     tnrService.doTeach.call(tnr);   
// });

// or

var newF = tnrService.doTeach.bind(tnr);
btn.addEventListener('click', newF);