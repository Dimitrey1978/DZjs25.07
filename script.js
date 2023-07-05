// task. От 1 до 20

function logOneToTwenty() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

// Sample usage - do not modify
logOneToTwenty();

// task. Нечетные числа от 1 до 20
console.log(
  "\n",
  "-----------------------Нечетные числа ------------------------",
  "\n"
);
function logOneToTwentyOdd() {
  for (let i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}

// Sample usage - do not modify
logOneToTwentyOdd();

// Выведите простые числа от 2 до 100
console.log(
  "\n",
  "-----------------------Простые числа ------------------------",
  "\n"
);
function primeNumbers(N) {
  let Numbers = 0;
  for (let i = 2; i <= N; i++) {
    Numbers = enumeration(i);
    if (Numbers) console.log(Numbers);
  }
}

function enumeration(num) {
  for (let j = num - 1; j >= 2; j--) {
    if (num % j === 0) return 0;
  }
  return num;
}

primeNumbers(100);

// Посчитайте в цикле сумму квадратов от 1 до 10.
console.log(
  "\n",
  "-----------------------Сумма квадратов ------------------------",
  "\n"
);

function sumOfSquares() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(sumOfSquares()); // 385

// Напишите рекурсивную функцию, которая принимает массив чисел и возвращает сумму всех элементов в массиве.
console.log(
  "\n",
  "-----------------------Рекурсия. Сумма элементов ------------------------",
  "\n"
);

function sumArray(arr) {
  if (arr.length) return arr[0] + sumArray(arr.splice(1));
  else return 0;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -5, 7, 3])); // 15
console.log(sumArray([])); // 0

// Напишите рекурсивную функцию, которая принимает массив чисел и возвращает наибольшее число в массиве.
console.log(
  "\n",
  "-----------------------Рекурсия. Наибольшее число ------------------------",
  "\n"
);

function findMax(arr) {
  if (arr.length) return Math.max(arr[0], findMax(arr.splice(1)));
  else return -100000;
}

console.log(findMax([1, 5, 10, 25, 3])); // 25
console.log(findMax([-1, -5, -10, -25, -3])); // -1
console.log(findMax([5])); // 5

// Напишите функцию, которая принимает на вход строку и возвращает первый символ, который нигде в строке не повторяется.
console.log(
  "\n",
  "-----------------------Неповторяющийся символ ------------------------",
  "\n"
);

function firstNonRepeatingLetter(s) {
  let sLowerCase = s.toLowerCase(); //работаем со строкой в нижнем регистре
  let letters = [];
  let line = "";
  for (let i = 0; i < s.length; i++) {
    letters = sLowerCase.split(""); //разбиваем строку на массив
    letters.splice(i, 1); //удаляем букву, повторяемость которой проверяем
    line = letters.join(""); //собираем строку без этой буквы

    if (line.includes(sLowerCase.at(i)) === false) {
      //если в строке нет анализируемого символа
      if (s.at(i))
        return s.at(
          i
        ); //возвращаем символ в нужном регистре из первоначального варианта строки
      else return "Нет таких символов";
    }
  }
}

console.log(firstNonRepeatingLetter("stress")); // 't'
console.log(firstNonRepeatingLetter("moonmen")); // 'e'
console.log(firstNonRepeatingLetter("moOnmeezn")); // 'z'
console.log(firstNonRepeatingLetter("sTreSS")); // 'T'

// task. Где находится магазин?
console.log(
  "\n",
  "-----------------------Где находится магазин ------------------------",
  "\n"
);

function describeShopLocation(coordinates) {
  return "The shop is located at " + coordinates[0] + ", " + coordinates[1];
}

// Sample usage - do not modify
console.log(describeShopLocation([5.123, 2.374]));
console.log(describeShopLocation([-2.207, 9.319]));

// task. Температуры
console.log(
  "\n",
  "-----------------------Температуры ------------------------",
  "\n"
);

function incrementFirstTemperature(temperatures) {
  temperatures[0] = temperatures[0] + 1;
  return temperatures;
}

// Sample usage
console.log(incrementFirstTemperature([3, 5, 4, 7])); // [ 4, 5, 4, 7 ]
console.log(incrementFirstTemperature([-5, 12, 15, 18, 13])); // [ -4, 12, 15, 18, 13 ]

//   В примере выше вызов функции без какого-либо аргумента приведет к ошибке:
console.log(
  "\n",
  "-----------------------Исправляем ошибку ------------------------",
  "\n"
);

function getMessage(messages) {
  return `You have ${messages?.length ?? "0"} messages`;
}

// Sample usage - do not modify
console.log(getMessage([])); // "You have 0 messages"
console.log(getMessage()); // "You have undefined messages"

//  task. Сообщение о температуре погоды
console.log(
  "\n",
  "-----------------------Последний элемент массива ------------------------",
  "\n"
);

function getLastTemperatureMessage(temperatures) {
  return "The last temperature is " + temperatures.at(-1);
}

// Sample usage - do not modify
console.log(getLastTemperatureMessage([-5, 12, 15])); // "The last temperature is 15"
console.log(getLastTemperatureMessage([13, 10])); // "The last temperature is 10"

// task. Сумма оценок больше 10
console.log(
  "\n",
  "-----------------------Сумма оценок больше 10 ------------------------",
  "\n"
);

function sumGradesAbove10(grades) {
  let sum = 0;
  for (const grad of grades) {
    if (grad >= 10) sum += grad;
  }
  return sum;
}

// Sample usage - do not modify
console.log(sumGradesAbove10([10, 5, 18, 3, 14, 19, 9])); // 61
console.log(sumGradesAbove10([18, 4, 9, 20, 8])); // 38
