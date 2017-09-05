 var buttons = document.querySelectorAll('.show-code');
 var output = document.querySelector('.modal-content code');

 for (var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', showCode);
 }

 function showCode() {
     output.innerHTML = this.parentElement.querySelector('.dark').innerHTML.replace(/</g, "&lt;");

 }