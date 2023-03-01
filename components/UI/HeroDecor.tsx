import Image from 'next/image';
import styled from 'styled-components';

const HeroDecor = () => {
  return (
    <Decor>
      <Image
        src="/images/top-left-cross.png"
        alt="hero decor"
        width={35}
        height={70}
      />
      <Image src="/images/star.png" alt="hero decor" width={50} height={50} />
      <Image
        src="/images/top-left-flash.png"
        alt="hero decor"
        width={30}
        height={50}
      />
      <Image src="/images/star.png" alt="hero decor" width={50} height={50} />
      <Image
        src="/images/star-blue.png"
        alt="hero decor"
        width={50}
        height={50}
      />
      <Image
        src="/images/top-right-cross.png"
        alt="hero decor"
        width={25}
        height={50}
      />
      <Image
        src="/images/star-orange.png"
        alt="hero decor"
        width={50}
        height={50}
      />
      <Image
        src="/images/star-outline.png"
        alt="hero decor"
        width={50}
        height={50}
      />
      <Image src="/images/bread.png" alt="hero decor" width={50} height={50} />
      <Image
        src="/images/bottom-right-flash.png"
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
