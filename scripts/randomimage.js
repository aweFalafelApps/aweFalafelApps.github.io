function riInit() {
    window.mdc.autoInit();
}
function riSaveImage(svg, canvas) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var domUrl = window.URL || window.webkitURL || window;
    var url = domUrl.createObjectURL(new Blob([(new XMLSerializer()).serializeToString(svg)], { type: 'image/svg+xml;charset=utf-8' }));
    var image = new Image();
    image.onload = function () {
        context.drawImage(image, 420, 0);
        domUrl.revokeObjectURL(url);
        riDownload(canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    };
    image.src = url;
}
function riDownload(imgUri) {
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
function riToggleCollapsible(element) {
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    }
    else {
        element.style.maxHeight = element.scrollHeight + "px";
    }
}
//# sourceMappingURL=randomimage.js.map