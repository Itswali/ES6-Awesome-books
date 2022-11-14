import Store from './modules/store.js';

import Book from './modules/book.js';

// import { show_hide } from './modules/dynamic-show.js';

// Add date

import { refreshTime, initTime } from './modules/time.js';

refreshTime();
initTime();

const store = new Store();

import UI from './modules/UI.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = store.count;
  const book = new Book(title, author, id);
  UI.addBookList(book);
  store.addBook(book);
  UI.clearFields();
});
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const btnID = e.target.id;
  const arrValues = btnID.split('-');
  const idString = arrValues[arrValues.length - 1];
  const id = parseInt(idString, 10);
  store.removeBook(id);
});

const list = document.getElementById('show-1');
const add = document.getElementById('book-form');
const contact = document.getElementById('contact1');
const showlist = document.getElementById('listshow');
const addshow = document.getElementById('addshow');
const contactshow = document.getElementById('contactshow');

showlist.addEventListener('click', () => {
  list.style.display = 'flex';
  add.style.display = 'none';
  contact.style.display = 'none';
});

addshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'flex';
  contact.style.display = 'none';
});

contactshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'none';
  contact.style.display = 'flex';
});

