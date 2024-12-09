import { Person, PersonType } from "../src/enum";

describe('Enum', () => {
    it('should support in Typescript enum', () => {
        const person: Person = {
            id: 1,
            nama: "Agung",
            umur: 21,
            kelas: PersonType.GOLD  //menggunakan enum
        };

        console.info(person);
    });
});