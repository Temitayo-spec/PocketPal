import Image from 'next/image';
import styled from 'styled-components';
import top_left_cross from '../../public/images/top-left-cross.png';
import star from '../../public/images/star.png';
import top_left_flash from '../../public/images/top-left-flash.png';
import star_blue from '../../public/images/star-blue.png';
import top_right_cross from '../../public/images/top-right-cross.png';
import star_orange from '../../public/images/star-orange.png';
import star_outline from '../../public/images/star-outline.png';
import bread from '../../public/images/bread.png';
import bottom_right_flash from '../../public/images/bottom-right-flash.png';


const HeroDecor = () => {
  return (
    <Decor>
      <Image
        src={top_left_cross}
        alt="hero decor"
        width={35}
        height={70}
      />
      <Image src={star} alt="hero decor" width={50} height={50} />
      <Image
        src={top_left_flash}
        alt="hero decor"
        width={30}
        height={50}
      />
      <Image src={star} alt="hero decor" width={50} height={50} />
      <Image
        src={star_blue}
        alt="hero decor"
        width={50}
        height={50}
      />
      <Image
        src={top_right_cross}
        alt="hero decor"
        width={25}
        height={50}
      />
      <Image
        src={star_orange}
        alt="hero decor"
     
      />
      <Image
        src={star_outline}
        alt="hero decor"
        width={50}
        height={50}
      />
      <Image src={bread} alt="hero decor" width={50} height={50} />
      <Image
        src={bottom_right_flash}
        alt="hero decor"
        width={50}
        height={34}
      />
    </Decor>
  );
};

export default HeroDecor;

const Decor = styled.div`
  img {
    position: absolute;
    object-fit: contain;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 5%;
      left: 90%;
      transform: translateX(-50%);
    }

    &:nth-child(3) {
      top: 60%;
      left: 0%;
    }

    &:nth-child(4) {
      bottom: 2%;
      left: 2%;
      transform: translateX(-50%);
    }

    &:nth-child(5) {
      top: 60%;
      left: 20%;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        top: 20%;
        left: 0%;
      }
    }

    &:nth-child(6) {
      top: 30%;
      right: 0%;
    }

    &:nth-child(7) {
      top: 70%;
      right: 0%;
      transform: translateX(-50%);
    }

    &:nth-child(8) {
      top: 85%;
      right: 25%;
      transform: translateX(-50%);
    }

    &:nth-child(9) {
      top: 60%;
      right: 28%;

      @media (max-width: 768px) {
        top: 56%;
        right: 0%;
      }
    }

    &:nth-child(10) {
      bottom: 2%;
      right: 0%;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(8) {
      animation: star 2s infinite;
    }

    &:nth-child(3),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(9),
    &:nth-child(10) {
      animation: flash 2s infinite;
    }

    @keyframes star {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes flash {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;
