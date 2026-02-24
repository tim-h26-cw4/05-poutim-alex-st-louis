export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');
    this.selectedType = ''; // le type de poutine
    this.init();
  }

  init() {
    console.log('instance de Poutine');

    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];

      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.currentTarget.classList.toggle('is-active');
    this.selectedType = event.currentTarget.innerText;
    console.log(this.selectedType + ' est selectioné');
  }
}
