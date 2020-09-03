import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import laugh from "./groom-laugh.jpg";

function About() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="about-container">
        <h1>About</h1>
        <img className="about-img" src={laugh} alt="groom laughing" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
          platea dictumst vestibulum rhoncus est. Adipiscing enim eu turpis
          egestas. Faucibus ornare suspendisse sed nisi lacus sed viverra
          tellus. Urna nec tincidunt praesent semper feugiat nibh sed. Quis
          imperdiet massa tincidunt nunc. Lectus proin nibh nisl condimentum id
          venenatis. Imperdiet massa tincidunt nunc pulvinar. Et malesuada fames
          ac turpis. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
          Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
          nec. Et tortor consequat id porta nibh venenatis cras.
        </p>
        <p>
          Sed ullamcorper morbi tincidunt ornare. Et molestie ac feugiat sed
          lectus vestibulum. Vitae congue mauris rhoncus aenean vel elit
          scelerisque mauris. Risus in hendrerit gravida rutrum quisque non
          tellus. A arcu cursus vitae congue. Vitae tempus quam pellentesque nec
          nam. Morbi leo urna molestie at elementum. Quis auctor elit sed
          vulputate mi sit amet mauris commodo. At elementum eu facilisis sed
          odio morbi quis commodo odio. Orci nulla pellentesque dignissim enim
          sit amet venenatis urna cursus. Sociis natoque penatibus et magnis dis
          parturient montes nascetur ridiculus. Adipiscing at in tellus integer
          feugiat scelerisque varius. Semper viverra nam libero justo laoreet
          sit amet cursus.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
