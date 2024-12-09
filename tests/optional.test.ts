describe('Null and Undefined', () => {
    it('should Support in Typescript', () => {
        function sayHello(name?:string | null) { // '?' bisa digunakan jika nilai kemungkinan undefined atau null
            if (name) {
                console.info(`Hello ${name}`);
            }else{
                console.info(`Hello`);
            }
        }

        sayHello("Agung"); 
        let name: string | undefined;
        let name2: string | null = null;
        sayHello(name);
        sayHello(name2);
    });
});