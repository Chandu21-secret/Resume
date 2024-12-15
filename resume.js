
// Download resume as PDF
document.body.insertAdjacentHTML('beforeend', '<button id="download-btn">Download Resume</button>');
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
    window.print();
});


