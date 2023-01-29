import { DogCard, InfoOnCard } from "../dog-card/dog-card.styled";
import { CatalogGrid } from "./index.styled";
import Space from "../../stories/Space";
import { Button } from "../../stories/Button";

export const All = (
  <CatalogGrid>
    <DogCard className="card--catalog">
      <img src="/images/kira.jpg" alt="" />
      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />
        <InfoOnCard>
          <p>Кира, девочка</p>
          <p>2 года</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <DogCard className="card--catalog">
      <img src="/images/archib.png" alt="" />

      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />

        <InfoOnCard>
          <p>Арчибальд, мальчик</p>
          <p>8 месяцев</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <div className="catalog__right">
      <DogCard className="card--catalog">
        <img src="/images/max.png" alt="" />

        <div className="dogcard__info">
          <img src="./images/med.svg" alt="" className="dogcard__label" />

          <InfoOnCard>
            <p>Макс</p>
          </InfoOnCard>
        </div>
      </DogCard>

      <Space height={35} />

      <Button size="large" label="Посмотреть всех" />
    </div>
  </CatalogGrid>
);

export const Girls = (
  <CatalogGrid>
    <DogCard className="card--catalog">
      <img src="/images/lina.png" alt="" />

      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />

        <InfoOnCard>
          <p>Лина, девочка</p>
          <p>6 месяцев</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <DogCard className="card--catalog">
      <img src="/images/kira.jpg" alt="" />
      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />
        <InfoOnCard>
          <p>Кира, девочка</p>
          <p>2 года</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <div className="catalog__right">
      <DogCard className="card--catalog">
        <img src="/images/tonya.jpg" alt="" />

        <div className="dogcard__info">
          <img src="./images/med.svg" alt="" className="dogcard__label" />

          <InfoOnCard>
            <p>Тоня</p>
          </InfoOnCard>
        </div>
      </DogCard>

      <Space height={35} />

      <Button size="large" label="Посмотреть всех" />
    </div>
  </CatalogGrid>
);

export const Boys = (
  <CatalogGrid>
    <DogCard className="card--catalog">
      <img src="/images/kira.jpg" alt="" />

      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />

        <InfoOnCard>
          <p>Рон, мальчик</p>
          <p>6 месяцев</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <DogCard className="card--catalog">
      <img src="/images/lina.png" alt="" />
      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />
        <InfoOnCard>
          <p>Ник, мальчик</p>
          <p>2 года</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <div className="catalog__right">
      <DogCard className="card--catalog">
        <img src="/images/max.png" alt="" />

        <div className="dogcard__info">
          <img src="./images/med.svg" alt="" className="dogcard__label" />

          <InfoOnCard>
            <p>Макс</p>
          </InfoOnCard>
        </div>
      </DogCard>

      <Space height={35} />

      <Button size="large" label="Посмотреть всех" />
    </div>
  </CatalogGrid>
);

export const Lils = (
  <CatalogGrid>
    <DogCard className="card--catalog">
      <img src="/images/archib.png" alt="" />
      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />
        <InfoOnCard>
          <p>Соня, девочка</p>
          <p>2 года</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <DogCard className="card--catalog">
      <img src="/images/lina.png" alt="" />

      <div className="dogcard__info">
        <img src="./images/med.svg" alt="" className="dogcard__label" />

        <InfoOnCard>
          <p>Рон, девочка</p>
          <p>6 месяцев</p>
        </InfoOnCard>
      </div>
    </DogCard>

    <div className="catalog__right">
      <DogCard className="card--catalog">
        <img src="/images/tonya.jpg" alt="" />

        <div className="dogcard__info">
          <img src="./images/med.svg" alt="" className="dogcard__label" />

          <InfoOnCard>
            <p>Тоня</p>
          </InfoOnCard>
        </div>
      </DogCard>

      <Space height={35} />

      <Button size="large" label="Посмотреть всех" />
    </div>
  </CatalogGrid>
);
