export interface ImageTypes {
    [key: string]: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export type Product = {
    id: number;
    slug: string;
    name: string;
    shorthand: string;
    image: ImageTypes;
    category: string;
    categoryImage: ImageTypes;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: ImageTypes;
        second: ImageTypes;
        third: ImageTypes;
    };
    others: {
        slug: string;
        name: string;
        image: ImageTypes;
    }[];
}

export type Others = {
    slug: string;
    name: string;
    image: ImageTypes;
}[]

export interface StaticImageTypes {
    [key: string]: StaticImageData;
    desktop: StaticImageData;
    tablet: StaticImageData;
    mobile: StaticImageData;
}

export interface CartItems {
  [key: string]: number;
}
