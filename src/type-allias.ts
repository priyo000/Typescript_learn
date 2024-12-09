export type ID = string | number; //ALLIAS but Union

export type Category = {
    id: ID;  //ALLIAS but Union
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
}