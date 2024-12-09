describe('Object in TS', () => {
    it('should support in Typescript', () => {
        const person: {name: string, umur: number} = {
            name : "Agung",
            umur : 21
        }

        // person.gender = "man"; //tidak boisa karena belum ditentukan di person 

        console.info(person);
    });
});