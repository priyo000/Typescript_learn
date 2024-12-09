import { Category, Product } from "../src/type-allias";

describe('Type Allias', () => {
    it('should typescript allias', () => {
        const category: Category = {
            id: "1",
            name: "Elektronik"
        };
    
        const produk: Product = {
            id: "1",
            name: "Kulkas",
            price: 1000000,
            category: category
        };
    
        // produk.brand = "LG"; //ERROR karena tidak ada di allias
    
        console.info(category);
        console.info(produk);
    });
});