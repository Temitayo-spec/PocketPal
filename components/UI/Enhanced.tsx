import styled from 'styled-components';

const Enhanced = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Enhanced financial journey at every step</h1>
          <p>
            Our platform provides personalized financial guidance, tailored
            notifications, optimized security measures, and virtual
            consultations with experts. We’re committed to enhancing your
            financial journey at every step, so you can achieve your goals with
            ease
          </p>
        </Header>
        <CardContainer>
          <Card>
            <h2>Marketing</h2>
            <p>
              Stay in the know with our marketing messages. We’ll keep you
              up-to-date on the latest product features, financial news, and
              insider tips to help you reach your goals.
            </p>
          </Card>
          <Card>
            <h2>Customer Support</h2>
            <p>
              Get instant support with our push notifications. Whether you need
              help setting up your account or have a question about a
              transaction, our customer support team is just a notification
              away.
            </p>
          </Card>
          <Card>
            <h2>Account Security</h2>
            <p>
              Stay Informed with our delivery alerts. We’ll keep you in the loop
              about any account activity, so you can stay on top of your
              finances and detect any fraudulent activity.
            </p>
          </Card>
          <Card>
            <h2>Sales</h2>
            <p>
              Stay up-to-date with our app updates. We’re constantly improving
              our platform to provide you with the best possible experience
            </p>
          </Card>
        </CardContainer>
      </Inner>
    </Wrapper>
  );
};

export default Enhanced;

const Wrapper = styled.div`
  background: #fcfaed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
`;

const Inner = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3em;
  margin: 2em 0;
  h1 {
    font-family: var(--font-family-clash-display);
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-xxxl);
    line-height: 39px;
    color: #1e1e1e;

    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }
  p {
    width: 100%;
    margin-left: auto;
    font-family: var(--font-family-lufga);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-md);
    line-height: 21px;
    color: var(--color-tertiary);

    @media (max-width: 768px) {
      font-size: var(--font-size-sm);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const CardContainer = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;
  justify-items: center;
  align-items: center;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 90%;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcfaed;
  border: 2px solid var(--color-tertiary);
  border-radius: 25px;
  padding: 2em;
  position: relative;
  cursor: pointer;

  h2 {
    font-family: var(--font-family-clash-display);
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-xxxl);
    line-height: 39px;
    color: var(--color-tertiary);
    margin-bottom: 0.5em;

    @media (max-width: 768px) {
      font-size: var(--font-size-xxl);
    }
  }
  p {
    font-family: var(--font-family-lufga);
    font-size: 1.2em;
    font-weight: 400;
    color: var(--color-tertiary);
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: var(--font-size-sm);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-tertiary);
    border: 2px solid var(--color-tertiary);
    border-radius: 25px;
    z-index: -1;
    transform-origin: center;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      top: 10px;
      left: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 1em;
  }
`;
