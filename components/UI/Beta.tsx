import Image from 'next/image';
import styled from 'styled-components';
import beta_ellipse from '../../public/images/beta_ellipse.png';
import ParallaxText from '../General/ParallaxText';

const Beta = () => {
  return (
    <Wrapper>
      <Inner>
        <ParallaxText baseVelocity={1}>
          <DIV>
            <Image src={beta_ellipse} alt="beta_ellipse" />
            <H2>Beta</H2>
            <Image src={beta_ellipse} alt="beta_ellipse" />
          </DIV>
          <P>
            all users who test the beta app gets a 2-month discount off premium
            services
          </P>
          <DIV>
            <Image src={beta_ellipse} alt="beta_ellipse" />
            <H2>Beta</H2>
            <Image src={beta_ellipse} alt="beta_ellipse" />
          </DIV>
          <P>
            all users who test the beta app gets a 2-month discount off premium
            services
          </P>
        </ParallaxText>
      </Inner>
    </Wrapper>
  );
};

export default Beta;

const Wrapper = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  background: #8db1fd;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 400%;
  transform: rotate(1deg);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1%;
  background: #ffe6a9;
  border: 3px solid #1e1e1e;
  margin-right: -10%;
  margin-left: -10%;
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1em;
`;

const H2 = styled.h2`
  font-family: var(--font-family-clash-display);
  font-weight: var(--font-weight-semi-bold);
  font-size: 2.5rem;
  color: #1e1e1e;
  margin: 0 1em;
`;

const P = styled.p`
  font-family: var(--font-family-clash-display);
  font-weight: var(--font-weight-normal);
  font-size: 1.75rem;
  color: #1e1e1e;
  margin: 0 1em;
`;
