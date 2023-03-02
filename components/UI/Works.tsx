import Image from 'next/image';
import styled from 'styled-components';
import frameOne from '../../public/images/frame_1.png';
import frameTwo from '../../public/images/frame_2.png';
import frameThree from '../../public/images/frame_3.png';
import star from '../../public/images/star.png';

import { motion } from 'framer-motion';
import { item } from '@/utils/motionVariants';

const Works = () => {
  return (
    <Wrapper>
      <Decor>
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
        <Image src={star} alt="star" />
      </Decor>
      <Inner>
        <Header initial="hidden" whileInView="visible" variants={item}>
          <H1 variants={item}>How PocketPal works</H1>
          <P>
            PocketPal simplifies the process and makes it easy for you to
            achieve your goals. Just sign up, set your savings target, and let
            our automated tools do the rest. YOu can earn interest on your
            money, track your progress, and get helpful reminders and tips to
            stay on track. It’s that simple!
          </P>
        </Header>
        <Content>
          <CardContainer>
            <LHS>
              <LHSCard>
                <Image src={frameOne} alt="frame 1" />
                <P>
                  Track your spending and see your account activity with the
                  transaction screen. View your transactions by date, category,
                  or amount and easily monitor your spending patterns. With our
                  intuitive design and user-friendly interface, you can quickly
                  and easily stay on top of your financial activity
                </P>
              </LHSCard>
            </LHS>
            <RHS>
              <RHSCard>
                <Image src={frameTwo} alt="frame 2" />
                <P>
                  Stay on top of your finances with our budgeting screen. Easily
                  set and track your spending goals for different categories and
                  see your progress with a simple chart. Whether you&apos;re
                  saving for a big purchase or trying to cur back on expenses,
                  our budgeting screen makes it easy to stay on track
                </P>
              </RHSCard>
              <RHSCard>
                <Image src={frameThree} alt="frame 3" />
                <P>
                  Never miss a beat with the alert screen. Stay informed on all
                  your activities with real-time alerts for important events,
                  such as when you&apos;ve hit a savings goal, received a
                  payment, or have low balance. You can customize your alerts to
                  suit your needs, so you can stay on top of your finances with
                  ease
                </P>
              </RHSCard>
            </RHS>
          </CardContainer>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default Works;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffe5b4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  position: relative;
`;

const Decor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    &:nth-child(1) {
      top: 10%;
      left: 0%;
    }

    &:nth-child(2) {
      top: 5%;
      right: 0%;
    }

    &:nth-child(3) {
      top: 55%;
      left: 49%;
    }

    &:nth-child(4) {
      bottom: 0%;
      right: 0%;
    }

    &:nth-child(5) {
      bottom: 0%;
      left: 0%;
    }
  }
`;

const Inner = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 0.5em;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const H1 = styled(motion.h1)`
  font-family: var(--font-family-clash-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-xxxl);
  line-height: 39px;

  @media (max-width: 768px) {
    font-size: var(--font-size-xxl);
  }
`;

const P = styled(motion.p)`
  font-family: var(--font-family-lufga);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-xl);
  line-height: 26px;
  color: var(--color-tertiary);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const Content = styled.div``;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LHS = styled.div`
  z-index: 2;
`;

const RHS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  z-index: 2;
`;

const LHSCard = styled.div`
  background: #ffc683;
  border: 2px solid #1e1e1e;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  position: relative;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: #d1e6df;
    border: 2px solid #1e1e1e;
    border-radius: 25px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;
  }
`;

const RHSCard = styled.div`
  width: auto;
  height: 347px;
  display: flex;
  align-items: center;
  padding: 1em 2em;
  gap: 2em;
  background: #fbada5;
  border: 2px solid #1e1e1e;
  border-radius: 25px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: #d1e6df;
    border: 2px solid #1e1e1e;
    border-radius: 25px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:nth-child(2) {
    background: #c6bcfa;
    flex-direction: row-reverse;
    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: -15px;
      width: 100%;
      height: 100%;
      background: #eff1f7;
      border: 2px solid #1e1e1e;
      border-radius: 25px;
      z-index: -1;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 1em;
      padding: 1em;
      height: 100%;
    }
  }

  &:hover::after {
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;
    height: 100%;
  }
`;
