/* Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.*/

// XML который мы будем парсить

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

// Создание экзэмпляра класса DOMParser, он позволяет нам парсить XML

const jsonData = JSON.parse(jsonString);

const list = jsonData.list;

const result = {
    list: []
}

for (var i = 0; i < list.length; i++){

    const person = {
        name: list[i].name,
        age: Number(list[i].age),
        prof: list[i].prof
    }

    result.list.push(person);
}

console.log(result);

/*
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/