describe('Learn Looping Typescript', () => {
    it('should for, forof, forin  ', () => {
        const names: string[] = ['Agung','Priyo','Sembodo'];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
            
        }

        for (const name of names) {
            console.info(name);
        }

        for (const index in names) {
            console.info(names[index]);
        }
    });

    it('should while loop', () => {
        let count: number = 0;

        while (count<=10) {
            console.info(count);
            count++;
        }
    });

    it('should do while loop', () => {
        let count: number = 0;
        do {
            console.info(count);
            count++;
        } while (count<10);
    });

    it('should break and continue', () => {
        let count: number = 0;
        do {
            count++;
            if (count == 10) {
                break;
            }

            if (count%2 == 0) {
                continue;
            }
            console.info(count);
        } while (true);
    });
});