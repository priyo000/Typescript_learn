describe('Union Type data', () => {
    it('should suppoert in Typescript', () => {
        let sample: number | string | boolean = "Agung"; //type data boleh lebih dari 1 namun sudah ditentukan
        console.info(sample);
        
        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        // sample = ["agung1"]; //error karena array tidak ditentukan
    });

    it('should typeof operator', () => {
        function process(values:number | string | boolean) {
            if (typeof values === "string") {
                return values.toUpperCase();
            }
            else if (typeof values === "number") {
                return values + 2;
            }
            else if (typeof values === "boolean") {
                return !values;
            }
        }

        expect(process("agung")).toBe("AGUNG");
        expect(process(1)).toBe(3);
        expect(process(true)).toBe(false);
    });
});