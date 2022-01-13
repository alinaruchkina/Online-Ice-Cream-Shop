import React from 'react';
import Header from '../../components/header/Header';
import First_slide from '../../components/slides/first_slide';
import DescriptionOfThePromotion from '../../components/DescriptionOfThePromotion/DescriptionOfThePromotion';
import SelectionOfIceCream from '../../components/SelectionOfIceCream/SelectionOfIceCream';
import { useDispatch, useSelector } from 'react-redux';
import Desserts from '../../components/Desserts/Desserts';

function Main() {
  const currentSlide = useSelector(({ slider }) => slider.currentSlide);
  console.log(currentSlide);
  return (
    <>
      <First_slide
        title_small={currentSlide.title_small}
        title_big={currentSlide.title_big}
        image={currentSlide.image}
      />
      <DescriptionOfThePromotion />
      <SelectionOfIceCream />
      <Desserts />
    </>
  );
}

export default Main;
