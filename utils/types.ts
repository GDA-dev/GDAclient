export interface Admin {
    name: string;
    password: string;
};

export interface Category {
    CT: string;
    CB: string;
    CO: string;
    A: string;
    O: string;
};

export interface Size {
    XXS: string;
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
    OS: string;
};

export interface Gender {
    M: string;
    F: string;
    U: string;
};

export interface Clothing {
    id?: number;
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
    saleClothes?: any;
    soldClothes?: any;
};

export interface Filter {
    category: string;
    size: string;
    gender: string;
};

export interface Credentials {
    username: string;
    password: string;
};


// export interface Sale {
//     id?: string;
//     title: string;
//     description: string;
//     category: string;
//     size: string;
//     measurements: string;
//     gender: string;
//     price: number;
//     notes?: string;
//     thumbnail: string;
//     gallery: string[];
// };

// export interface Sold {
//     id?: string;
//     title: string;
//     description: string;
//     category: string;
//     size: string;
//     measurements: string;
//     gender: string;
//     notes?: string;
//     thumbnail: string;
//     gallery: string[];
// };