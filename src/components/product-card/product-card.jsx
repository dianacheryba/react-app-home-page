import React from 'react';
import styles from './product-card.module.css';

const ProductCard = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products.map((product) => (
        <div key={product.id} className={styles.cardContainer}>
          <h2 className={styles.title}>{product.title}</h2>
          <div className={styles.card}>
            <a className={styles.details} href={product.url}>
              {product.isExclusive && <div className={styles.exclusiveProduct}>FB Plus</div>}
              <img className={styles.image} src={product.imageUrl} alt={product.imageAlt} width='340' height='180' />
              <span className={styles.cardTitle}>{product.cardTitle}</span>
              <h3 className={styles.cardDescription}>{product.cardDescription}</h3>
              <span className={styles.price}>{product.price}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
