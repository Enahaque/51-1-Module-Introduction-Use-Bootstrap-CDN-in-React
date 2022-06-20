import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1,img:'https://i.ibb.co/gdhrp92/joshua-woroniecki-lzh3h-Pt-Jz9c-unsplash.jpg', name:'Laptop-Pro',price:300000},
        {id:2,img:'https://i.ibb.co/gdhrp92/joshua-woroniecki-lzh3h-Pt-Jz9c-unsplash.jpg', name:'Laptop-Gro',price:350000},
        {id:3,img:'https://i.ibb.co/gdhrp92/joshua-woroniecki-lzh3h-Pt-Jz9c-unsplash.jpg', name:'Laptop-Bro',price:400000},
       
    ];
    return (
        <div>
            <h2>This is My Cards</h2>
            <div className="card-group">
                {
                    products.map(product=><Card
                    key={product.id}
                    product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;