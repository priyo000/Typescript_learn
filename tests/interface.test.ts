import { Seller,Multiply,StringArray,StringDictionary, Employee, Manager, Person, Hobby } from "../src/interface";

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
            sayHello(name: string) {
                return `Hello ${name} aku ${this.name}`;
            }
        };
        expect(person.sayHello("Priyo")).toBe("Hello Priyo aku Agung");
    });

    it('should intersection in typescript', () => { //menggabungkan 2 interface 
        interface NameAndArray extends Person, Hobby { //begini bisa jika ada yg ditambahkan datanya kedalam interface
            yournumber:number;
        }

        type NameAndArray2 = Person & Hobby; //lebih baik begini jika tidak ada tambahan tipe data didalam nya menggunakan '&'

        let namehobby: NameAndArray2 = {
            name: "Agung",
            sayHello(name:string){
                return `Hai ${name} hoby nya ${this.hobby}`;
            },
            hobby: "Sepak Bola"
        }

        console.info(namehobby.sayHello("Priyo"));


    });
    it('should assertion in Typescript', () => {
        const person : any = {
            name: "Agung",
            age: 21
        };

        const person2: Person = person as Person;

        console.info(person2.name);
    });
});