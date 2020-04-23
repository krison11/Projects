// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/1-2.png":[function(require,module,exports) {
module.exports = "/1-2.b67a69b3.png";
},{}],"images/1-1.png":[function(require,module,exports) {
module.exports = "/1-1.f6381309.png";
},{}],"images/1-4.png":[function(require,module,exports) {
module.exports = "/1-4.e87001b1.png";
},{}],"images/1-3.png":[function(require,module,exports) {
module.exports = "/1-3.b966c683.png";
},{}],"images/1-5.png":[function(require,module,exports) {
module.exports = "/1-5.c31a6b4c.png";
},{}],"images/1-6.png":[function(require,module,exports) {
module.exports = "/1-6.e29a3642.png";
},{}],"images/1.png":[function(require,module,exports) {
module.exports = "/1.a7f2b1ea.png";
},{}],"images/2-1.png":[function(require,module,exports) {
module.exports = "/2-1.b0cc28f7.png";
},{}],"images/2-2.png":[function(require,module,exports) {
module.exports = "/2-2.91474907.png";
},{}],"images/2-3.png":[function(require,module,exports) {
module.exports = "/2-3.082a0e26.png";
},{}],"images/2-4.png":[function(require,module,exports) {
module.exports = "/2-4.e2e2e536.png";
},{}],"images/2-5.png":[function(require,module,exports) {
module.exports = "/2-5.dbdc5e97.png";
},{}],"images/2-6.png":[function(require,module,exports) {
module.exports = "/2-6.27e97af4.png";
},{}],"images/2.png":[function(require,module,exports) {
module.exports = "/2.34844cc1.png";
},{}],"images/3-1.png":[function(require,module,exports) {
module.exports = "/3-1.ed6eafba.png";
},{}],"images/3-2.png":[function(require,module,exports) {
module.exports = "/3-2.8a9841f7.png";
},{}],"images/3-3.png":[function(require,module,exports) {
module.exports = "/3-3.a87f4e12.png";
},{}],"images/3-4.png":[function(require,module,exports) {
module.exports = "/3-4.352e2a11.png";
},{}],"images/3-5.png":[function(require,module,exports) {
module.exports = "/3-5.4b57bc15.png";
},{}],"images/3-6.png":[function(require,module,exports) {
module.exports = "/3-6.6e7348b8.png";
},{}],"images/3.png":[function(require,module,exports) {
module.exports = "/3.f46dd042.png";
},{}],"images/4-1.png":[function(require,module,exports) {
module.exports = "/4-1.d982a38f.png";
},{}],"images/4-3.png":[function(require,module,exports) {
module.exports = "/4-3.9f516463.png";
},{}],"images/4-4.png":[function(require,module,exports) {
module.exports = "/4-4.b19c6365.png";
},{}],"images/4-6.png":[function(require,module,exports) {
module.exports = "/4-6.28b9235e.png";
},{}],"images/4-5.png":[function(require,module,exports) {
module.exports = "/4-5.0fe11f71.png";
},{}],"images/logo.png":[function(require,module,exports) {
module.exports = "/logo.6023b87e.png";
},{}],"images/*.png":[function(require,module,exports) {
module.exports = {
  "1": require("./1.png"),
  "2": require("./2.png"),
  "3": require("./3.png"),
  "1-2": require("./1-2.png"),
  "1-1": require("./1-1.png"),
  "1-4": require("./1-4.png"),
  "1-3": require("./1-3.png"),
  "1-5": require("./1-5.png"),
  "1-6": require("./1-6.png"),
  "2-1": require("./2-1.png"),
  "2-2": require("./2-2.png"),
  "2-3": require("./2-3.png"),
  "2-4": require("./2-4.png"),
  "2-5": require("./2-5.png"),
  "2-6": require("./2-6.png"),
  "3-1": require("./3-1.png"),
  "3-2": require("./3-2.png"),
  "3-3": require("./3-3.png"),
  "3-4": require("./3-4.png"),
  "3-5": require("./3-5.png"),
  "3-6": require("./3-6.png"),
  "4-1": require("./4-1.png"),
  "4-3": require("./4-3.png"),
  "4-4": require("./4-4.png"),
  "4-6": require("./4-6.png"),
  "4-5": require("./4-5.png"),
  "logo": require("./logo.png")
};
},{"./1-2.png":"images/1-2.png","./1-1.png":"images/1-1.png","./1-4.png":"images/1-4.png","./1-3.png":"images/1-3.png","./1-5.png":"images/1-5.png","./1-6.png":"images/1-6.png","./1.png":"images/1.png","./2-1.png":"images/2-1.png","./2-2.png":"images/2-2.png","./2-3.png":"images/2-3.png","./2-4.png":"images/2-4.png","./2-5.png":"images/2-5.png","./2-6.png":"images/2-6.png","./2.png":"images/2.png","./3-1.png":"images/3-1.png","./3-2.png":"images/3-2.png","./3-3.png":"images/3-3.png","./3-4.png":"images/3-4.png","./3-5.png":"images/3-5.png","./3-6.png":"images/3-6.png","./3.png":"images/3.png","./4-1.png":"images/4-1.png","./4-3.png":"images/4-3.png","./4-4.png":"images/4-4.png","./4-6.png":"images/4-6.png","./4-5.png":"images/4-5.png","./logo.png":"images/logo.png"}],"videos/video.mp4":[function(require,module,exports) {
module.exports = "/video.ba20be18.mp4";
},{}],"main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); //********* imports *************

var __png_1 = __importDefault(require("./images/*.png"));

var video_mp4_1 = __importDefault(require("./videos/video.mp4")); //********* Create products *************
// show cart //////////////////////////////////////////////////////


var shopping_bag = document.querySelector('.shopping-bag');
var cart = document.querySelector('.shopping-cart-div');
var product_container = document.querySelector('.product-container');

cart.onclick = function () {
  shopping_bag.classList.toggle('show-bag');
}; // class Product /////////////////////////////////////////////////////


var Product =
/** @class */
function () {
  function Product(product) {
    if (product === void 0) {
      product = {
        id: 0,
        image: '',
        model: '',
        price: 0
      };
    }

    this.product = product;
    this.createProduct();
  }

  Product.prototype.createProduct = function () {
    var product_div = document.createElement('div');
    var text_div = document.createElement('div');
    var img_div = document.createElement('div');
    var shadow = document.createElement('div');
    var img = document.createElement('img');
    var mdl = document.createElement('p');
    var prc = document.createElement('p');
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
  };

  return Product;
}(); // class Modal ////////////////////////////////////////////////////////


var Modal =
/** @class */
function () {
  function Modal(product) {
    if (product === void 0) {
      product = {
        id: 0,
        model: '',
        price: 0,
        images: [''],
        sizes: ['']
      };
    }

    this.product = product;
    this.add_button = document.createElement('button');
    this.x_button = document.createElement('div');
    this.image_container = document.createElement('div');
    this.createModal();
  }

  Modal.prototype.createModal = function () {
    var _this = this;

    var modal = document.createElement('div');
    var content_container = document.createElement('div');
    var text_container = document.createElement('div');
    var model = document.createElement('p');
    var price = document.createElement('p');
    var size_box = document.createElement('div');
    modal.className = 'modal';
    this.image_container.className = 'image-container';
    content_container.className = 'content-container';
    text_container.className = 'modal-text-container';
    model.className = 'modal-model';
    price.className = 'modal-price';
    size_box.className = 'size-container';
    this.add_button.className = 'add-btn';
    this.x_button.className = 'x-btn';
    this.product.images.forEach(function (el) {
      var img = document.createElement('img');
      img.src = el;

      _this.image_container.append(img);
    });
    this.product.sizes.forEach(function (el) {
      var div = document.createElement('div');
      div.textContent = el;
      size_box.appendChild(div);
    });
    model.textContent = this.product.model;
    price.textContent = this.product.price.toString() + ' kr';
    this.add_button.textContent = 'Add to basket';
    this.x_button.textContent = 'X';
    text_container.append(model, price);
    content_container.append(this.x_button, text_container, size_box, this.add_button);
    modal.append(this.image_container, content_container);
    product_container.append(modal);
  };

  return Modal;
}(); // class selected items //////////////////////////////////////////////


var SelectedItem =
/** @class */
function () {
  function SelectedItem(product) {
    if (product === void 0) {
      product = {
        image: '',
        model: '',
        price: 0,
        quantity: 0
      };
    }

    this.product = product;
    this.container = document.createElement('div');
    this.plus_btn = document.createElement('div');
    this.minus_btn = document.createElement('div');
    this.remove_btn = document.createElement('div');
    this.quantity_Div = document.createElement('div');
    this.price_Div = document.createElement('div');
    this.create_selected_item();
  }

  SelectedItem.prototype.create_selected_item = function () {
    var img = document.createElement('img');
    var model = document.createElement('div');
    var plus_minus = document.createElement('div');
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
    this.container.append(img, model, this.price_Div, this.quantity_Div, plus_minus, this.remove_btn);
    shopping_bag.append(this.container);
  };

  SelectedItem.prototype.remove_item = function () {
    this.container.style.display = 'none';
  };

  return SelectedItem;
}(); // adding values to the products ///////////////////////////////////////////////////////////


var products = [new Product({
  id: 0,
  image: __png_1.default['1-1'],
  model: 'Air Max 1',
  price: 1250
}), new Product({
  id: 1,
  image: __png_1.default['2-1'],
  model: 'AirMax2',
  price: 1250
}), new Product({
  id: 2,
  image: __png_1.default['3-1'],
  model: 'AirMax3',
  price: 1250
}), new Product({
  id: 3,
  image: __png_1.default['4-1'],
  model: 'AirMax4',
  price: 1250
})]; // adding values to the modals(products) ///////////////////////////////////////////////////////////

var modals = [new Modal({
  id: 0,
  model: 'AirMax1',
  price: 1250,
  images: [__png_1.default['1-1'], __png_1.default['1-2'], __png_1.default['1-3'], __png_1.default['1-4'], __png_1.default['1-5'], __png_1.default['1-6']],
  sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52']
}), new Modal({
  id: 1,
  model: 'AirMax2',
  price: 1250,
  images: [__png_1.default['2-1'], __png_1.default['2-2'], __png_1.default['2-3'], __png_1.default['2-4'], __png_1.default['2-5'], __png_1.default['2-6']],
  sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52']
}), new Modal({
  id: 2,
  model: 'AirMax3',
  price: 1250,
  images: [__png_1.default['3-1'], __png_1.default['3-2'], __png_1.default['3-3'], __png_1.default['3-4'], __png_1.default['3-5'], __png_1.default['3-6']],
  sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52']
}), new Modal({
  id: 3,
  model: 'AirMax4',
  price: 1250,
  images: [__png_1.default['4-1'], __png_1.default['4-3'], __png_1.default['4-4'], __png_1.default['4-5'], __png_1.default['4-6']],
  sizes: ['37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52']
})]; // single elements //////////////////////////////

var label = document.querySelector('.label');
var slider_container = document.querySelector('.slider-container');
var total_price = document.querySelector('.total-price');
var empty_cart = document.querySelector('.empty-cart');
var pay_div = document.querySelector('.payment'); //selecting nodelists //////////////////////////

var product = document.querySelectorAll('.product');
var modal = document.querySelectorAll('.modal');

var _loop_1 = function _loop_1(i) {
  // click event on the product
  product[i].addEventListener('click', function () {
    product.forEach(function (el) {
      el.style.display = 'none';
    });
    modal[i].style.display = 'flex';
    product_container.classList.remove('product-container');
    slider_container.style.display = 'none';
  }); // click event for the x btn

  modals[i].x_button.addEventListener('click', function () {
    product.forEach(function (el) {
      el.style.display = 'grid';
    });
    modal[i].style.display = 'none';
    product_container.classList.add('product-container');
    slider_container.style.display = 'flex';
  });
}; // switching from products to modal ////////////////////////////


for (var i = 0; i < product.length; i++) {
  _loop_1(i);
} // main function ///////////////////////////////////////////////////
// let ids: number[] = [];


var items = 0;
var total = 0; // looping over the products //////////////////////////

modals.forEach(function (e) {
  // adding a video in the 4th product //////////////
  if (modals.indexOf(e) === 3) {
    var video = document.createElement('video');
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.src = video_mp4_1.default;
    e.image_container.append(video);
  } // add btn //////////////////


  e.add_button.addEventListener('click', function () {
    empty_cart.style.display = 'none';
    pay_div.style.display = 'grid'; // a new instance gets created with every click

    var el = new SelectedItem({
      image: e.product.images[0],
      model: e.product.model,
      price: e.product.price,
      quantity: 1
    }); // adding content to the instance properties

    label.textContent = (items += 1).toString();
    total_price.textContent = (total += e.product.price).toString(); // event for the plus btn

    el.plus_btn.addEventListener('click', function () {
      el.product.quantity++;
      el.price_Div.textContent = (el.product.price += e.product.price).toString() + ' kr';
      el.quantity_Div.textContent = el.product.quantity.toString() + ' st';
      label.textContent = (items += 1).toString();
      total_price.textContent = (total += e.product.price).toString();
    }); // event for the plus btn

    el.minus_btn.addEventListener('click', function () {
      el.product.quantity--;

      if (el.product.quantity === 0) {
        el.remove_item();
      }

      el.price_Div.textContent = (el.product.price -= e.product.price).toString() + ' kr';
      el.quantity_Div.textContent = el.product.quantity.toString() + ' st';
      label.textContent = (items -= 1).toString();
      total_price.textContent = (total -= e.product.price).toString();

      if (items <= 0) {
        clear_field();
      }
    }); // event for the plus btn

    el.remove_btn.addEventListener('click', function () {
      el.remove_item();
      label.textContent = (items -= el.product.quantity).toString();
      total_price.textContent = (total -= el.product.price).toString();

      if (items === 0) {
        clear_field();
      }
    }); // a function that clears the content in the basket

    function clear_field() {
      shopping_bag.classList.toggle('show-bag');
      empty_cart.style.display = 'block';
      pay_div.style.display = 'none';
      label.textContent = '';
      total = 0;
      items = 0; // ids = [];
    } //open automatically when a product is added to the basket ////////////////////


    setTimeout(function () {
      shopping_bag.classList.toggle('show-bag');
      e.add_button.classList.toggle('inactive');
      e.add_button.disabled = true;
    }, 500);
    setTimeout(function () {
      e.add_button.classList.toggle('inactive');
      shopping_bag.classList.toggle('show-bag');
      e.add_button.disabled = false;
    }, 3000);
  });
});
},{"./images/*.png":"images/*.png","./videos/video.mp4":"videos/video.mp4"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63823" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map