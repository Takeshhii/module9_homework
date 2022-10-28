/* Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.*/

// XML который мы будем парсить
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`

// Создание экзэмпляра класса DOMParser, он позволяет нам парсить XML
const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const result = {
    list: []
}

for (var i = 0; i < studentNode.length; i++){
    const nameNode = studentNode[i].querySelector("name");
    const firstNameNode = nameNode.querySelector("first");
    const secondNameNode = nameNode.querySelector("second");
    const ageNode = studentNode[i].querySelector("age");
    const profNode = studentNode[i].querySelector("prof");

    const langNode = nameNode.getAttribute("lang");

    const student = {
        name: `${firstNameNode.textContent} ${secondNameNode.textContent}`,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langNode,
    }

    result.list.push(student);
}

console.log(result);

/*
//console.log(xmlDOM);

const result = {
  list: [
    {
      name: 'Ivan Ivanov',
      age: 35,
      prof: 'teacher',
      lang: 'en'
    },
    {
      name: 'Петр Петров',
      age: 58,
      prof: 'driver',
      lang: 'ru'
    },
  ]
}
*/