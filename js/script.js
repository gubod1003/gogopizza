import { modalController } from "./modules/modalController.js";
import { modalCartController } from "./modules/modalCartController.js";
import { renderPizzas } from "./modules/renderPizzas.js";
import { renderToppings } from "./modules/renderToppings.js";
import { toppingsToogle } from "./modules/toppingsToogle.js";

const init = () => {
  toppingsToogle();
  renderToppings();
  renderPizzas();
  modalController({
  modal: '.modal-cart',
  btnOpen: '.header__cart, .hero__order',
  btnClose: '.modal__close',
  cbOpen () {
    modalCartController();
  }
});

};

init();


