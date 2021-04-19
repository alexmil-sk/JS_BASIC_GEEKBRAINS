var list = document.querySelector('ul');
var item = document.createElement('li');//Создали тэг <li></li>
item.innerText = 'Новый элемент';
//list.append(item);
list.insertBefore(item, list.children[3]);

var link = document.createElement('a');
link.href = 'http://yandex.ru';
link.innerText = 'Новая ссылка';

document.body.append(link);

var text = document.createTextNode('Обычный текст!!!');
document.body.append(text);
var script = document.createElement('script');

script.innerText = 'alert(123)';

document.body.append(script);