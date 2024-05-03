let upload = document.getElementById('upload');
upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload = function () {

        let Arr = fr.result.split(/\r?\n|\n/).map(e => {
            return e.split(',');
        });
        Window.valNo = 0;
        let invalNo = 0;
        Window.valMail = [];
        Arr.forEach(e => {
            let em = String(e);
            let m = e.map(e => {
                return `<td>${e}</td>`;
            })
            let creEle = document.createElement("tr");
            creEle.innerHTML = m;
            if (em != "") {

                // if(em. indexof("@") != 0);
                // document.querySelector("table#Val").appendChild(creEle);
                // return false;
                // }

                if (em.charAt(em.length - 4) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }
                else if (em.charAt(em.length - 3) == '.') {
                    document.querySelector("table#val").appendChild(creEle);
                    Window.valMail.push(em);
                    Window.valNo = Window.valNo + 1;
                    return false;
                }

                else {
                    document.querySelector("table#inval").appendChild(creEle);
                    invalNo = invalNo + 1;
                    return false;
                }
            }
        });
        document.querySelector('#valCount').innerHTML = Window.valNo;
        document.querySelector('#invalCount').innerHTML = invalNo;
    }
});

function sendEmail() {

    let validEmails = Window.valMail.join(',');

    Email.send({

        SecureToken: "f0975bc1-7bcf-462f-8f4c-83dbf2696073",
        To: validEmails,
        From: "massmaildispatcher01@gmail.com",
        Subject: document.querySelector('#subject').value,
        Body: document.getElementById('msg').value
    }).then(
        alert(Window.valNo + "mails have been sent successfully")
    ).catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email');
    });

    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);

}

