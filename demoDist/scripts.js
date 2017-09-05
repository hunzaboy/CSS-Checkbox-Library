 var buttons = document.querySelectorAll('.show-code');
 var output = document.querySelector('.modal-content code');

 for (var i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', showCode);
 }

 function showCode() {
     output.innerHTML = this.parentElement.querySelector('.dark').innerHTML.replace(/</g, "&lt;");

 }

 $(document).on('click', 'a', function(event) {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
 });