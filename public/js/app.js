var forms = document.querySelectorAll('.js-form');
var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var input = document.querySelectorAll('input');
var progress = document.querySelector('progress');

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

var userInputs = document.querySelectorAll('input[name]');
var userSelect = document.querySelector("select");

// Increase
userInputs.forEach(function(el){
    el.addEventListener('change',function () {
        if(this.value === '' || this.value === null) {
            this.className.remove("done")
        } else {
            this.className.add("done")
        }
        progress.value = document.querySelectorAll(".done").length*10;
        console.log(document.querySelectorAll(".done").length,this.value)
    })
});

userSelect.addEventListener('change',function () {
    if(this.value === '' || this.value === null) {
        this.className.remove("done")
    } else {
        this.className.add("done")
    }
    progress.value = document.querySelectorAll(".done").length*10;
    console.log(document.querySelectorAll(".done").length,this.value)
});



