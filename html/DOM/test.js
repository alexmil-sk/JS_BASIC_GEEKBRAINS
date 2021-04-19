
	var title = document.getElementById('header');
	
	
title.innerText = 'Welcome';
//alert(title.innerText);

title.innerText = 'Welcommen';
title.id = 'new';
//title.class = 'head';
//alert(title.class);

var block = document.getElementsByClassName('test')[0];
block.innerHTML += '<h3>Пример заголовка h3</h3>';
console.log(block);

for (var i = 1; i <= 10; i++) {
	//block.innerHTML += '<h3>Заголовок № ' + i + '</h3>'; данный вариант забирает много ресурсов
	block.insertAdjacentHTML('afterEnd', '<h3>Заголовок № ' + i + '</h3>');
}

//Существуют четыре маркера для вставки куда:
//1. beforeBegin - вставляется перед тэгом div
//2. afterBegin - вставляет сразу после тэга div, начиная с 1. Т.е. заголовки вставляются от 1 до 10 снизу вверх. Первый сверху будет Заголовок 10
//3. beforeEnd - вставляет сразу перед закрытием тэга div, начиная с 1. Т.е. заголовки вставляются от 1 до 10 сверху вниз. Первый сверху будет Заголовок 1, а последний Заголовок 10.
//4. afterEnd - вставляется после закрытия тэга div

