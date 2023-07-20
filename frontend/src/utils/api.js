import { BASE_URL } from "./const.js";

export default class Api {
  constructor(url) {
    this._url = url;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject();
  }

  async getCards() {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: token,
      },
    }).then((res) => this._getResponseData(res));
  }

  async sendCard({ name, link }) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._getResponseData(res));
  }

  async deleteCard(cardId) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    }).then((res) => this._getResponseData(res));
  }

  async getUserInfo() {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: token,
      },
    }).then((res) => this._getResponseData(res));
  }

  async updateUserInfo({ name, about }) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  async updateUserAvatar({ avatar }) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => this._getResponseData(res));
  }

  async sendLike(cardId) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  async deleteLike(cardId) {
    const token = localStorage.getItem("token");

    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    }).then((res) => this._getResponseData(res));
  }
}

export const api = new Api(BASE_URL);
