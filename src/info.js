import React from "react";
import YouTube from "react-youtube";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardImg,
  CardImgOverlay,
} from "reactstrap";

const Info = () => {
  const opts = {
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      <div>
        <div>
          <center>
            <Card className="m-3">
              <YouTube videoId="jAhjPd4uNFY" opts={opts} />
            </Card>
          </center>
        </div>
        <div>
          <center>
            <Card style={{ width: "100%" }}>
              <CardImg variant="top" src="/comida3.jpg" />
              <CardBody>
                <CardTitle tag="h1">Hola Soy [Emprendedor]</CardTitle>
                <CardText>
                  Minombre es tal [....] y me gusta hacer muchas cosas
                </CardText>
              </CardBody>
            </Card>
          </center>
        </div>
      </div>
    </>
  );
};

export default Info;
