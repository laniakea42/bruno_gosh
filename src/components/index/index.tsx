import React, { useState } from "react";

import { Button } from "../../stories/Button";
import Header from "../../stories/Header";
import Space from "../../stories/Space";
import { TabHeading } from "../../stories/Tab.styled";
import { TabItemBody } from "../../stories/tab-item-body";
import { TabItemUI } from "../../stories/TabItem.styled";
import { All, Boys, Girls, Lils } from "./catalog";
import {
  Container,
  CtsRow,
  FirstBlock,
  GalleryGrid,
  SocialsRow,
  Subtitle,
  VetGrid,
  Wrapper,
} from "./index.styled";

interface catalogProps {
  title: string;
  contents: JSX.Element;
}

const IndexComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const catalogTabs: catalogProps[] = [
    { title: "Все", contents: All },
    { title: "Девочки", contents: Girls },
    { title: "Мальчики", contents: Boys },
    { title: "Щенки", contents: Lils },
    { title: "Породистые", contents: All },
    { title: "Дворняги", contents: Boys },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        <FirstBlock>
          <Container>
            <h1 className="title">
              <span className="title__span">Приют</span>
              Большой выбор собак, ждущих свою семью
            </h1>
            <Space height={66} />
            <div className="action">
              <img src="/images/topdoggens.png" alt="" />
              <Button
                primary
                size="medium"
                dashed
                label="Каталог"
                cn="action__btn"
              />
            </div>

            <SocialsRow>
              <a href="#" target="_blank">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 12.5C16.5 13.2911 16.2654 14.0645 15.8259 14.7223C15.3864 15.3801 14.7616 15.8928 14.0307 16.1955C13.2998 16.4983 12.4956 16.5775 11.7196 16.4231C10.9437 16.2688 10.231 15.8878 9.67157 15.3284C9.11216 14.769 8.7312 14.0563 8.57686 13.2804C8.42252 12.5044 8.50173 11.7002 8.80448 10.9693C9.10723 10.2384 9.61992 9.61365 10.2777 9.17412C10.9355 8.7346 11.7089 8.5 12.5 8.5C13.5599 8.5033 14.5754 8.92578 15.3248 9.67521C16.0742 10.4246 16.4967 11.4401 16.5 12.5ZM25 7V18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25H7C5.14348 25 3.36301 24.2625 2.05025 22.9497C0.737498 21.637 0 19.8565 0 18V7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0H18C19.8565 0 21.637 0.737498 22.9497 2.05025C24.2625 3.36301 25 5.14348 25 7ZM18.5 12.5C18.5 11.3133 18.1481 10.1533 17.4888 9.16658C16.8295 8.17988 15.8925 7.41085 14.7961 6.95672C13.6997 6.5026 12.4933 6.38378 11.3295 6.61529C10.1656 6.8468 9.09647 7.41824 8.25736 8.25736C7.41824 9.09647 6.8468 10.1656 6.61529 11.3295C6.38378 12.4933 6.5026 13.6997 6.95672 14.7961C7.41085 15.8925 8.17988 16.8295 9.16658 17.4888C10.1533 18.1481 11.3133 18.5 12.5 18.5C14.0913 18.5 15.6174 17.8679 16.7426 16.7426C17.8679 15.6174 18.5 14.0913 18.5 12.5ZM20.5 6C20.5 5.70333 20.412 5.41332 20.2472 5.16665C20.0824 4.91997 19.8481 4.72771 19.574 4.61418C19.2999 4.50065 18.9983 4.47094 18.7074 4.52882C18.4164 4.5867 18.1491 4.72956 17.9393 4.93934C17.7296 5.14912 17.5867 5.41639 17.5288 5.70736C17.4709 5.99834 17.5007 6.29994 17.6142 6.57403C17.7277 6.84811 17.92 7.08238 18.1666 7.2472C18.4133 7.41203 18.7033 7.5 19 7.5C19.3978 7.5 19.7794 7.34196 20.0607 7.06066C20.342 6.77936 20.5 6.39782 20.5 6Z"
                    fill="#B5CFDD"
                    fill-opacity="0.39"
                  />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg
                  width="37"
                  height="22"
                  viewBox="0 0 37 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.129 1.52778C36.4034 0.666111 36.129 0.039722 34.9149 0.039722H30.8781C29.8598 0.039722 29.3896 0.588194 29.1152 1.17486C29.1152 1.17486 27.0386 6.18597 24.1387 9.43479C23.1983 10.3744 22.7674 10.6876 22.2578 10.6876C21.9834 10.6876 21.6304 10.3744 21.6304 9.51347V1.48729C21.6304 0.469792 21.3174 0 20.4549 0H14.1063C13.4788 0 13.0872 0.469792 13.0872 0.939584C13.0872 1.91813 14.5372 2.1534 14.6936 4.89347V10.8472C14.6936 12.139 14.4624 12.375 13.949 12.375C12.5777 12.375 9.24693 7.32493 7.24893 1.57056C6.86043 0.430833 6.46576 0 5.44672 0H1.37131C0.195792 0 0 0.547708 0 1.13514C0 2.19236 1.37131 7.5159 6.38713 14.562C9.71791 19.3745 14.4593 21.961 18.7305 21.961C21.3174 21.961 21.6304 21.3736 21.6304 20.3951V16.7544C21.6304 15.5803 21.8655 15.3847 22.6887 15.3847C23.2761 15.3847 24.3345 15.6972 26.7248 18.0072C29.4675 20.7472 29.9377 22 31.4662 22H35.5023C36.6778 22 37.2267 21.4126 36.9129 20.2774C36.5607 19.1423 35.2279 17.4984 33.5035 15.5413C32.5631 14.4459 31.1525 13.2321 30.7216 12.6447C30.1342 11.8617 30.2907 11.5485 30.7216 10.8442C30.6823 10.8442 35.6203 3.87597 36.129 1.52472"
                    fill="#B5CFDD"
                    fill-opacity="0.39"
                  />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg
                  width="29"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10962 24C20.0535 24 26.0402 14.7642 26.0402 6.76892C26.0402 6.51047 26.0402 6.24833 26.0293 5.98988C27.1949 5.13052 28.2008 4.06657 29 2.8479C27.9113 3.33683 26.7575 3.65906 25.5762 3.80415C26.8205 3.0466 27.7525 1.85466 28.1989 0.449871C27.0298 1.15529 25.7502 1.6505 24.4162 1.91379C23.5193 0.940965 22.3325 0.296497 21.0397 0.0802122C19.7468 -0.136072 18.4199 0.0878992 17.2647 0.717433C16.1094 1.34697 15.1902 2.34693 14.6494 3.56243C14.1087 4.77793 13.9765 6.14114 14.2734 7.44088C11.9077 7.32006 9.59323 6.69409 7.48027 5.60358C5.3673 4.51307 3.50299 2.98237 2.00825 1.11076C1.24943 2.44561 1.01785 4.02457 1.36055 5.52701C1.70324 7.02946 2.59451 8.34274 3.85337 9.20017C2.91004 9.16753 1.98744 8.90953 1.16 8.44698V8.53006C1.16163 9.92841 1.63724 11.2833 2.50646 12.3657C3.37567 13.4481 4.58517 14.1917 5.9305 14.4707C5.41985 14.6139 4.89235 14.6854 4.36269 14.683C3.98928 14.6841 3.61663 14.6489 3.24981 14.5777C3.63005 15.7815 4.37043 16.8339 5.36726 17.5877C6.36409 18.3414 7.56743 18.7588 8.80875 18.7812C6.70001 20.4681 4.09516 21.383 1.41375 21.3786C0.941269 21.3806 0.469117 21.3529 0 21.2955C2.7215 23.0627 5.8821 24.001 9.10962 24Z"
                    fill="#B5CFDD"
                    fill-opacity="0.39"
                  />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg
                  width="35"
                  height="24"
                  viewBox="0 0 35 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6127 0H17.8074C19.6056 0.00640626 28.7171 0.0704693 31.1738 0.715366C31.9165 0.912185 32.5933 1.29582 33.1365 1.82794C33.6797 2.36005 34.0703 3.02201 34.2693 3.74766C34.4903 4.55912 34.6456 5.63324 34.7506 6.74153L34.7725 6.96361L34.8206 7.51882L34.8381 7.7409C34.9803 9.69268 34.9978 11.5206 35 11.9199V12.0801C34.9978 12.4944 34.9781 14.4461 34.8206 16.479L34.8031 16.7033L34.7834 16.9254C34.674 18.1468 34.5122 19.3597 34.2693 20.2523C34.0709 20.9783 33.6805 21.6406 33.1372 22.1728C32.5939 22.705 31.9168 23.0884 31.1738 23.2846C28.6362 23.9509 18.9909 23.9979 17.6542 24H17.3436C16.6676 24 13.8718 23.9872 10.9404 23.889L10.5685 23.8761L10.3781 23.8676L10.0041 23.8527L9.62998 23.8377C7.2017 23.7331 4.88937 23.5644 3.82399 23.2825C3.08126 23.0865 2.40436 22.7033 1.86108 22.1715C1.3178 21.6397 0.927223 20.9779 0.728483 20.2523C0.485655 19.3619 0.32377 18.1468 0.214388 16.9254L0.196887 16.7011L0.179386 16.479C0.0714211 15.0321 0.0115942 13.5821 0 12.1313L0 11.8687C0.00437527 11.4096 0.0218764 9.82294 0.140009 8.07189L0.155322 7.85194L0.161885 7.7409L0.179386 7.51882L0.227514 6.96361L0.249391 6.74153C0.354397 5.63324 0.509719 4.55699 0.730671 3.74766C0.929075 3.02172 1.3195 2.35945 1.8628 1.82724C2.4061 1.29503 3.08319 0.911595 3.82618 0.715366C4.89156 0.437762 7.20389 0.266928 9.63216 0.160156L10.0041 0.145209L10.3803 0.132396L10.5685 0.12599L10.9426 0.111042C13.0246 0.045644 15.1074 0.00933791 17.1905 0.00213552H17.6127V0ZM14.0009 6.8547V17.1432L23.0949 12.0011L14.0009 6.8547Z"
                    fill="#B5CFDD"
                    fill-opacity="0.39"
                  />
                </svg>
              </a>
            </SocialsRow>
          </Container>

          <img
            src="/images/pad-1.svg"
            alt=""
            className="decoration decoration--pad"
          />
          <img
            src="/images/ball-1.svg"
            alt=""
            className="decoration decoration--ball"
          />
          <img
            src="/images/bones-1.svg"
            alt=""
            className="decoration decoration--bones"
          />
        </FirstBlock>

        <Space height={122} />

        <Container>
          <h2 className="title">
            <span className="title__span title__span--iconed">
              <svg
                width="49"
                height="44"
                viewBox="0 0 49 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="paw"
              >
                <path
                  d="M15.5939 0.0367408C18.4732 -0.378462 21.5232 2.7722 22.4016 7.11961C23.28 11.4426 21.694 15.3016 18.8148 15.7412C15.9599 16.1808 12.8855 13.0301 11.9827 8.68273C11.0799 4.35974 12.7147 0.500791 15.5939 0.0367408ZM33.0401 0.0367408C35.9437 0.500791 37.5541 4.35974 36.7001 8.68273C35.7729 13.0301 32.7228 16.1808 29.8436 15.7412C26.94 15.3016 25.354 11.4426 26.2568 7.11961C27.1352 2.7722 30.1852 -0.378462 33.0401 0.0367408ZM2.53987 11.2716C5.32148 10.0749 9.10351 12.2486 11.0799 16.0343C12.9343 19.8932 12.2999 23.9475 9.54271 25.1443C6.78549 26.3411 3.02787 24.1918 1.10026 20.3573C-0.827355 16.5227 -0.144151 12.444 2.53987 11.2716ZM46.4601 11.2716C49.1441 12.444 49.8274 16.5227 47.8997 20.3573C45.9721 24.1918 42.2145 26.3411 39.4573 25.1443C36.7001 23.9475 36.0657 19.8932 37.9201 16.0343C39.8965 12.2486 43.6785 10.0749 46.4601 11.2716ZM42.3853 37.6004C42.4829 39.8962 40.7261 42.4363 38.6277 43.3888C34.2601 45.3916 29.0872 41.2395 24.2316 41.2395C19.376 41.2395 14.1543 45.5625 9.85991 43.3888C7.4199 42.1921 5.73628 39.017 6.05349 36.3792C6.49269 32.7401 10.8603 30.7862 13.4467 28.124C16.8872 24.6803 19.3272 18.208 24.2316 18.208C29.1116 18.208 31.698 24.5826 34.9921 28.124C37.7005 31.1037 42.2145 33.6193 42.3853 37.6004Z"
                  fill="#B5CFDD"
                />
              </svg>
              Питомцы
            </span>
            выберите подходящего себе друга в дар, все наши собаки воспитанные и
            дружелюбные
          </h2>

          <Space height={44} />

          <TabHeading>
            {catalogTabs.map((item, key) => {
              return (
                <TabItemUI
                  key={key}
                  className={key == activeTab ? "tab__item--active" : ""}
                  onClick={() => setActiveTab(key)}
                >
                  {item.title}
                </TabItemUI>
              );
            })}
          </TabHeading>

          {catalogTabs.map((item, key) => {
            return (
              <TabItemBody
                key={key}
                className={key == activeTab ? "tab__item--active" : ""}
              >
                {item.contents}
              </TabItemBody>
            );
          })}
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <Space height={130} />

          <h2 className="title">
            <span className="title__span title__span--iconed">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ball"
              >
                <path
                  d="M45.3538 25.2854H46.105C46.2329 25.2875 46.3589 25.3166 46.4747 25.3706C46.5906 25.4246 46.6938 25.5023 46.7775 25.5987C46.8613 25.6952 46.9238 25.8081 46.9608 25.9302C46.9979 26.0523 47.0088 26.1809 46.9928 26.3075C46.3262 31.7056 43.8166 36.71 39.8862 40.4786C35.9559 44.2472 30.8446 46.5502 25.4122 47C25.1726 44.2413 25.51 41.463 26.4031 38.8412C27.2962 36.2195 28.7254 33.8115 30.6003 31.7699C32.4752 29.7283 34.7548 28.0977 37.2945 26.9814C39.8342 25.8652 42.5786 25.2876 45.3538 25.2854ZM28.622 28.5789C30.8103 26.3736 33.4169 24.6253 36.2896 23.4358C39.1623 22.2464 42.2436 21.6397 45.3538 21.6511H46.0595C46.189 21.655 46.3179 21.6312 46.4375 21.5814C46.5571 21.5316 46.6647 21.4569 46.7531 21.3623C46.8414 21.2677 46.9085 21.1554 46.9499 21.0328C46.9912 20.9103 47.0059 20.7803 46.9928 20.6517C46.3581 15.3955 43.974 10.5039 40.2221 6.76037C36.4703 3.01682 31.5679 0.637891 26.3001 0.00459571C26.1711 -0.00839402 26.0409 0.00622963 25.9181 0.0474896C25.7952 0.0887495 25.6826 0.155695 25.5878 0.243851C25.493 0.332007 25.4181 0.439342 25.3682 0.558683C25.3183 0.678023 25.2945 0.806617 25.2984 0.935872C25.401 4.15773 24.8398 7.36631 23.6494 10.363C22.4591 13.3597 20.6649 16.0807 18.3781 18.3576C16.1898 20.5628 13.5832 22.3112 10.7105 23.5006C7.83781 24.6901 4.75647 25.2968 1.64628 25.2854H0.940582C0.811041 25.2815 0.682161 25.3052 0.562557 25.355C0.442953 25.4048 0.33538 25.4795 0.247029 25.5741C0.158678 25.6687 0.0915842 25.7811 0.0502329 25.9036C0.00888162 26.0262 -0.00577482 26.1561 0.00724365 26.2848C0.64194 31.5409 3.02613 36.4325 6.77798 40.1761C10.5298 43.9196 15.4322 46.2986 20.7 46.9319C20.829 46.9448 20.9592 46.9302 21.082 46.889C21.2049 46.8477 21.3174 46.7808 21.4123 46.6926C21.5071 46.6044 21.5819 46.4971 21.6318 46.3778C21.6818 46.2584 21.7056 46.1298 21.7017 46.0006C21.599 42.7787 22.1603 39.5701 23.3507 36.5735C24.541 33.5768 26.3352 30.8558 28.622 28.5789ZM15.8057 15.7909C17.7644 13.844 19.2959 11.512 20.3031 8.94292C21.3102 6.37388 21.771 3.62395 21.6561 0.86773C21.6478 0.744054 21.6142 0.623382 21.5575 0.513139C21.5007 0.402897 21.4219 0.305414 21.3259 0.22669C21.2299 0.147967 21.1189 0.0896674 20.9995 0.0553788C20.8801 0.0210902 20.755 0.0115378 20.6317 0.0273094C15.385 0.667835 10.5039 3.04193 6.76623 6.77137C3.02853 10.5008 0.649187 15.3711 0.00724365 20.6063C-0.00862153 20.731 0.00164046 20.8577 0.0373794 20.9783C0.0731184 21.0989 0.133556 21.2107 0.214868 21.3068C0.296181 21.4029 0.396596 21.4811 0.509759 21.5364C0.622923 21.5918 0.74637 21.6231 0.872289 21.6284C3.63051 21.737 6.38139 21.2745 8.95156 20.2698C11.5217 19.2651 13.8555 17.7401 15.8057 15.7909Z"
                  fill="#C4630A"
                />
              </svg>
              Галерея
            </span>
            фотографии наших замечательных четвероногих
          </h2>

          <Space height={80} />

          <GalleryGrid>
            <img src="./images/dog.jpg" alt="" />
            <img src="./images/dog3.jpg" alt="" />
            <img src="./images/lina.png" alt="" className="gallery__high" />
            <img src="./images/tonya.jpg" alt="" />
            <img src="./images/dog4.jpg" alt="" className="gallery__high" />
            <img src="./images/dog2.jpg" alt="" />
            <img src="./images/dog5.jpg" alt="" />
          </GalleryGrid>

          <Space height={40} />
          <Button size="medium" primary label="Показать еще" cn="centered" />
        </Container>

        <img
          src="./images/g_bone.svg"
          alt=""
          className="gallery__decoration gallery__decoration--boneleft"
        />
        <img
          src="./images/g_paw.svg"
          alt=""
          className="gallery__decoration gallery__decoration--pawleft"
        />
        <img
          src="./images/g_paw-r.svg"
          alt=""
          className="gallery__decoration gallery__decoration--pawright"
        />
        <img
          src="./images/g_ball.svg"
          alt=""
          className="gallery__decoration gallery__decoration--ballright"
        />
      </Wrapper>

      <Space height={130} />

      <Wrapper>
        <Container>
          <h2 className="title">
            <span className="title__span title__span--iconed">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="paw"
              >
                <path
                  d="M46.2934 19.4015L25.0953 0.53074C24.1532 -0.176913 22.9755 -0.176913 22.0334 0.53074L0.835298 19.4015C-0.106839 20.345 -0.342373 21.7604 0.599764 22.7039C1.5419 23.6474 2.95511 23.8833 3.89724 22.9398L4.60384 21.9962V44.6412C4.60384 46.0565 5.54598 47 6.95919 47H39.934C41.3472 47 42.2893 46.0565 42.2893 44.6412V21.9962L42.9959 22.7039C43.938 23.6474 45.3513 23.4115 46.2934 22.468C47.2355 21.7604 47.2355 20.1092 46.2934 19.4015ZM28.1573 30.4881H25.8019V32.8469C25.8019 34.2622 24.8598 35.2058 23.4466 35.2058C22.0334 35.2058 21.0912 34.2622 21.0912 32.8469V30.4881H18.7359C17.3227 30.4881 16.3806 29.5445 16.3806 28.1292C16.3806 26.7139 17.3227 25.7704 18.7359 25.7704H21.0912V23.4115C21.0912 21.9962 22.0334 21.0527 23.4466 21.0527C24.8598 21.0527 25.8019 21.9962 25.8019 23.4115V25.7704H28.1573C29.5705 25.7704 30.5126 26.7139 30.5126 28.1292C30.5126 29.5445 29.5705 30.4881 28.1573 30.4881Z"
                  fill="#B5CFDD"
                />
              </svg>
              Ветеринарная клиника
            </span>
            у нас работают специалисты, готовые помочь вашим питомцам в любое
            время
          </h2>

          <Space height={26} />
          <Subtitle>
            Врачи работают круглосуточно и без выходных. Оказываем ветеринарную
            помощь, живые или онлайн-консультации.
          </Subtitle>
          <Space height={47} />

          <VetGrid>
            <img src="./images/vet-dogen.png" alt="" />
            <div className="vet__container">
              <CtsRow>
                <img
                  src="./images/location-mark.svg"
                  alt=""
                  className="cts__location"
                />
                <p>Москва, Таллинский проезд, 99</p>
              </CtsRow>
              <CtsRow>
                <img src="./images/phone.svg" alt="" />
                <p>
                  <a href="tel:83890503553" className="cts__phone">
                    8 (389) 050-35-53
                  </a>
                </p>
              </CtsRow>

              <Button size="medium" label="Звонок" cn="cts__action" />

              <img src="./images/vet.svg" alt="" className="vet__picture" />
            </div>
          </VetGrid>
        </Container>
      </Wrapper>

      <Space height={130} />
    </>
  );
};

export default IndexComponent;
