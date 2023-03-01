import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Wrapper>
      <Inner>
        <Logo>
          <H3>PocketPal</H3>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </Nav>
        <ButtonContainer>
          <ButtonInner>
            <Button>Download App</Button>
            <div></div>
          </ButtonInner>
        </ButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  flex: 1;
`;

const H3 = styled.h3`
  font-family: var(--font-family-clash-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-xl);
  color: var(--color-primary);
`;

const Nav = styled.nav`
  flex: 2;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    li {
      a {
        font-family: var(--font-family-lufga);
        font-weight: var(--font-weight-sm);
        font-size: var(--font-size-md);
        line-height: var(--font-line-height-xl);
        color: var(--color-primary);
      }
    }
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

  div {
    position: absolute;
    width: 155px;
    height: 45px;
    background: var(--color-tertiary);
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    div {
      top: 0;
      left: 0;
    }
  }
`;

const Button = styled.button`
  width: 155px;
  height: 45px;
  background: var(--color-secondary);
  border: 2px solid var(--color-tertiary);
  font-family: var(--font-family-lufga);
  font-weight: var(--font-weight-sm);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-xl);
  color: var(--color-tertiary);
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
