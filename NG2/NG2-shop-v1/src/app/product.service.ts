
import { Product } from './model/product';
import { Injectable} from '@angular/core';

const PRODUCTS=[
    {
        id: 1,
        name: 'Laptop',
        price: 198000, description:
        'New Mac pro', canBuy: true,
        notAvailable: false,
        images: [
            { thumb: 'images/Laptop.png', full: '' },
            { thumb: 'images/Laptop.png', full: '' }
        ],
        reviews: [
            { id: 11, stars: 5, author: 'nag@gmail.com', comment: 'This is good laptop' },
            { id: 12, stars: 2, author: 'indu@gmail.com', comment: 'too costly' }
        ]
    },
    {
        id: 2,
        name: 'Mobile',
        price: 98000,
        description: 'New Iphone',
        canBuy: true,
        notAvailable: false,
        images: [
            { thumb: 'images/Mobile.png', full: '' },
            { thumb: 'images/Mobile.png', full: '' }
        ],
        reviews: [
            { id: 13, stars: 5, author: 'nag@gmail.com', comment: 'This is good laptop' },
            { id: 14, stars: 2, author: 'indu@gmail.com', comment: 'too costly' }
        ]
    },
];


@Injectable()
export class ProductService {

    loadAllProducts(): Promise<any> {
        return Promise.resolve(PRODUCTS);
        //  return Promise.reject("Failed load products");
    }

}