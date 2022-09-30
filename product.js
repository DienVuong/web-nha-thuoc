class Product {
    name;
    price;
    image;
    Category;

    constructor(name, price, image, Category) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.Category = Category;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImage() {
        return this.image;
    }
    getCategory() {
        return this.Category;
    }


    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setImage(image) {
        this.image = image;
    }
    setThuoc(thuoc){
        this.thuoc = Category;
    }

}
