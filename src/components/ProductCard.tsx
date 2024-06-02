import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" style={{objectFit:"contain",height:"200px"}} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <Link href={`/products/${id}`}>
          <span className="btn btn-primary">View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
