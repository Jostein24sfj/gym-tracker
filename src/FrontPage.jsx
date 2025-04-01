import "./FrontPage.css";

export default function FrontPage() {
  return (
    <>
      <section>
        <div className="backgrounds">
          <div
            className="backgroundImg firstBackgroundImg"
            alt="Bilde av en vektskive"
          />
          <div
            className="backgroundImg secondBackgroundImg"
            alt="Bilde av en vektskive"
          />
        </div>
        <div className="frontPageContent">
          <div className="frontPageText">
            <h3>
              Her finner du <b>alt</b> du trenger for trene.
            </h3>
            <p>
              Enten om du er ny til trening, eller har erfaring og ønsker en
              solid måte og følge opp treningen videre!😎
            </p>
          </div>
          <img
            id="weightPlate"
            className="weightPlate"
            src="./titanLifeVekt.png"
            alt="Bilde av en vektskive"
          />
        </div>
      </section>
    </>
  );
}
