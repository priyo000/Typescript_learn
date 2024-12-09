import { Seller } from "../src/interface";

describe('interface', () => {
    it('should support in typescript', () => {
        let seller: Seller = {
            id: 1,
            name: "Toko Mas Agung",
        }

        console.info(seller);
    });
});