export class HammerBlow {
  constructor(element) {
    this.element = element;
    this.check = 0;
    this.pass = -1;

    this.onClick = this.onClick.bind(this);
    this.onPass = this.onPass.bind(this);

    document.addEventListener('click', this.onClick);

    setInterval(() => {
      document.addEventListener('input', this.onPass());
    }, 1000);
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    const { target } = e;
    if (target.parentElement.classList.contains('open') === true) {
      this.check += 1;
      this.pass = -1;
    }
    const check = document.querySelector('.check');
    check.innerHTML = `Счет: ${this.check}`;
  }

  onPass() {
    this.pass += 1;
    if (this.pass === 5) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      confirm('Конец игры! Вы проиграли(');
      this.pass = -1;
    }
  }
}
