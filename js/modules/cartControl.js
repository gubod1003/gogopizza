export const cartControl = {
    cartData: JSON.parse(localStorage.getItem('cart') || '[]'),
    addCart(product) {
        this.cartData.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    },
    removeCart(){
        //!todo Написать метод удаления товара из корзины
    },
}