// Clear form before untoad
window. onbeforeunload = () => {
    for (const form of document. getElementsByTagName("form")) {
    form.reset ();
    }
};

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
    burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });