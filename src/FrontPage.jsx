import "./FrontPage.css";

export default function FrontPage() {
  return (
    <>
      <section>
        <div className="backgrounds">
          <div className="backgroundImg firstBackgroundImg" />
          <div className="backgroundImg secondBackgroundImg" />
        </div>
        <div className="frontPageContent">
          <div className="frontPageText">
            <h3>
              Her finner du <b>alt</b> du trenger for å trene<b>.</b>
            </h3>
            <p>
              Enten om du er <b>ny</b> til trening, eller har erfaring og ønsker
              en <b>solid</b> måte og følge opp treningen videre!
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
