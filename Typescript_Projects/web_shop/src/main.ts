//********* imports *************
import img from './images/*.png';

import vid from './videos/video.mp4';

import * as Interface from './interfaces/product';

//********* Create products *************

// show cart //////////////////////////////////////////////////////
const shopping_bag = document.querySelector('.shopping-bag')! as HTMLDivElement;
const cart = document.querySelector('.shopping-cart-div')! as HTMLDivElement;
const product_container = document.querySelector(
  '.product-container'
)! as HTMLDivElement;

cart.onclick = () => {
  shopping_bag.classList.toggle('show-bag');
};

// class Product /////////////////////////////////////////////////////
class Product implements Interface.IProduct {
  constructor(
    public product = {
      id: 0,
      image: '',
      model: '',
      price: 0
    }
  ) {
    this.createProduct();
  }

  createProduct() {
    const product_div = document.createElement('div');
    const text_div = document.createElement('div');
    const img_div = document.createElement('div');
    const shadow = document.createElement('div');

    const img = document.createElement('img');
    const mdl = document.createElement('p');
    const prc = document.createElement('p');

    product_div.className = 'product';
    text_div.className = 'product-text';
    img.className = 'product-img';
    mdl.className = 'text-model';
    shadow.className = 'shadow';
    img_div.className = 'image-div';

    img.src = this.product.image;
    mdl.textContent = this.product.model;
    prc.textContent = this.product.price.toString() + ' kr';
    text_div.append(mdl, prc);
    img_div.append(img, shadow);

    product_div.append(img_div, text_div);
    product_container.append(product_div);
  }
}

// class Modal ////////////////////////////////////////////////////////
class Modal implements Interface.IModal {
  add_button = document.createElement('button');
  x_button = document.createElement('div');
  image_container = document.createElement('div');

  constructor(
    public product = {
      id: 0,
      model: '',
      price: 0,
      images: [''],
      sizes: ['']
    }
  ) {
    this.createModal();
  }

  createModal() {
    const modal = document.createElement('div');

    const content_container = document.createElement('div');
    const text_container = document.createElement('div');
    const model = document.createElement('p');
    const price = document.createElement('p');
    const size_box = document.createElement('div');

    modal.className = 'modal';
    this.image_container.className = 'image-container';
    content_container.className = 'content-container';
    text_container.className = 'modal-text-container';
    model.className = 'modal-model';
    price.className = 'modal-price';
    size_box.className = 'size-container';
    this.add_button.className = 'add-btn';
    this.x_button.className = 'x-btn';

    this.product.images.forEach(el => {
      const img = document.createElement('img');
      img.src = el;
      this.image_container.append(img);
    });

    this.product.sizes.forEach(el => {
      const div = document.createElement('div');
      div.textContent = el;
      size_box.appendChild(div);
    });
    model.textContent = this.product.model;
    price.textContent = this.product.price.toString() + ' kr';
    this.add_button.textContent = 'Add to basket';
    this.x_button.textContent = 'X';
    text_container.append(model, price);
    content_container.append(
      this.x_button,
      text_container,
      size_box,
      this.add_button
    );
    modal.append(this.image_container, content_container);

    product_container.append(modal);
  }
}

// class selected items //////////////////////////////////////////////
class SelectedItem implements Interface.ISelectedItem {
  container = document.createElement('div');
  plus_btn = document.createElement('div');
  minus_btn = document.createElement('div');
  remove_btn = document.createElement('div');
  quantity_Div = document.createElement('div');
  price_Div = document.createElement('div');

  constructor(
    public product = { image: '', model: '', price: 0, quantity: 0 }
  ) {
    this.create_selected_item();
  }

  create_selected_item() {
    const img = document.createElement('img');
    const model = document.createElement('div');
    const plus_minus = document.createElement('div');

    img.className = 'selected-img';
    model.className = 'selected-model';
    this.quantity_Div.className = 'selected-quantity';
    this.price_Div.className = 'selected-price';
    plus_minus.className = 'plus-minus-div';
    this.container.className = 'selected-div';
    this.plus_btn.className = 'plus';
    this.minus_btn.className = 'minus';
    this.remove_btn.className = 'remove';

    this.plus_btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    this.minus_btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    this.remove_btn.textContent = 'x';

    img.src = this.product.image;
    model.textContent = this.product.model;
    this.price_Div.textContent = this.product.price.toString() + ' kr';
    this.quantity_Div.textContent = this.product.quantity.toString() + ' st';

    plus_minus.append(this.plus_btn, this.minus_btn);
    this.container.append(
      img,
      model,
      this.price_Div,
      this.quantity_Div,
      plus_minus,
      this.remove_btn
    );

    shopping_bag.append(this.container);
  }

  remove_item() {
    this.container.style.display = 'none';
  }
}

// adding values to the products ///////////////////////////////////////////////////////////
const products = [
  new Product({
    id: 0,
    image: img['1-1'],
    model: 'Air Max 1',
    price: 1250
  }),
  new Product({
    id: 1,
    image: img['2-1'],
    model: 'AirMax2',
    price: 1250
  }),
  new Product({
    id: 2,
    image: img['3-1'],
    model: 'AirMax3',
    price: 1250
  }),
  new Product({
    id: 3,
    image: img['4-1'],
    model: 'AirMax4',
    price: 1250
  })
];

// adding values to the modals(products) ///////////////////////////////////////////////////////////
const modals = [
  new Modal({
    id: 0,
    model: 'AirMax1',
    price: 1250,
    images: [
      img['1-1'],
      img['1-2'],
      img['1-3'],
      img['1-4'],
      img['1-5'],
      img['1-6']
    ],
    sizes: [
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52'
    ]
  }),
  new Modal({
    id: 1,
    model: 'AirMax2',
    price: 1250,
    images: [
      img['2-1'],
      img['2-2'],
      img['2-3'],
      img['2-4'],
      img['2-5'],
      img['2-6']
    ],
    sizes: [
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52'
    ]
  }),
  new Modal({
    id: 2,
    model: 'AirMax3',
    price: 1250,
    images: [
      img['3-1'],
      img['3-2'],
      img['3-3'],
      img['3-4'],
      img['3-5'],
      img['3-6']
    ],
    sizes: [
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52'
    ]
  }),
  new Modal({
    id: 3,
    model: 'AirMax4',
    price: 1250,
    images: [img['4-1'], img['4-3'], img['4-4'], img['4-5'], img['4-6']],
    sizes: [
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52'
    ]
  })
];

// single elements //////////////////////////////
const label = document.querySelector('.label')! as HTMLSpanElement;
const slider_container = document.querySelector(
  '.slider-container'
)! as HTMLDivElement;
const total_price = document.querySelector('.total-price')! as HTMLSpanElement;

const empty_cart = document.querySelector('.empty-cart')! as HTMLDivElement;
const pay_div = document.querySelector('.payment')! as HTMLDivElement;

//selecting nodelists //////////////////////////
const product = document.querySelectorAll('.product')! as NodeListOf<
  HTMLDivElement
>;
const modal = document.querySelectorAll('.modal')! as NodeListOf<
  HTMLDivElement
>;

// switching from products to modal ////////////////////////////
for (let i = 0; i < product.length; i++) {
  // click event on the product
  product[i].addEventListener('click', () => {
    product.forEach(el => {
      el.style.display = 'none';
    });
    modal[i].style.display = 'flex';
    product_container.classList.remove('product-container');
    slider_container.style.display = 'none';
  });
  // click event for the x btn
  modals[i].x_button.addEventListener('click', () => {
    product.forEach(el => {
      el.style.display = 'grid';
    });
    modal[i].style.display = 'none';
    product_container.classList.add('product-container');
    slider_container.style.display = 'flex';
  });
}

// main function ///////////////////////////////////////////////////
// let ids: number[] = [];
let items: number = 0;
let total: number = 0;

// looping over the products //////////////////////////
modals.forEach(e => {
  // adding a video in the 4th product //////////////
  if (modals.indexOf(e) === 3) {
    const video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.src = vid;
    e.image_container.append(video);
  }
  // add btn //////////////////
  e.add_button.addEventListener('click', () => {
    empty_cart.style.display = 'none';
    pay_div.style.display = 'grid';

    // a new instance gets created with every click
    let el = new SelectedItem({
      image: e.product.images[0],
      model: e.product.model,
      price: e.product.price,
      quantity: 1
    });

    // adding content to the instance properties
    label.textContent = (items += 1).toString();
    total_price.textContent = (total += e.product.price).toString();

    // event for the plus btn
    el.plus_btn.addEventListener('click', () => {
      el.product.quantity++;
      el.price_Div.textContent =
        (el.product.price += e.product.price).toString() + ' kr';
      el.quantity_Div.textContent = el.product.quantity.toString() + ' st';
      label.textContent = (items += 1).toString();
      total_price.textContent = (total += e.product.price).toString();
    });

    // event for the plus btn
    el.minus_btn.addEventListener('click', () => {
      el.product.quantity--;

      if (el.product.quantity === 0) {
        el.remove_item();
      }

      el.price_Div.textContent =
        (el.product.price -= e.product.price).toString() + ' kr';
      el.quantity_Div.textContent = el.product.quantity.toString() + ' st';
      label.textContent = (items -= 1).toString();
      total_price.textContent = (total -= e.product.price).toString();

      if (items <= 0) {
        clear_field();
      }
    });

    // event for the plus btn
    el.remove_btn.addEventListener('click', () => {
      el.remove_item();
      label.textContent = (items -= el.product.quantity).toString();
      total_price.textContent = (total -= el.product.price).toString();
      if (items === 0) {
        clear_field();
      }
    });

    // a function that clears the content in the basket
    function clear_field() {
      shopping_bag.classList.toggle('show-bag');
      empty_cart.style.display = 'block';
      pay_div.style.display = 'none';
      label.textContent = '';
      total = 0;
      items = 0;
      // ids = [];
    }

    //open automatically when a product is added to the basket ////////////////////
    setTimeout(() => {
      shopping_bag.classList.toggle('show-bag');
      e.add_button.classList.toggle('inactive');
      e.add_button.disabled = true;
    }, 500);
    setTimeout(() => {
      e.add_button.classList.toggle('inactive');
      shopping_bag.classList.toggle('show-bag');
      e.add_button.disabled = false;
    }, 3000);
  });
});
