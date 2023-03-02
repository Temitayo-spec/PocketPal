import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Wrapper>
      <Inner>
        <Logo>
          <H3>PocketPal</H3>
          <Burger
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </Burger>
        </Logo>
        <Nav className={toggle ? 'active' : ''}>
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
        <ButtonContainer className={toggle ? 'active' : ''}>
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Logo = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const Burger = styled.div`
  display: none;

  div {
    width: 30px;
    height: 3px;
    background: var(--color-tertiary);
    margin: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
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
  transition: visibility opacity 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 100%;
    position: relative;
    li {
      a {
        font-family: var(--font-family-lufga);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-md);
        line-height: var(--font-line-height-xl);
        color: var(--color-primary);
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        a {
          color: var(--color-secondary);
          padding: 0 0 5px 0;
          border-bottom: 2px solid var(--color-secondary);
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      position: absolute;
      z-index: 1;
      top: 80px;
      left: 50%;
      width: 90%;
      transform: translateX(-50%);
      background: var(--color-orange);
      border: 2px solid var(--color-tertiary);
      border-radius: 20px;
      padding: 2em 2em 6em 2em;
      li {
        margin-top: 20px;

        a {
          color: var(--color-secondary);
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    visibility: hidden;
    opacity: 0;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 768px) {
    top: 200px;
    opacity: 0;
    visibility: hidden;
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
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
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-xl);
  color: var(--color-tertiary);
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
