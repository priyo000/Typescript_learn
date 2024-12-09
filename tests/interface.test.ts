import { Seller } from "../src/interface";

describe('interface', () => {
    it('should support in typescript', () => {
        let seller: Seller = {
            id: 1,
            name: "Toko Mas Agung",
            nib: "029129212",
            npwp: "23232323223"
        }

        seller.name = "Toko Mas Febri"; 
        // seller.nib = "2323232"; //gak bisa diubah karena Readonly di properties interface

        console.info(seller);
    });
});