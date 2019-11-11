function slider() {
    const sl1 = document.querySelector('.sl1'),
        sl2 = document.querySelector('.sl2'),
        sl3 = document.querySelector('.sl3')
    const text = document.querySelector('.feedbacks-users p');
    const name = document.querySelector('.user-name b');
    const proff = document.querySelector('.user-name span');
    const img = document.querySelector('.user-name img');


    sl1.addEventListener('click', function(){
        text.textContent = "Привет, меня зовут Лина Соломатина я начинающий веб дизайнер, очень хочу научиться, что бы больше не работать с людьми";
        name.textContent = "Lina Solomatina";
        proff.textContent = "Web Designer";
        img.src = '/img/feedbacks/li.jpg';
    });
    sl2.addEventListener('click', function(){
        text.textContent = " Привет, я сверстал эту страницу, прошел курс сам у себя и безумно рад результату, мог бы сверстать еще раньше, НО лень, а так вроде все ок";
        name.textContent = "Alex Nesterov";
        proff.textContent = "Front-end";
        img.src = '/img/feedbacks/alex.jpg';
    });
    sl3.addEventListener('click', function(){
        text.textContent = "Привет, меня зовут Серега Безруков и я хуй пойми что тут делаю, просто Саше нечего было брать для примера, вот я тут и нахожусь, а так все збс";
        name.textContent = "Sergey Bezrukov";
        proff.textContent = "Game Dev";
        img.src = '/img/feedbacks/ser.jpg';
    });
};
document.addEventListener('DOMContentLoaded', slider);
