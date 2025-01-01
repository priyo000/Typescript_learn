describe('Learn if and Switch Typescript', () => {
    it('should if else ', () => {
        const examgrade = 70;
        if (examgrade >= 80) {
            console.info("good");
        }else if (examgrade >= 65) {
            console.info("nice");
        }else{
            console.info("No record");
        }
    });

    it('should ternary option', () => {
        const value = 40;
        const tittle = value >= 45 ? "Congrats":"Try Again";
        
        console.info(tittle);
    });

    it('should switch', () => {
        function sayHello(name?:string): string {
            switch (name) {
                case "Eko":
                    return "Hello Eko";
                case "Aji":
                    return "Hello Aji";
                case "Feb":
                    return "Hello Feb";
                case "Ipin":
                    return "Hello Ipin";
                default:
                    return "Hello";
            }
        }

        console.info(sayHello("Eko"));
        console.info(sayHello("Aji"));
        console.info(sayHello("Feb"));
        console.info(sayHello("Ipin"));
        console.info(sayHello());
    });
});