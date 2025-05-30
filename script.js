let nbtn = document.getElementById('normal-btn');
let qrbtn = document.getElementById('qr-btn');
let output = document.querySelector('.welcome');
let nofo = document.querySelector('.normalForm');
let qrfo = document.querySelector('.qrForm');
let lp = document.querySelector('.landing-page');

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
output.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'idCardForm') {
        e.preventDefault();

        const collegename = document.getElementById('collegename').value.trim();
        const name = document.getElementById('name').value.trim();
        const branch = document.getElementById('Branch').value.trim();
        const rollno = document.getElementById('rollno').value.trim();
        const dob = document.getElementById('dob').value;
        const phone = document.getElementById('phone').value.trim();
        const inputphoto = document.getElementById('photo');
        const file = inputphoto.files[0];

        if (!collegename || !name || !rollno || !dob || !phone || !file) {
            alert("Please fill in all fields and upload a photo.");
            return;
        }

        const imageURL = URL.createObjectURL(file);

        const idCardHTML = `
            <div class="card">
                <div class="card-header">
                    <p><strong>${collegename.toUpperCase()}</strong></p>
                </div>
                <div class="card-body">
                    <div class="body">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Branch:</strong> ${branch.toUpperCase()}</p>
                        <p><strong>Roll No:</strong> ${rollno}</p>
                        <p><strong>DOB:</strong> ${dob}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                    </div>
                    <div class="img-container">
                        <img src="${imageURL}" alt="Profile Picture" class="profile-pic">
                    </div>
                </div>
            </div>
        `;

        document.getElementById('idCardPreview').innerHTML = idCardHTML;
    }
});
output.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'downloadBtn') {
        const idCardElement = document.getElementById('idCardPreview');

        if (!idCardElement) {
            alert("No ID Card to download.");
            return;
        }

        html2canvas(idCardElement).then(canvas => {
            const link = document.createElement('a');
            link.download = 'id_card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
});
