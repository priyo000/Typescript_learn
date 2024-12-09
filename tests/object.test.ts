describe('Object in TS', () => {
    it('should support in Typescript', () => {
        const person: {name: string, umur: number, hobbies?: string[]} = {  //terdapat optional properties '?' dimana nilai nya tidak wajib di isi , karena setiap object/allias defaultnya nilainya wajib di isi
            name : "Agung",
            umur : 21,
            hobbies : ["membaca","menulis"] //boleh di isi ataupun tidak
        }

        // person.gender = "man"; //tidak bisa karena belum ditentukan di person 

        console.info(person);
    });
});