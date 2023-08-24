class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  //функция, которая обрабатывает ответ от сервера
  _handleResponse(response) {
    //принимает ответ от сервера
    if (response.ok) {
      return response.json(); //парсинг, переводим json в форма понятный для js
    }
    return Promise.reject(`Произошла ошибка: ${response.status}`); //отлавливаем ошибку
  }

  //функция, которая отправляет запрос на сервер
  _request(url, options) {
    //ассинхронный запрос на сервер
    return fetch(url, options).then(this._handleResponse);
  }
}

const api = new Api({
  //     baseUrl: 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__', //неизменяемая ссылка url
  // headers: {
  //     "Content-Type": "application/json",
  // accept: "Application/json"
  // }
});

export default api;
