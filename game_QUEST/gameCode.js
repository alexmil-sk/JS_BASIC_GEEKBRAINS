//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var occur, ok;
var answerNumber = [];
var answerText = [];
var questions = [];

//var answers = [];

do {//Выводим первый вопрос
    ok = false;
    occur = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (occur == -1) {
        break;
    }
    else {
		 ok = isAnswer(works.a0, occur);//Функция, которая принимает количество вариантов ответа и ответ пользователя
		 if (occur > 2) {
			 answerNumber.push();
		 } else {
			 questions.push(works.a00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
			 answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
		 }
		 if (occur == 1) {
			 answerText.push(works.a1);
		 } else if (occur == 2) {
		 	answerText.push(works.a2);
		 } else {
		 	answerText.push();
		 }
	}
} while (!ok);
switch (occur) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            occur = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (occur == -1) {
            	break;
            }
            else {
					ok = isAnswer(works.b0, occur);//Функция, которая принимает количество вариантов ответа и ответ пользователя
					if (occur > 2) {
						answerNumber.push();
					} else {
						questions.push(works.b00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
						answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
					}
					if (occur == 1) {
						answerText.push(works.b1);
					} else if (occur == 2) {
						answerText.push(works.b2);
					} else {
						answerText.push();
					}
            }
        } while (!ok);
        switch (occur) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    occur = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (occur == -1) {
                        break;
                    }
                    else {
							  ok = isAnswer(works.d0, occur);//Функция, которая принимает количество вариантов ответа и ответ пользователя
							  if (occur > 2) {
								  answerNumber.push();
							  } else {
									questions.push(works.d00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  		answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  }
							  if (occur == 1) {
							  	answerText.push(works.d1);
							  } else if (occur == 2) {
							  	answerText.push(works.d2);
							  } else {
							  	answerText.push();
							  }
                    }
                } while (!ok);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    occur = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (occur == -1) {
                        break;
                    }
                    else {
							  ok = isAnswer(works.d0, occur);
							  if (occur > 2) {
								  answerNumber.push();
							  } else {
								   questions.push(works.d00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  		answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  }
							  if (occur == 1) {
							  	answerText.push(works.d1);
							  } else if (occur == 2) {
							  	answerText.push(works.d2);
							  } else {
							  	answerText.push();
							  }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            occur = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (occur == -1) {
                break;
				} else {
					ok = isAnswer(works.c0, occur);
					if (occur > 2) {
						answerNumber.push();
					} else {
						questions.push(works.c00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
						answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
					}
					if (occur == 1) {
						answerText.push(works.c1);
					} else if (occur == 2) {
						answerText.push(works.c2);
					} else {
						answerText.push();
					}
            }
        } while (!ok);
        switch (occur) {
            case 1: // Второе действие
                do {
                    ok = false;
                    occur = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (occur == -1) {
                        break;
                    }
                    else {
							  ok = isAnswer(works.d0, occur);
							  if (occur > 2) {
								  answerNumber.push();
							  } else {
									questions.push(works.d00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  		answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  }
							  if (occur == 1) {
							  	answerText.push(works.d1);
							  } else if (occur == 2) {
							  	answerText.push(works.d2);
							  } else {
							  	answerText.push();
							  }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    occur = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (occur == -1) {
                        break;
                    }
                    else {
							  ok = isAnswer(works.d0, occur);
							  if (occur > 2) {
								  answerNumber.push();
							  } else {
									questions.push(works.d00); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  		answerNumber.push(occur); //? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
							  }
							  if (occur == 1) {
							  	answerText.push(works.d1);
							  } else if (occur == 2) {
							  	answerText.push(works.d2);
							  } else {
							  	answerText.push();
							  }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
console.log(questions[0] + '\n' + questions[1] + '\n'
	+ questions[2]);
console.log('Номера Ваших ответов на вопросы: '  + answerNumber);
console.log(answerText[0] + '\n' + answerText[1] + '\n' + answerText[2]);

var userAnswer = prompt('Введите номер вопроса для вывода вашего ответа на данный вопрос');
while (userAnswer == '' || userAnswer == 0 || isNaN(userAnswer)) {
	userAnswer = prompt('Введите номер вопроса для вывода проверочных данных');
}


if (userAnswer <= 3) {
	var aUserAnswer = userAnswer;
	var qUserAnswer = --userAnswer;
	console.log(questions[qUserAnswer] + '\nВаш ответ на ' +
		aUserAnswer + ' вопрос: ' + answerText[qUserAnswer]);
	} else {
		alert('Вы ввели некорректный номер вопроса');
	}
//? РЕДАКТИРУЕМАЯ ЧАСТЬ----------------
//------------------------------------------
function isAnswer(q, occur) {
    if (isNaN(occur) || !isFinite(occur)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (occur < 1 || occur > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
	}
	return true;
}

