var doc = new jsPDF();

// We'll make our own renderer to skip this editor
var specialElementHandlers = {
	'#editor': function(element, renderer){
		return true;
	},
	'.controls': function(element, renderer){
		return true;
	}
};

docReady(function() {
  window.generatePDF = function(seite) {
    var version = prompt("Version:");

    version = version ? "_v" + version : "";
    seite = seite ? "_" + seite : "";
    
    html2canvas(document.getElementById("HTMLtoPDF")).then(
      function (canvas) {
        console.log("converting to pdf...");
        var img = canvas.toDataURL("image/png");
        var doc = new jsPDF();
        doc.addImage(img, 'JPEG', 0, 0);
        doc.save("charakterbogen" + version + seite + ".pdf");
      }
    );
  };
});