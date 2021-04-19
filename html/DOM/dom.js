//var headers = document.getElementsByTagName('h1')[0];
//var headers = document.querySelector('h1');//Получает только первый элемент с тэгом h1

var headers = document.querySelectorAll('h1'); //Получает все элементы с тэгом h1

//var headers = document.querySelectorAll('.h1'); //Получает все элементы с классом h1

//var headers = document.querySelectorAll('#h1'); //Получает все элементы с id h1

for (var i = 0, size = 20; i < headers.length; i++, size += 15) {
	if (i % 2 == 0) {
		headers[i].style.color = "red";
	} else {
		headers[i].style.color = "green";
	}
	headers[i].style.fontSize = size + 'px';
	//headers[i].id = 'header_' + i;
	headers[i].setAttribute('id', 'header_' + i);
	//headers[i].setAttribute('class', 'title-' + i);
	headers[i].className = 'title head';
	headers[i].classList.remove('title');
	headers[i].classList.add('new1');
	headers[i].classList.toggle('new');//если класс есть то он удалиться, а если его нет, то он добавится
}