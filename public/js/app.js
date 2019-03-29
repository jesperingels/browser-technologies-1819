if(document.getElementById('nojs-form')) {
    removeform();
}

function removeform() {
    // Removes an element from the document
    var el = document.getElementById('nojs-form');
    el.parentNode.removeChild(el);
}

if(document.querySelector('main') && !document.querySelector('main.overview')) {
    document.querySelector('main').insertAdjacentHTML('beforeend', '  <section class="js-form">\n' +
        '        <progress value="0" max="100"></progress>\n' +
        '        <form action="/all-data" method="post" id="form1">\n' +
        '            <input class=" " name="name" type="text" placeholder="Name..."/>\n' +
        '            <input class=" " name="date" type="date" placeholder="dd-mm-jjjj"/>\n' +
        '            <input class=" " name="colour" type="text" placeholder="Favorite colour..."/>\n' +
        '            <input class=" " name="animal" type="text" placeholder="Favorite animal..."/>\n' +
        '            <input class=" " name="movie" type="text" placeholder="Favorite movie..."/>\n' +
        '            <input class=" " name="education" type="text" placeholder="education..."/>\n' +
        '            <input class=" " name="drink" type="text" placeholder="Favorite drink..."/>\n' +
        '            <label>Favorite season:</label>\n' +
        '            <select name="season">\n' +
        '                <option value="summer">Summer</option>\n' +
        '                <option value="winter">Winter</option>\n' +
        '                <option value="spring">Spring</option>\n' +
        '                <option value="autumn">Autumn</option>\n' +
        '            </select>\n' +
        '            <input name="age" type="text" placeholder="Your age..."/>\n' +
        '        </form>\n' +
        '        <button id="send-form">Verstuur</button>\n' +
        '    </section>');


}



    var userInputs = document.querySelectorAll('input[name]');
    var userSelect = document.querySelector("select");
    var label = document.querySelector('label');

    // Increase
if(userInputs) {
    userInputs.forEach(function(el){

        if(localStorage.getItem(el.name)){
            el.value = localStorage.getItem(el.name);
        }

        el.addEventListener('change',function () {
            if(this.value === '' || this.value === null) {
                this.className = this.className.replace(/\bdone\b/g, "");
            } else {
                var name, arr;
                name = "done";
                arr = this.className.split(" ");
                if (arr.indexOf(name) === -1) {
                    this.className += " " + name;
                }
            }
            progress.value = document.querySelectorAll(".done").length*10 + 20;
            console.log(document.querySelectorAll(".done").length,this.value);

            localStorage.setItem(this.getAttribute('name'), this.value);
        })
    });
}

if(userSelect) {
    userSelect.addEventListener('change',function () {
        if(this.value === '' || this.value === null) {
            this.className = this.className.replace(/\bdone\b/g, "");
        } else {
            var name, arr;
            name = "done";
            arr = this.className.split(" ");
            if (arr.indexOf(name) === -1) {
                this.className += " " + name;
            }
        }
        progress.value = document.querySelectorAll(".done").length*10;
        console.log(document.querySelectorAll(".done").length,this.value)
    });
}



var forms = document.querySelectorAll('.js-form');
var form1 = document.getElementById('form1');
var input = document.querySelectorAll('input');
var progress = document.querySelector('progress');
var sendForm = document.getElementById('send-form');


if(sendForm) {

    sendForm.addEventListener('click', function () {
        localStorage.clear();

        userInputs.forEach(function(el){
            el.style.webkitAnimationPlayState = 'running';
        });

        userSelect.style.webkitAnimationPlayState = 'running';
        label.style.display = 'none';

        if(typeof setTimeout == 'function') {
            setTimeout(function () {
                form1.submit();
            },2500 )
        } else {
            form1.submit();
        }


    })
}












