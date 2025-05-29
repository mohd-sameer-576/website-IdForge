
// let nbtn = document.getElementById('normal-btn');
// let qrbtn = document.getElementById('qr-btn');
// let output = document.getElementsByClassName('welcome');
// let nofo = document.getElementsByClassName('normalForm');
// let qrfo = document.getElementsByClassName('qrForm');

// nbtn.addEventListener('click', function() {
//     if (!nbtn.classList.contains('active')) {
//         nbtn.classList.add('active');
//         qrbtn.classList.remove('active');
//         // nofo[0].style.display = 'flex';
//         // qrfo[0].style.display = 'none';
//         output[0].innerHTML = '';
//         output[0].appendChild(nofo[0].cloneNode(true)); // Add normal form
//     } else {
//         nbtn.classList.remove('active');
//         // nofo[0].style.display = 'none';
//         output[0].innerHTML = '';

//     }
//     // output[0].innerHTML = "Welcome to the Normal Mode!";
// });

// qrbtn.addEventListener('click', function() {
//     if (!qrbtn.classList.contains('active')) {
//         qrbtn.classList.add('active');
//         nbtn.classList.remove('active');
//         qrfo[0].style.display = 'flex';
//         nofo[0].style.display = 'none';
//         output[0].innerHTML = '';
//     } else {
//         qrbtn.classList.remove('active');
//         qrfo[0].style.display = 'none';
//         output[0].innerHTML = '';
//     }
//     // output[0].innerHTML = "Welcome to the QR Code Mode!";
// });

let nbtn = document.getElementById('normal-btn');
let qrbtn = document.getElementById('qr-btn');
let output = document.getElementsByClassName('welcome')[0];
let nofo = document.getElementsByClassName('normalForm')[0];
let qrfo = document.getElementsByClassName('qrForm')[0];

nbtn.addEventListener('click', function() {
    if (!nbtn.classList.contains('active')) {
        nbtn.classList.add('active');
        qrbtn.classList.remove('active');

        output.innerHTML = ''; // clear old form
        output.appendChild(nofo.cloneNode(true)); // add Normal Form clone
    } else {
        nbtn.classList.remove('active');
        output.innerHTML = ''; // remove form
    }
});

qrbtn.addEventListener('click', function() {
    if (!qrbtn.classList.contains('active')) {
        qrbtn.classList.add('active');
        nbtn.classList.remove('active');

        output.innerHTML = ''; // clear old form
        output.appendChild(qrfo.cloneNode(true)); // add QR Form clone
    } else {
        qrbtn.classList.remove('active');
        output.innerHTML = ''; // remove form
    }
});
