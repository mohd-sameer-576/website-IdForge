let nbtn = document.getElementById('normal-btn');
let qrbtn = document.getElementById('qr-btn');
let output = document.querySelector('.welcome');
let nofo = document.querySelector('.normalForm');
let qrfo = document.querySelector('.qrForm');
let lp = document.querySelector('.landing-page');


// function showForm(formToClone) {
//   let currentForm = output.querySelector('.animated-form');

//   if (currentForm) {
//     // Add fade-out and replace after animation ends
//     currentForm.classList.add('fade-out');
//     currentForm.addEventListener('animationend', () => {
//       output.innerHTML = '';
//       let newForm = formToClone.cloneNode(true);
//       newForm.classList.add('animated-form');
//       output.appendChild(newForm);
//     }, { once: true });
// } else {
//     output.classList.add('animaded-form');
//     let newForm = formToClone.cloneNode(true);
//     newForm.classList.add('animated-form');
//     output.innerHTML = '';
//     output.appendChild(newForm);
//   }
// }

function showForm(formToClone) {
    let currentForm = output.querySelector('.animated-form');

    if (currentForm) {
        // If a form is showing, fade it out
        currentForm.classList.add('fade-out');
        currentForm.addEventListener('animationend', () => {
            output.innerHTML = '';
            let newForm = formToClone.cloneNode(true);
            newForm.classList.add('animated-form', 'fade-in');
            output.appendChild(newForm);
        }, { once: true });
    } else {
        // Welcome content: fade out entire .welcome contents
        output.classList.add('fade-out');
        output.addEventListener('animationend', () => {
            output.classList.remove('fade-out');
            output.innerHTML = '';
            let newForm = formToClone.cloneNode(true);
            newForm.classList.add('animated-form', 'fade-in');
            output.appendChild(newForm);
        }, { once: true });
    }
}

nbtn.addEventListener('click', function () {
    if (!nbtn.classList.contains('active')) {
        output.style.height = "auto";
        if (!nbtn.classList.contains('active')) {
            nbtn.classList.add('active');
            nbtn.disabled = true;
            qrbtn.classList.remove('active');
            qrbtn.disabled = false;
            output.style.height = 'auto';
            showForm(nofo);
        } else {
            nbtn.classList.remove('active');
            nbtn.disabled = false;
            output.style.height = "120vh";
        }

    }

});

qrbtn.addEventListener('click', function () {
    if (!qrbtn.classList.contains('active')) {
        qrbtn.classList.add('active');
        qrbtn.disabled = true;
        nbtn.classList.remove('active');
        nbtn.disabled = false;
        output.style.height = 'auto';
        showForm(qrfo);
    } else {
        qrbtn.classList.remove('active');
        qrbtn.disabled = false;
        output.style.height = "120vh";
    }
});
