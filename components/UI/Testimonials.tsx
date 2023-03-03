import Image from 'next/image';
import styled from 'styled-components';
import person_1 from '@/public/images/person_1.png';
import person_2 from '@/public/images/person_2.png';
import person_3 from '@/public/images/person_3.png';
import arrow_left from '@/public/images/arrow-left.png';
import arrow_right from '@/public/images/arrow-right.png';
import yellow_star from '@/public/images/yellow-star.png';

const Testimonials = () => {
  return (
    <Wrapper>
      <Decor>
        <Image src={yellow_star} alt="yellow_star" />
        <Image src={yellow_star} alt="yellow_star" />
        <Image src={yellow_star} alt="yellow_star" />
      </Decor>
      <Inner>
        <Header>
          <h1>Testimonials</h1>
          <p>
            Tens of thousands of customers are building a brighter future with
            PocketPal
          </p>
        </Header>
        <TestimonialContainer>
          <Testimonial>
            <Div>
              <Image src={arrow_left} alt="arrow_left" />
            </Div>
            <TestmonialCard>
              <Quote>
                <span>“</span>
                <span>”</span>
              </Quote>
              <Images>
                <Image src={person_1} alt="person_1" />
                <Image src={person_2} alt="person_2" />
                <Image src={person_3} alt="person_3" />
              </Images>
              <TestimonialText>
                <p>
                  “ Thanks to PocketPal, I’ve been able to optimize my financial
                  journey and achieve my goals faster than I ever thought
                  possible. The user-friendly interface and exceptional customer
                  support makes managing my finances a breeze.”
                </p>
                <h3>-Tom S.</h3>
              </TestimonialText>
            </TestmonialCard>
            <Div>
              <Image src={arrow_right} alt="arrow_right" />
            </Div>
          </Testimonial>
        </TestimonialContainer>
      </Inner>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.section`
  background: #fff;
  position: relative;
  height: 100vh;
`;

const Decor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    position: absolute;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1rem 5rem 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  h1 {
    font-family: var(--font-family-clash-display);
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-tertiary);
    margin-bottom: 1rem;
  }
  p {
    font-family: var(--font-family-lufga);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-normal);
    color: var(--color-tertiary);
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: var(--font-size-xxl);
    }

    p {
      font-size: var(--font-size-sm);
    }
  }
`;

const TestimonialContainer = styled.div`
  height: 100%;
`;

const Testimonial = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Div = styled.div`
  width: 85px;
  height: 85px;
  background: #faca52;
  border: 2px solid #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: -40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:nth-child(3) {
    left: 95%;

    @media (max-width: 768px) {
      left: 84%;
    }
  }

  img {
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    left: 5px;
  }
`;

const TestmonialCard = styled.div`
  background: #fffae9;
  border: 2px solid #4b83fb;
  border-radius: 34px;
  padding: 3rem;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  p {
    font-family: var(--font-family-clash-display);
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-tertiary);
    margin-bottom: 1rem;
  }

  h3 {
    font-family: var(--font-family-lufga);
    font-size: 28px;
    font-weight: var(--font-weight-normal);
    color: #65c8cf;
  }

  &::after {
    content: '';
    position: absolute;
    background: #65c8cf;
    border: 2px solid #4b83fb;
    border-radius: 34px;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 10px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    p {
      font-size: var(--font-size-sm);
      font-weight: 500;
      letter-spacing: 0.7px;
    }
  }
`;

const Quote = styled.div`
  span {
    font-family: var(--font-family-clash-display);
    font-weight: var(--font-weight-semi-bold);
    font-size: 250px;
    color: #faca52;
    position: absolute;
  }
  span:nth-child(1) {
    top: -100px;
    left: 0;

    @media (max-width: 768px) {
      top: -60px;
    }
  }
  span:nth-child(2) {
    bottom: -200px;
    right: 0;

    @media (max-width: 768px) {
      bottom: -120px;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 150px;
    }
  }
`;

const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0;
  margin-top: -90px;
  background: #fff;
  border-radius: 50%;

  img {
    &:nth-child(1) {
      opacity: 0.6;

      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    &:nth-child(2) {
      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    &:nth-child(3) {
      opacity: 0.6;

      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: -50px;
  }
`;

const TestimonialText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 80%;
  margin: 1rem auto;
`;
