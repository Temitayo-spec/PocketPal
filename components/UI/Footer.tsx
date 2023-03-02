import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import google_icon from '@/public/svgs/ic-google.svg';
import twitter_icon from '@/public/svgs/ic-twitter.svg';
import facebook_icon from '@/public/svgs/ic-facebook.svg';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Top>
          <Logo>PocketPal</Logo>
          <Links>
            <h2>Support</h2>
            <Link href="#">Customer Login</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Beta Testing</Link>
            <Link href="#">Waitlist</Link>
          </Links>
          <Links>
            <h2>Why PocketPal?</h2>
            <Link href="#">Our Technology</Link>
            <Link href="#">API</Link>
            <Link href="#">Diversity & Inclusion</Link>
            <Link href="#">Partners</Link>
            <Link href="#">AI Powered</Link>
          </Links>
          <Links>
            <h2>Company</h2>
            <Link href="#">Blog</Link>
            <Link href="#">API</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Our Mission</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
          </Links>
        </Top>
      </Inner>
      <Bottom>
        <hr />

        <div>
          <p>&copy; 2021 PocketPal. All rights reserved.</p>
          <SocialIcons>
            <Link href="#">
              <Image src={google_icon} alt="facebook" />
            </Link>
            <Link href="#">
              <Image src={twitter_icon} alt="instagram" />
            </Link>
            <Link href="#">
              <Image src={facebook_icon} alt="twitter" />
            </Link>
          </SocialIcons>
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: #000;
  color: #fff;
  padding: 10rem 0 2rem 0;
  margin-top: -300px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 12em;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Logo = styled.h1`
  font-size: var(--font-size-xxl);
  font-weight: var(--font-size-semi-bold);
  color: #fff;
  font-family: var(--font-family-clash-display);
`;

const Links = styled.div`
  font-family: var(--font-family-lufga);
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.3s;
    }
  }
`;

const Bottom = styled.div`
  position: relative;
  width: 100%;

  hr {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    border: 1px solid #fff;
    opacity: 0.5;
  }

  & > div {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--font-size-xxl);
    padding-top: var(--font-size-xxl);
    font-family: var(--font-family-lufga);

    p {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-normal);
      color: #fff;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 10%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  a {
    display: inline-block;
  }

  img {
    width: var(--font-size-xxxl);
    height: var(--font-size-xxxl);
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
  }
`;
