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
  form.reset();
  localStorage.removeItem(localStorageKey);
}

function onTextInput(evt) {
  evt.preventDefault();
  const email = input.value;
  const message = textarea.value;
  localStorage.setItem(localStorageKey, JSON.stringify({ email, message }));

  const formData = { email, message };
  console.log(formData);
}
function populateTextarea() {
  const saveMessage = localStorage.getItem(localStorageKey);
  if (saveMessage) {
    const parsedMessage = JSON.parse(saveMessage);
    input.value = parsedMessage.email;
    textarea.value = parsedMessage.message;

    console.log(parsedMessage);
  }
}
