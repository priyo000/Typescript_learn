describe('Array test', () => {
    it('should same w/ javascript', () => {
        const names: string[] = ["Agung","Feb","Ipin"];
        const values: number[] = [12,13,15];

        console.info(names);
        console.info(values);
    });

    it('should readonly array', () => {
        const hobbies: ReadonlyArray<string> = ["Membaca","Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);

        // hobbies[0] = "Mendengar"; // error karena Readonly
    });

    it('should typedata tuple', () => {
        const person: readonly [string, string, number] = ["Agung","Laki",24];
        // tuple adalah array dengan jumlah dan tipe datanya sudah ditentukan dan readonly
        console.info(person);
        console.info(person[0]);
        console.info(person[2]);
    });
});