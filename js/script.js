const title = document.querySelector('.modal__title');
const form = document.querySelector('.modal__form');
const checkbox = document.querySelector('.modal__checkbox');
const discont = document.querySelector('.modal__input_discount');
const modal = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body')

console.log(title);
console.log(form);
console.log(checkbox);
console.log(discont);

//2
modal.classList.remove('active');

fetch('./goods.json').then(response => response.json())
  .then(datas => {
      datas.forEach(data => {
        let dom = renderGoods(data);
        tableBody.insertAdjacentHTML('beforeend', dom)
      });
  })

const renderGoods = (data) => {
    return `<tr data-id="${data.id}">
    <td class="table__cell">${data.id}</td>
    <td class="table__cell table__cell_left table__cell_name" >${data.title}</td>
    <td class="table__cell table__cell_left">${data.category}</td>
    <td class="table__cell">${data.units}</td>
    <td class="table__cell">${data.count}</td>
    <td class="table__cell">$${data.price}</td>
    <td class="table__cell">$${(data.count * data.price) - (data.price * data.count * data.discont / 100)}</td>
    <td class="table__cell table__cell_btn-wrapper">          
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr> `
}