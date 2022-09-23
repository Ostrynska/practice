const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};



HTML CSS JSResult Skip Results Iframe
EDIT ON
const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});

const btn = document.querySelector('.js-btn');

mango.showUsername();

btn.addEventListener('click', mango.showUsername.bind(mango));
