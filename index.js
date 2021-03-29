function color(rang){
    var abc = document.querySelector(".dz-image");
    console.log(rang)
    abc.style.setProperty("filter",`drop-shadow(0 0 0.75rem ${rang})`);
    console.log("bbbbblah")
}


function submit() {
	var node = document.querySelector(".dz-image");

	domtoimage
		.toPng(node)
		.then(function (dataUrl) {
			var img = new Image();
			img.src = dataUrl;
			document.body.appendChild(img);
		})
		.catch(function (error) {
			console.error("oops, something went wrong!", error);
		});
}


function download(){
    domtoimage.toBlob(document.querySelector(".dz-image"))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
}

Dropzone.autoDiscover = false;

Dropzone.options.myDropzone = {
    url: "/",
    thumbnailWidth: null,
    thumbnailHeight: null,
    init: function() {
        this.on("thumbnail", function(file, dataUrl) {
            $('.dz-image').last().find('img').attr({width: '100%', height: '100%'});
        }),
        this.on("success", function(file) {
            $('.dz-image').css({"width":"100%", "height":"auto"});
        })
    }
};

var myDropzone = new Dropzone('div#myDropzone');