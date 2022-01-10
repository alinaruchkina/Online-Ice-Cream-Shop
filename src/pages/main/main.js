import React from 'react';
import Header from '../../components/header/Header';
import First_slide from '../../components/slides/first_slide';

function Main() {
  let props = {
    title_small: 'BEST CHOICE',
    title_big: 'YUMMY',
    // image: changeImage(this.title_small),
  };
  return (
    <>
      <Header />
      <First_slide title_small={props.title_small} title_big={props.title_big} />
      {/* <Second_slide /> */}
    </>
  );
}

export default Main;
