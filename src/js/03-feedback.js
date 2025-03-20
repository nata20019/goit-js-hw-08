import { string } from 'joi';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));
populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  const saveMessage = localStorage.getItem(localStorageKey);
  const parsedMessage = JSON.parse(saveMessage);

  input.value = parsedMessage.email;
  textarea.value = parsedMessage.message;
  console.log(parsedMessage);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

function onTextInput(evt) {
  evt.preventDefault();
  const email = input.value;
  const message = textarea.value;
  localStorage.setItem(localStorageKey, JSON.stringify({ email, message }));
}
function populateTextarea() {
  const saveMessage = localStorage.getItem(localStorageKey);
  const parsedMessage = JSON.parse(saveMessage);
  if (saveMessage) {
    input.value = parsedMessage.email;
    textarea.value = parsedMessage.message;
  }
}
