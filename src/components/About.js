import React from "react";
import "../App.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import laugh from "../images/groom-laugh.jpg";

function About() {
  return (
    <div>
      <Header />
      <Nav />
      <h1>About</h1>
      <img src={laugh} alt="groom laughing" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Habitasse platea
        dictumst vestibulum rhoncus est. Adipiscing enim eu turpis egestas.
        Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Urna nec
        tincidunt praesent semper feugiat nibh sed. Quis imperdiet massa
        tincidunt nunc. Lectus proin nibh nisl condimentum id venenatis.
        Imperdiet massa tincidunt nunc pulvinar. Et malesuada fames ac turpis.
        Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate sapien nec. Et tortor
        consequat id porta nibh venenatis cras.
      </p>
      <p>
        Sed ullamcorper morbi tincidunt ornare. Et molestie ac feugiat sed
        lectus vestibulum. Vitae congue mauris rhoncus aenean vel elit
        scelerisque mauris. Risus in hendrerit gravida rutrum quisque non
        tellus. A arcu cursus vitae congue. Vitae tempus quam pellentesque nec
        nam. Morbi leo urna molestie at elementum. Quis auctor elit sed
        vulputate mi sit amet mauris commodo. At elementum eu facilisis sed odio
        morbi quis commodo odio. Orci nulla pellentesque dignissim enim sit amet
        venenatis urna cursus. Sociis natoque penatibus et magnis dis parturient
        montes nascetur ridiculus. Adipiscing at in tellus integer feugiat
        scelerisque varius. Semper viverra nam libero justo laoreet sit amet
        cursus.
      </p>
      <p>
        Quam pellentesque nec nam aliquam. Neque convallis a cras semper auctor
        neque vitae tempus quam. Praesent elementum facilisis leo vel fringilla.
        Tristique risus nec feugiat in fermentum posuere urna. Eu sem integer
        vitae justo eget magna. Est ullamcorper eget nulla facilisi etiam
        dignissim diam quis enim. Diam sit amet nisl suscipit adipiscing
        bibendum est ultricies integer. A pellentesque sit amet porttitor eget
        dolor morbi. Mattis pellentesque id nibh tortor. Pellentesque habitant
        morbi tristique senectus. Pulvinar pellentesque habitant morbi
        tristique. Pretium lectus quam id leo in vitae. Quis auctor elit sed
        vulputate mi sit. In tellus integer feugiat scelerisque varius morbi
        enim. Consequat nisl vel pretium lectus quam id leo in. Arcu dictum
        varius duis at consectetur lorem donec massa sapien.
      </p>
      <Footer />
    </div>
  );
}

export default About;
