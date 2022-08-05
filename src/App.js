import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavHeader from './layouts/nav-header/nav-header';
import HomePage from './pages/home-page/home-page';
import Footer from './layouts/footer/footer';

const App = () => {
  const [isStickyNavHeader, setIsStickyNavHeader] = useState(false);
  const contentRef = useRef(null);

  const toggleStickyHeader = useCallback(
    ({ y }) => {
      if (y <= -110) {
        setIsStickyNavHeader(true);
      } else {
        setIsStickyNavHeader(false);
      }
    },
    [setIsStickyNavHeader]
  );

  useEffect(() => {
    const handleScroll = () => {
      toggleStickyHeader(contentRef.current.getBoundingClientRect());
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleStickyHeader]);

  return (
    <div>
      {isStickyNavHeader && (
        <div className={styles.sticky}>
          <NavHeader isStickyNavHeader={true} marginBottom='16px' />
        </div>
      )}
      <div ref={contentRef}>
        <NavHeader isStickyNavHeader={false} />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
