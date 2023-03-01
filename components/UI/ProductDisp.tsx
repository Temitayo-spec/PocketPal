import styled from 'styled-components';
import ParallaxText from '../General/ParallaxText';

const ProductDisp = () => {
  return (
    <Wrapper>
      <Inner>
        <ParallaxText baseVelocity={2}>
          <Content>
            <Text>
              <h2>In corporation with over 100 companies</h2>
            </Text>
            <CompanyContainer>
              <Company>
                <h2>Facebook</h2>
              </Company>
              <Company>
                <h2>Google</h2>
              </Company>
              <Company>
                <h2>Twitter</h2>
              </Company>
              <Company>
                <h2>Kuda</h2>
              </Company>
              <Company>
                <h2>Opay</h2>
              </Company>
            </CompanyContainer>
          </Content>
        </ParallaxText>
      </Inner>
    </Wrapper>
  );
};

export default ProductDisp;

const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  background-color: #faca52;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 400%;
  transform: rotate(-2deg);
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 2% 0 0 0;
  position: relative;
  background: #e6e6fa;
  border: 3px solid #1e1e1e;
  transform: rotate(-1deg);
  margin-right: -10%;
  margin-left: -10%;
  z-index: 20;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2%;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  margin-top: -20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.div`
  width: 650px;
  padding: 1em;

  h2 {
    font-family: var(--font-family-clash-display);
    font-weight: var(--font-weight-normal);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--color-tertiary);
    transform: rotate(-1deg);
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Company = styled.div`
  width: 190px;
  height: 79px;
  background: #ffffff;
  border: 2px solid #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
  h2 {
    font-family: var(--font-family-clash-display);
    font-weight: var(--font-weight-normal);
    font-size: 1.5rem;
    line-height: 1.2;
    color: var(--color-tertiary);
    transform: rotate(-1deg);
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;
