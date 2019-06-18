function ShoppingCart() {
  this.something = 'a';
}

ShoppingCart.prototype.doSomething = function () {
  console.log(this.something);
};
