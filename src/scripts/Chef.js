import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.init();
    this.container = this.element.querySelector('.js-container');
  }

  init() {
    console.log('Instance de chef');
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      console.log(this.army);
    }
    const boutons = document.querySelectorAll('.js-submit');
    for (let i = 0; i < boutons.length; i++) {
      const bouton = boutons[i];

      bouton.addEventListener('click', this.sendOrder.bind(this));
    }
  }
  sendOrder(event) {
    this.boutonActive = 0;
    console.log(event.currentTarget);
    const actives = document.querySelectorAll('.is-active');
    for (let i = 0; i < actives.length; i++) {
      const active = actives[i];

      this.boutonActive = i;
    }
    const p = document.createElement('p');

    p.innerHTML = `Nombre total de poutine(s) :  ${this.boutonActive}`;
    this.container.appendChild(p);
  }
}
