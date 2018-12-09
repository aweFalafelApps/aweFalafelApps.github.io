function riInit() {
    window.mdc.autoInit();
}
function riSaveImage(svg, canvas) {
    var domUrl = window.URL || window.webkitURL || window;
    var url = domUrl.createObjectURL(new Blob([(new XMLSerializer()).serializeToString(svg)], { type: 'image/svg+xml;charset=utf-8' }));
    var img = new Image(1080, 1080);
    img.onload = function () {
        canvas.getContext('2d').drawImage(img, 0, 0);
        domUrl.revokeObjectURL(url);
        download(canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    };
    img.src = url;
}
function download(imgUri) {
    var a = document.createElement('a');
    a.setAttribute('download', 'randomimage.png');
    a.setAttribute('href', imgUri);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    }));
}
//# sourceMappingURL=randomimage.js.map