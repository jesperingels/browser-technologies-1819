const forms = document.querySelectorAll('.js-form');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const input = document.querySelectorAll('input');
const progress = document.querySelector('progress');

forms.forEach(function (prop) {
    prop.style.display = 'flex';
});

document.getElementById('nojs-form').style.display = 'none';

// Submit all forms on click
document.getElementById('send-form').addEventListener('click', function () {
    form1.submit();
    form2.submit();
    form3.submit();
});

const userInputs = document.querySelectorAll('input[name]');
const userSelect = document.querySelector("select");

// Increase
userInputs.forEach(function(el){
    el.addEventListener('change',function () {
        if(this.value === '' || this.value === null) {
            this.classList.remove("done")
        } else {
            this.classList.add("done")
        }
        progress.value = document.querySelectorAll(".done").length*10;
        console.log(document.querySelectorAll(".done").length,this.value)
    })
});

userSelect.addEventListener('change',function () {
    if(this.value === '' || this.value === null) {
        this.classList.remove("done")
    } else {
        this.classList.add("done")
    }
    progress.value = document.querySelectorAll(".done").length*10;
    console.log(document.querySelectorAll(".done").length,this.value)
});



