
describe('Learn Function Typescript', () => {
    it('should function w/ return and w/o return (void)', () => {
        function sayHello(name:string) : string {
            return `Hello ${name}`;
        }

        expect(sayHello("Agung")).toBe("Hello Agung");

        function printHello(name:string) : void { //void jika tanpa return
            console.info(`Hai ${name}`);
        }

        printHello("Febri");
    });

    it('should function w/ Default Value', () => {
        function sayHello(name: string = 'Guest'): string{  //memberikan Default Value
            return `Hallo Mas ${name}`;
        }
        expect(sayHello()).toBe("Hallo Mas Guest");
        expect(sayHello("Agung")).toBe("Hallo Mas Agung");
    });

    it('should function w/ rest parameter', () => { // dengan array parameter
        function sum(...values:number[]) : number{
            let total : number = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1,2,3,4)).toBe(10);
    });

    it('function w/ optional parameter', () => {
        function sayHello(firstname:string, lastname?:string) : string { // pake '?' utk buat optional parameter
            if (lastname) {
                return `Hello ${firstname} ${lastname}`;
            }else{
                return `Hello ${firstname}`;
            }
        }

        expect(sayHello("Agung")).toBe("Hello Agung");
        expect(sayHello("Agung","Priyo")).toBe("Hello Agung Priyo");
    });

    it('should function overloading', () => {  // jika 1 Function dengan parameter dan return bermacam-macam
        function whatever(value: string) : string;
        function whatever(value: number) : number;
        function whatever(value:any) : any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        expect(whatever("Agung")).toBe("AGUNG");
        expect(whatever(10)).toBe(100);
    });

    it('should function as parameter', () => { 
        function sayHello(name:string, filter : (name:string) => string) {
            return `Hello ${filter(name)}`;
        }
        function Upper(name: string): string{
            return name.toUpperCase();
        }
        expect(sayHello("Agung",Upper)).toBe("Hello AGUNG");

        expect(sayHello("Agung", (name: string): string => name.toUpperCase())).toBe("Hello AGUNG"); //bisa juga function nya ditulis langsung tanpa membuat function baru lagi diluar (disebut anonymus function)
    });
});