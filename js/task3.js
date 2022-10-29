/* Напишите код приложения, интерфейс которого представляет собой input и кнопку.
В input можно ввести любое число. При клике на кнопку происходит следующее:

        Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
        Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL
        https://loremflickr.com/json/g/320/240/all, где get-параметр limit — это введённое число.
*/

const badReqUrl = "https://loremflickr.com/json/g/320/240/all";
const normReqUrl = "https://picsum.photos/v2/list/"

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

const resultNode = document.querySelector('.j-result');
function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    // console.log('end cards', cards);

    resultNode.innerHTML = cards;
}


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const value = document.querySelector('.inp').value;
    console.log(value);
    if ((value < 1) || (value >= 10 )){
        console.log('число вне диапазона от 1 до 10')
    } else {
        useRequest(`${normReqUrl}?limit=${value}`, displayResult);
    }

});

