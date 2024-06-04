export interface product {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
    discount?: number;
    available: boolean;
    rating: number;
    stock:number;
}
