// let nbtn = document.getElementById('normal-btn');
// nbtn.addEventListener('click', function() {
//     this.classList.toggle('active');
// });
// let qrbtn = document.getElementById('qr-btn');
// qrbtn.addEventListener('click', function() {
//     this.classList.toggle('active');
// });
let nbtn = document.getElementById('normal-btn');
let qrbtn = document.getElementById('qr-btn');

nbtn.addEventListener('click', function() {
    if (!nbtn.classList.contains('active')) {
        nbtn.classList.add('active');
        qrbtn.classList.remove('active');
    } else {
        nbtn.classList.remove('active');
    }
});

qrbtn.addEventListener('click', function() {
    if (!qrbtn.classList.contains('active')) {
        qrbtn.classList.add('active');
        nbtn.classList.remove('active');
    } else {
        qrbtn.classList.remove('active');
    }
});
