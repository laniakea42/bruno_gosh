import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 200px;

  .title {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 41.5px;
    line-height: 148%;
    text-transform: uppercase;
    color: #3e3b2d;
    &__span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      display: block;
      margin-bottom: 24px;
      text-transform: none;
      &--iconed {
        display: flex;
        align-items: center;
        gap: 28px;
        img {
          width: 50px;
          height: 44px;
          object-fit: contain;
          object-position: left center;
        }
      }
    }
  }

  .paw path {
    transition: 200ms ease-in;
    &:hover {
      fill: ${({ theme }) => theme.color?.primary ?? "#C4630A"};
    }
  }

  .ball path {
    transition: 200ms ease-in;
    &:hover {
      fill: ${({ theme }) => theme.color?.secondary ?? "#B5CFDD"};
    }
  }
  .centered {
    margin: 0 auto;
  }

  .gallery__decoration {
    position: absolute;
    &--boneleft {
      top: 505px;
      left: 50px;
    }
    &--pawleft {
      top: 656px;
      left: -4px;
    }
    &--pawright {
      top: 642px;
      right: -4px;
    }
    &--ballright {
      top: 948px;
      right: 0px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 4;
`;

export const SocialsRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  transform: translateY(-40px);
  path {
    transition: 200ms ease-in;
  }
  a:hover path {
    fill-opacity: 1;
  }
`;

export const FirstBlock = styled.div`
  position: relative;
  .action {
    position: relative;
    img {
      object-fit: contain;
      object-position: center;
      width: calc(100% + 60px);
      margin-left: -60px;
    }
    &__btn {
      position: absolute;
      left: 18.5%;
      bottom: 20px;
    }
  }
  .decoration {
    position: absolute;
    object-fit: contain;

    &--pad {
      left: 0;
      top: -136px;
      width: 185px;
      height: 185px;
      object-position: left center;
    }
    &--ball {
      left: 0;
      top: 15%;
      width: 65px;
      height: 65px;
      object-position: left center;
    }
    &--bones {
      right: 0;
      top: -18px;
      width: 155px;
      height: 135px;
      object-position: right center;
    }
  }
  ${Container} {
    z-index: 4;
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  & > .card--catalog {
    height: 508px;
  }
  .catalog__right .card--catalog {
    height: 288px;
    box-sizing: border-box;
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 250px);
  gap: 30px;
  height: 825px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 40px;
    &.gallery__high {
      grid-row: span 2;
    }
  }
`;
