export interface Sale {
    id?: string;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    price: number;
    notes?: string;
    thumbnail: string;
    gallery: string[];
}

export interface Sold {
    id?: string;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    notes?: string;
    thumbnail: string;
    gallery: string[];
}

export interface Admin {
    name: string;
    password: string;
}

export interface Clothing {
    id?: string;
    title: string;
    description: string;
    category: string;
    size: string;
    measurements: string;
    gender: string;
    price?: number;
    notes?: string;
    thumbnail: string;
    gallery: any;
    saleClothes: any;
    soldClothes: any;
}