var head = document.createElement('h1');
head.classList.add('title');
head.innerHTML = 'Тест по программированию';
var body = document.body;
var form = document.createElement('form');
form.classList.add('form');
body.appendChild(head);
body.appendChild(form);
var i;
var k;
for (i = 1; i < 4; i++) {
    var questionBlock = document.createElement('label');
    form.insertBefore(questionBlock, null);
    questionBlock.classList.add('question_block_' + i);  
    var question = document.createElement('h3');
    question.classList.add(i + 'question_' + i);
    question.innerHTML = i +' ' + '.Вопрос №' + i;
    questionBlock.appendChild(question);
    for (k = 1; k < 4; k++) {
        var answer = document.createElement('label');        
        var checkbox = document.createElement('input');
        var text = document.createElement('p');
        text.innerHTML = 'Вариант ответа №' + k;
        checkbox.type = 'checkbox';
        checkbox.id = ('question_' + i  + k);
        checkbox.name = ('question_' + i +  k);
        checkbox.value = ('question_' + i +  k);
        checkbox.classList.add('question_block_' + i +  k);
        questionBlock.insertBefore(answer, null);
        answer.insertBefore(checkbox, null);
        answer.insertBefore(text, null);
        text.style.display = 'inline-block';
    }
}
var submit = document.createElement('input');
submit.type = 'submit';
submit.className = 'btn btn-default';
submit.value = 'Проверить мои результаты';
body.appendChild(submit);