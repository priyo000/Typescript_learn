import { Seller,Multiply,StringArray,StringDictionary, Employee, Manager, Person } from "../src/interface";

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

    it('should function interface', () => {
        let perkalian: Multiply = (value1:number, value2:number): number =>{  //penggunaan function interface pada variable
            return value1*value2;
        }

        expect(perkalian(3,2)).toBe(6);
    });

    it('should indexable interface', () => {
        let namaku: StringArray = ["Agung", "Priyo", "Sembodo"];

        expect(namaku[0]).toBe("Agung");

        let book: StringDictionary = {
            name: "Apaantuh",
            author: "Siapa"
        };

        expect(book.name).toBe("Apaantuh");
    });

    it('should extend Interface', () => {
        let karyawan: Employee = {
            id:1,
            name:"Agung",
            div:"IT"
        };

        let manager: Manager = {
            id: 2,
            name: "Febri",
            numberOfEmployee: 4
        };

        console.info(manager);
    });

    it('should function in interface', () => {
        let person: Person = {
            name: "Agung",
            sayHello(name) {
                return `Hello ${name} aku ${this.name}`;
            }
        };
        expect(person.sayHello("Priyo")).toBe("Hello Priyo aku Agung");
    });
});