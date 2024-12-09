export enum PersonType {
    GOLD = "GOLD",
    SILVER = 'SILVER',
    REGULAR = 'REGULAR'
};

export enum PersonTypeo { //bisa begini namun hasil default nya berupa number jadi tidak rekomen karena bisa jadi tidak konsisten
    GOLD,
    SILVER,
    REGULAR
};

export type Person = {
    id: number;
    nama: string;
    umur: number;
    kelas: PersonType;
}