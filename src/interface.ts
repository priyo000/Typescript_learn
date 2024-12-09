export interface Seller{ //interface kurleb dengan alias namun lebih banyak digunakanoleh developer
    id: number,
    name: string,
    category?: string,
    readonly nib: string,
    readonly npwp?: string
};

export interface Multiply{ // function interface bisa mempermudah membuat variable berisi function
    (value1: number, value2: number): number
}

export interface StringArray{ //array namun dalam interface
    [index: number]: string
}

export interface StringDictionary{ //seperti object
    [key: string]: string
}