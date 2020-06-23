// function print() {
// 		const filename  = 'ThisIsYourPDFFilename.pdf';

// 		html2canvas(document.querySelector('#nodeToRenderAsPDF')).then(canvas => {
// 			let pdf = new jsPDF('p', 'mm', 'a4');
// 			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
// 			pdf.save(filename);
// 		});
// 	}
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
export function print(quality = 1,documentObject) {
		const filename  = 'mert.pdf';

		html2canvas(documentObject, 
								{scale: quality}
						 ).then(canvas => {
			document.body.appendChild(canvas);
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save(filename);
		});
	}