import styled from 'styled-components';
import DownloadButtons from '../General/DownloadButtons';
import available_1 from '../../public/images/available_1.png';
import available_2 from '../../public/images/available_2.png';
import Image from 'next/image';

const Available = () => {
  return (
    <Wrapper>
      <Inner>
        <LHS>
          <h1>Available Now on Each Platform</h1>
          <DownloadButtons />
        </LHS>
        <RHS>
          <ImageContainer>
            <Image src={available_1} alt="hero image" />
            <Image src={available_2} alt="hero image" />
          </ImageContainer>
        </RHS>
      </Inner>
    </Wrapper>
  );
};

export default Available;

const Wrapper = styled.div`
  width: 80%;
  margin: -140px auto 0;
  height: 100%;
  position: relative;
  background: #f4a460;
  border: 4px solid #1e1e1e;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    padding: 0 2%;
    overflow: hidden;
  }
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LHS = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2em;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2em 0;
  }
  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-semi-bold);
    font-family: var(--font-family-clash-display);
    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }
`;

const RHS = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2em;
  padding: 2% 2% 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
justify-content: flex-end;
  display: flex;
  align-items: baseline;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  img {
    object-fit: contain;

    @media (max-width: 768px) {
      width: 70%;
    }
  }
`;
