import keys from './keysymbol.js';



function createDom () {
 const body = document.querySelector('body');
 const header = document.createElement('header');
 header.classList.add('header');
 const nameOfTask = document.createElement('h1');
 nameOfTask.classList.add('header__name');
 nameOfTask.textContent = 'Virtual keybord';
 header.append(nameOfTask);
 body.append(header);
 const main = document.createElement('main');
 main.classList.add('main');
 header.after(main);
 const content = document.createElement('div');
 content.classList.add('content');
 main.append(content);
 const textInput = document.createElement('textarea');
 textInput.classList.add('content__text-input');
 content.append(textInput);
 const keyboard = document.createElement('div');
 keyboard.classList.add('content__keyboard');
 content.append(keyboard);
 const operationSystem = document.createElement('p');
 operationSystem.classList.add('operationSystem');
 operationSystem.textContent = 'Operation system for this keyboard is Windows';
 content.append(operationSystem);
 const languageKey = document.createElement('p');
 languageKey.classList.add('languageKey');
 languageKey.textContent = 'Language for keyboard now is Eng';
 content.append(languageKey);
}
createDom();

const content__keyboard = document.querySelector('.content__keyboard');
const keysArray = []

function createKeys () {
 keys.forEach((el,ind) => {
  keysArray[ind] = document.createElement('button');
  content__keyboard.append(keysArray[ind]);
  keysArray[ind].classList.add('keyboard__key-button');
  if (el.name === 'Shift1') {
   keysArray[ind].textContent = 'Shift';
   keysArray[ind].classList.add('keyboard__greykey');
  }
  else {
  keysArray[ind].textContent = el.name;
  }
  if (el.name === 'Backspace' || el.name === 'Caps Lock' || el.name === 'Shift') {
   keysArray[ind].classList.add('keyboard__3key');
  }
  if (el.name === 'Tab') {
   keysArray[ind].classList.add('keyboard__12key');
  }
  if (el.name === 'Enter') {
   keysArray[ind].classList.add('keyboard__2key');
  }
  if (el.name === 'Ctrl') {
   keysArray[ind].classList.add('keyboard__14key');
  }
  if (el.name === 'space') {
   keysArray[ind].classList.add('keyboard__7key');
  }
  if (el.name === 'Backspace' || el.name === 'Caps Lock'  || el.name === 'Shift' || el.name === 'Tab' || el.name === 'Del' || el.name === '`' || el.name === 'Enter' || el.name === 'win' || el.name === 'alt' || el.name === 'Del' || el.name === 'Ctrl') {
   keysArray[ind].classList.add('keyboard__greykey');
  }
  if (el.name === 'arrowup') {
   keysArray[ind].classList.add('arrow__up');
   keysArray[ind].textContent = '';
  }
  if (el.name === 'arrowdown') {
   keysArray[ind].classList.add('arrow__down');
   keysArray[ind].textContent = '';
  }
  if (el.name === 'arrowleft') {
   keysArray[ind].classList.add('arrow__left');
   keysArray[ind].textContent = '';
  }
  if (el.name === 'arrowright') {
   keysArray[ind].classList.add('arrow__right');
   keysArray[ind].textContent = '';
  }
 })
}
createKeys();