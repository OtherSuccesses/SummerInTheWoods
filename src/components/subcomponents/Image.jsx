import React from 'react';

const Image = ( {imageClass, src, alt} ) => {
	console.log(src);
	return (
		<div className={imageClass}>
			<img src={src} alt={alt}></img>
		</div>
	);
}
export default Image;