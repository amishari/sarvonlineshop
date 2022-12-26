import './style.css';
import React from 'react';
// import ModalImage from "react-modal-image";
import {
	// Magnifier,
	// GlassMagnifier,
	SideBySideMagnifier
	// PictureInPictureMagnifier,
	// MOUSE_ACTIVATION,
	// TOUCH_ACTIVATION
} from 'react-image-magnifiers';

export default function Picture(props) {
	let picture = props.picture.picture;
	return (
		// <ModalImage
		//   hideDownload="true"
		//   imageBackgroundColor="red"
		//   small={picture}
		//   large={picture}
		//   alt={"Code: " + `${props.picture.id}`}
		// />

		// <GlassMagnifier
		//   imageSrc={picture}
		//   imageAlt="Example"
		//   // largeImageSrc={picture} // Optional
		//   allowOverflow="false"
		//   magnifierBorderSize="2"
		//   magnifierBorderColor="rgba(147, 148, 155, 0.63)"
		//   magnifierSize="150%"
		//   square="true"
		//   magnifierBackgroundColor="rgba(18, 154, 4, 0.13)"
		// />
		<SideBySideMagnifier
			imageSrc={picture}
			switchSides
			overlayBoxColor="green"
		/>
	);
}
