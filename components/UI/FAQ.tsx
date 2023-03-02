import Image from 'next/image';
import styled from 'styled-components';
import faq from '@/public/svgs/FAQ.svg';
import one from '@/public/svgs/1.svg';
import two from '@/public/svgs/2.svg';
import three from '@/public/svgs/3.svg';

const FAQ = () => {
  return (
    <Wrapper>
      <hr />
      <Inner>
        <LHS>
          <h1>FAQ&apos;s</h1>
          <Image src={faq} alt="FAQ" />
        </LHS>
        <RHS>
          <Div>
            <Image src={one} alt="1" />
            <div>
              <h2>Is my personal information safe and secure?</h2>
              <p>
                Yes, we take the security of your personal information very
                seriously. Our platform utilizes advanced security measures to
                protect your data and prevent unauthorized access
              </p>
            </div>
          </Div>
          <Div>
            <Image src={two} alt="2" />
            <div>
              <h2>Can I access my account from multiple devices?</h2>
              <p>
                Yes, you can access your account from any device with an
                internet connection
              </p>
            </div>
          </Div>
          <Div>
            <Image src={three} alt="3" />
            <div>
              <h2>What kind of financial guidance do you provide?</h2>
              <p>
                Our financial guidance is tailored to your specific needs and
                goals. Whether you&apos;re looking to save for a major purchase
                or invest for the future, we’ll provide personalized advice to
                help you achieve your objectives
              </p>
            </div>
          </Div>
        </RHS>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled.section`
  background: #fce37a;
  position: relative;
  height: 100%;
  padding: 4em 0 15em;

  hr {
    border: 1px solid #1e1e1e;
    margin-bottom: 2em;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LHS = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2em;

  h1 {
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-semi-bold);
    font-family: var(--font-family-clash-display);
    color: var(--color--tertiary);

    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }

  img {
    align-self: flex-end;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 425px) {
    img {
      width: 100%;
    }
  }
`;

const RHS = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 8em;

  @media (max-width: 768px) {
    margin-top: 1em;
    width: 100%;
    align-items: center;
    gap: 4em;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100%;

  img {
    align-self: flex-end;
    object-fit: contain;

    @media (max-width: 768px) {
      align-self: center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    height: 100%;

    h2 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-family-lufga);
      color: var(--color--tertiary);

      @media (max-width: 768px) {
        font-size: var(--font-size-md);
      }
    }

    p {
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-medium);
      font-family: var(--font-family-lufga);
      color: var(--color--tertiary);

      @media (max-width: 768px) {
        font-size: var(--font-size-sm);
      }
    }
  }
`;
