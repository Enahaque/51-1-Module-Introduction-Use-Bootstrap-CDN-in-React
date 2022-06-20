import React from 'react';

const Card = (props) => {
    const{id,img,name,price}=props.product;
    return (
        
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{id}</h5>
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price}</p>
                            <p className="card-text"><small className="text-muted">Newly arrival</small></p>
                        </div>
                </div>
       
    );
};

export default Card;