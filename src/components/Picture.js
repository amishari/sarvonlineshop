import "./style.css";
import React from "react";
import ModalImage from "react-modal-image";

export default function Picture(props) {
  let picture = props.picture.picture;
  return (
    // <div className="img-sec">
    // 	<img src={picture} alt="" />
    // </div>
    <ModalImage
      hideDownload="true"
      imageBackgroundColor="red"
      small={picture}
      large={picture}
      alt={"کدمحصول" + `${props.picture.id}`}
    />
  );
}
