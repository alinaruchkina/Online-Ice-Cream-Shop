import image1 from '../images/content_background_girl.jpg';
import image2 from '../images/second_slide.jpg';
import image3 from '../images/third_slide.jpg';

export function changeImage(title) {
  switch (title) {
    case 'BEST CHOICE':
      return image1;
    case 'Sweetest Taste':
      return image2;
    case 'Natural Ingredients':
      return image3;
    default:
  }
}
