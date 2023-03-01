import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import HeroDecor from './HeroDecor';

const Hero = () => {
  return (
    <Wrapper>
      <HeroDecor />
      <Inner>
        <Header>
          <H1>
            Take control of your finances with our <span>Budgeting</span> tool
          </H1>
          <P>
            Set a budget, track your spending, and reach your financial goals
            with our easy-to-use budgeting app. Get alerts as you approach your
            budget limits and stsy on track to financial freedom.{' '}
            <span>Download the app now and take control of your finances</span>
          </P>
        </Header>
        <ButtonContainer>
          <ButtonInner>
            <Button>
              <Image
                src="/images/ios-store.png"
                alt="apple logo"
                width={24}
                height={24}
              />
              <Text>
                <span>Download on the</span>
                <br />
                App Store
              </Text>
            </Button>
            <div></div>
          </ButtonInner>
          <ButtonInner>
            <Button>
              <Image
                src="/images/play-store.png"
                alt="google logo"
                width={24}
                height={24}
              />
              <Text>
                <span>GET IT ON</span>
                <br />
                Google Play
              </Text>
            </Button>
            <div></div>
          </ButtonInner>
        </ButtonContainer>
        <ImageContainer>
          <Image
            src="/images/half-phone.png"
            alt="hero image"
            width={430}
            height={330}
          />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0 0 0;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2%;
  }
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.div`
  flex: 1;
  padding: 0 2%;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const H1 = styled.h1`
  font-family: var(--font-family-clash-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: 3.1rem; // 50px
  line-height: 1.2;
  margin-bottom: 1rem;
  text-align: center;

  span {
    color: var(--color-orange);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const P = styled.p`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  font-family: var(--font-family-lufga);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-xl);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const ButtonInner = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 0.5rem;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-tertiary);
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    div {
      top: 0;
      left: 0;
    }
  }

  &:nth-child(2) {
    button {
      background: #cefe20;
    }
  }
`;

const Button = styled.button`
  width: auto;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 1px;
  background: var(--color-orange);
  border: 2px solid var(--color-primary);
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

const Text = styled.div`
  span {
    font-weight: var(--font-weight-normal);
    font-size: 8px;
  }
  font-family: var(--font-family-lufga);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-lg);
  color: var(--color-tertiary);
  text-align: left;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  @media (max-width: 768px) {
    display: none;
  }

  img {
    object-fit: contain;
  }
`;
