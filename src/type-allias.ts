export type ID = string | number; //ALLIAS but Union

export type Category = {
    id: ID;  //ALLIAS but Union
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category?: Category; //terdapat optional properties '?' dimana nilai nya tidak wajib di isi , karena setiap object/allias defaultnya nilainya wajib di isi
}