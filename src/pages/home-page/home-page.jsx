import React from 'react';
import { pagesBlocks, products } from './home-page.data.js';
import ButtonDark from '../../components/button-dark/button-dark';
import ProductCard from '../../components/product-card/product-card';
import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={styles.posterContainer}>
        <div className={styles.posterContent}>
          <h2 className={styles.posterTitle}>
            Feel Great.
            <br />
            Body and Mind.
          </h2>
          <p className={styles.posterDescription}>
            Choose from hundreds of workouts, healthy recipes, relaxing
            meditations, and expert articles, for a whole body and mind approach
            to feeling great.
          </p>
          <ButtonDark
            url='https://www.fitnessblender.com/membership'
            text='Join Now'
          />
        </div>
        <img
          className={styles.posterImage}
          src='https://cloudfront.fitnessblender.com/assets/img/homepage/team-1440.png'
          alt='Fitness Blender trainer group'
          width='590'
          height='590'
        />
      </section>
      <section className={styles.pagesBlocks}>
        <div
          className={`${styles.block} ${styles.withPasses} ${styles.fullScreenSized}`}
        >
          <div className={styles.blockInfo}>
            <h2 className={`${styles.blockTitle} ${styles.black}`}>
              Introducing
              <br />
              <span className={styles.fbPlus}>
                <span className={styles.fb}>FB </span>
                <span className={styles.plus}>Plus </span>
              </span>
              Passes
            </h2>
            <p className={`${styles.blockDescription} ${styles.black}`}>
              Passes give you full access to everything FB Plus has to offer,
              without a long-term subscription. Choose a pass that fits your
              budget and your schedule.
            </p>
            <ButtonDark
              url='https://www.fitnessblender.com/store#store-passes'
              text='Buy a Pass'
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src='https://cloudfront.fitnessblender.com/assets/img/homepage/passes-1440.png'
              alt='FB Plus passes'
              width='720'
              height='250'
            />
          </div>
        </div>
        {pagesBlocks.map((block) => (
          <div
            key={block.id}
            className={`${styles.block} ${styles[block.id]} ${
              block.id === 'community' ? styles.fullScreenSized : null
            }`}
          >
            <div className={styles.blockInfo}>
              <h2
                className={`${styles.blockTitle} ${
                  block.id === 'articles' ? styles.white : styles.black
                }`}
              >
                {block.title}
              </h2>
              <p
                className={`${styles.blockDescription} ${
                  block.id === 'articles' ? styles.white : styles.black
                }`}
              >
                {block.description}
              </p>
              <div className={styles.blockUrl}>
                <a href={block.url}>{block.callToAction}</a>
              </div>
            </div>
            <div
              className={
                block.id === 'community'
                  ? styles.fullScreenSizedImageContainer
                  : styles.imageContainer
              }
            >
              <img
                className={styles.image}
                src={block.src}
                alt={block.alt}
                width={block.id === 'community' ? '1780' : '720'}
                height={block.id === 'community' ? '890' : '360'}
              />
            </div>
          </div>
        ))}
      </section>
      <section className={styles.productCardsContainer}>
        <h2 className={styles.productCardsTitle}>Not sure where to start?</h2>
        <p className={styles.productCardsDescription}>
          Programs offer day-to-day guidance on an interactive calendar to keep
          you on track.
        </p>
        <ProductCard products={products} />
        <p className={styles.toAllProductsUrl}>
          <a href='https://www.fitnessblender.com/plans'>View All Programs</a>
        </p>
      </section>
    </main>
  );
};

export default HomePage;
