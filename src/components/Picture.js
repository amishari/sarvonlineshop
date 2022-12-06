import "./style.css";
import React from "react";
import ModalImage from "react-modal-image";

export default function Picture(props) {
  let picture = props.picture.picture;
  return (
    <ModalImage
      hideDownload="true"
      imageBackgroundColor="red"
      small={picture}
      large={picture}
      alt={"Code: " + `${props.picture.id}`}
    />
  );
}
