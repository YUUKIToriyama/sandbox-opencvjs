/* app.js */

// read an image on canvas
const fileSelection = document.getElementById("selectFile");
fileSelection.addEventListener("change", () => {
	updateImage();
})
const updateImage = () => {
	const selectedFiles = fileSelection.files;
	if (selectedFiles.length === 0) {
		alert("画像が選択されていません");
	} else {
		const image = new Image();
		image.src = URL.createObjectURL(selectedFiles[0]);
		image.onload = () => {
			let canvas = document.getElementById("canvasInput");
			let ctx = canvas.getContext("2d");
			ctx.drawImage(image, 0, 0);
		}
	}
}

/*
// read an image
//let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

let src = cv.matFromImageData(imgData);

// display an image
let dst = new cv.Mat();
cv.cvtColor(src, dst, cv.COLOR_BGR2RGBA);
cv.imshow("canvasOutput", dst);
*/
