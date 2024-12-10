export interface Seller{ //interface kurleb dengan alias namun lebih banyak digunakanoleh developer
    id: number;
    name: string;
    category?: string;
    readonly nib: string;
    readonly npwp?: string;
};

export interface Multiply{ // function interface bisa mempermudah membuat variable berisi function
    (value1: number, value2: number): number;
}

export interface StringArray{ //array namun dalam interface
    [index: number]: string;
}

export interface StringDictionary{ //seperti object
    [key: string]: string;
}

//Extends Interface Learn
export interface Employee{
    id: number;
    name: string;
    div?: string;
}
// use Extends Interface
export interface Manager extends Employee{
    numberOfEmployee: number;
}

export interface Person{
    name: string;
    sayHello(name: string): string;
}

export interface Hobby{
    hobby: string;
}