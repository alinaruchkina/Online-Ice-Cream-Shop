import image1 from '../images/content_background_girl.jpg';
import image2 from '../images/second_slide.jpg';
import image3 from '../images/third_slide.jpg';

export function changeImage(title) {
  switch (title) {
    case 'BEST CHOICE':
      return image1;
    case 'SWEETEST TASTE':
      return image2;
    case 'NATURAL INGREDIENTS':
      return image3;
    default:
      return image1;
  }
}
