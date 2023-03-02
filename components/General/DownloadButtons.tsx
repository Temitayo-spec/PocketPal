import styled from "styled-components";
import Image from "next/image";

const DownloadButtons = () => {
  return (
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
  );
}

export default DownloadButtons;

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