const objectConfiguration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const BASE_URL = "https://api.mesto.mvtt.nomoredomains.xyz";

const optionsApi = {
  url: BASE_URL,
  token: "eadd520f-fc67-49d7-ab08-2e06185c8099",
};

export { objectConfiguration, optionsApi, BASE_URL };
