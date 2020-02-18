class CustomClose extends HTMLElement {
    triple=null;
    constructor() {
        super();
        this.addEventListener('click', e => {
          if(e.target.className === 'ripple') {
            this.parentElement.removeChild(this);
            this.triple = null;
          }
        });
        this.addEventListener('mouseover',e=>{
            this.toggleRipple();
        });
      }
      toggleRipple() {
        if(this.triple) {
            return;
        }
        let div = document.createElement('div');
        div.classList.add('ripple');
        div.innerHTML = 'x';
        this.triple = div;
        this.appendChild(this.triple);
      }
}

window.customElements.define('nb-close', CustomClose);