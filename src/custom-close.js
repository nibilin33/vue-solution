import './nb-close.scss';
class CustomClose extends HTMLElement {
  triple = null;
  constructor() {
    super();
    this.addEventListener('click', e => {
      if (e.target.className === 'ripple') {
        this.parentElement.removeChild(this);
        this.triple = null;
      }
    });
    this.addEventListener('mouseover', e => {
      this.toggleRipple();
    });
  }
  // 当元素被加入html后
  connectedCallback(){
    console.log('connectedCallback');
  }
  // 当元素从html被删除
  disconnectedCallback(){
    console.log('disconnectedCallback');
  } 
  // 监听元素属性变化
  attributeChangedCallback() {
    console.log('attributeChangedCallback');
  }
  // 从当前document移动到另一document，比如iframe移动到主文档   
  adoptedCallback() {
    console.log('adoptedCallback');
  }
  toggleRipple() {
    if (this.triple) {
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