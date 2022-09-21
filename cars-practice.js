import { cars } from './cars';
// const makeCarTemplate = ({ name, model, type, amount, price }) => `
//     <ul class="cars-list">
//       <li class="cars-items">
//         <p data-name="${name}"></p>
//         <p data-model="${model}"></p>
//         <p data-type="${type}></p>
//         <p data-amount="${amount}></p>
//         <p data-price="${price}></p>
//       </li>
//     </ul>`;
// const carTemplate = cars.map(makeCarTemplate);
// console.log(carTemplate);
const bodyEl = document.querySelector('body')
const ({ name, model, type, amount, price }) = cars;
bodyEl.innerHTML = `
    <ul class="cars-list">
      <li class="cars-items">
        <p data-name="${name}"></p>
        <p data-model="${model}"></p>
        <p data-type="${type}></p>
        <p data-amount="${amount}></p>
        <p data-price="${price}></p>
      </li>
    </ul>`;
console.log(carTemplate);
