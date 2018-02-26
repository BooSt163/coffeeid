const navbar = document.getElementById('nav-bg');
const coord = navbar.offsetTop;
const screenRes = window.innerWidth;


window.onscroll = function () {
    const scroll = window.scrollY;
    if (scroll > coord && screenRes > 640 ) {
        navbar.classList.add('navbar')
    } else {
        if (navbar.classList.contains('navbar')) {
            navbar.classList.remove('navbar');
        }
    }

    {

    }
}


    


  var linkNav = document.querySelectorAll('#nav_link'),
    V = 0.3;  
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
        t = document.querySelector(hash).getBoundingClientRect().top,  
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
    }, false);

    }

    

    

$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "../php/send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отправлено!");
          },
          error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
    
            }
    });
});  
}); 
    
