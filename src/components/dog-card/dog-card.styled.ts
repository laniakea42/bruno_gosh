import styled from "styled-components";

export const InfoOnCard = styled.a`
  background: rgba(207, 207, 207, 0.27);
  backdrop-filter: blur(11.5px);
  border-radius: 35px;
  position: relative;
  padding: 24px 60px 26px 32px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  p,
  div {
    color: #fff;
    & + p,
    & + div {
      margin-top: 6px;
    }
  }

  &::before {
    content: " ";
    position: absolute;
    top: 50%;
    right: 25px;
    width: 12px;
    height: 21px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: 200ms ease-in;
    transform: translateY(-50%);
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='21' viewBox='0 0 12 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.415704 20.585C0.138568 20.3083 0 19.9807 0 19.6022C0 19.2245 0.138568 18.8972 0.415704 18.6206L8.5358 10.5138L0.387991 2.37945C0.12933 2.12121 0 1.79842 0 1.41107C0 1.02372 0.138568 0.6917 0.415704 0.41502C0.692841 0.13834 1.02097 0 1.40009 0C1.77848 0 2.10624 0.13834 2.38337 0.41502L11.6952 9.73913C11.806 9.8498 11.8847 9.9697 11.9313 10.0988C11.9771 10.2279 12 10.3663 12 10.5138C12 10.6614 11.9771 10.7997 11.9313 10.9289C11.8847 11.058 11.806 11.1779 11.6952 11.2885L2.35566 20.6126C2.097 20.8709 1.77848 21 1.40009 21C1.02097 21 0.692841 20.8617 0.415704 20.585Z' fill='white'/%3E%3C/svg%3E%0A");
  }
  &:hover::before {
    transform: translate(4px, -50%);
  }
`;

export const DogCard = styled.div`
  border-radius: 55px;
  overflow: hidden;
  position: relative;

  .dogcard__info {
    padding: 38px 22px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    .dogcard__label {
      width: 36px;
      height: 36px;
      object-fit: contain;
      object-position: left center;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 200ms ease-in;
    transform-origin: 50% 50%;
  }
  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;
