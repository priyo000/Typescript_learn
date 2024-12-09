describe('Data Type', () => {
    it('should must declare', () => {
        let name: string = "Agung Priyo Sembodo";
        let balance: number = 121212;
        let status: boolean = true;
        let random: any = 12;

        console.info(name);
        console.info(balance);
        console.info(status);

        // name = 1;
        // balance = "11111";   //error test [compile = error, but test w/ jest = no error]
        // status = 1;
        random = "duabelas"; //tidak error karena tipe data any

    });
});