export interface Seller{ //interface kurleb dengan alias namun lebih banyak digunakanoleh developer
    id: number,
    name: string,
    category?: string,
    readonly nib: string,
    readonly npwp?: string
};