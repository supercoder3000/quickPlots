
var idPlotDiv = 0

function clearPlots() {
	for(var ii = 0; ii < idPlotDiv; ii++) {
	   var element = document.getElementById("idPlotDiv" + ii);
 	   element.parentNode.removeChild(element);
        }

	idPlotDiv = 0;
	// document.getElementById("pDebug").innerHTML  = "clear";
}

function getTime() {
	var date = new Date();
	
	hh = date.getHours();
	mm = date.getMinutes();
	ss = date.getSeconds();
	 
	if(hh < 10){hh = '0'+hh;} 
	if(mm < 10){mm = '0'+mm;} 
	if(ss < 10){ss = '0'+ss;}
	
	return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + hh+':'+mm+':'+ss;
}

function plot(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code != 13) { //Enter keycode
	   return;
	}
	
	// var dataX = document.getElementById('dataX').value.match(/\d+(?:\.\d+)?/g).map(Number)
	var dataY = document.getElementById('dataY').value.split(",").map(parseFloat);
	var dataX = [...Array(dataY.length).keys()];

	var title = document.getElementById('title').value;
	
	// document.getElementById("pDebug").innerHTML  = idPlotDiv + "";	
	// document.write(dataY.size)

	var trace1 = {
	  x: dataX,
	  y: dataY,
	  type: 'scatter'
	};

	var data = [trace1];
	
	var divPlot = document.createElement("DIV");
	divPlot.id = "idPlotDiv" + idPlotDiv;
	
	var pDataY = document.getElementById('pDataY');
	document.body.insertBefore(divPlot, pDataY.nextSibling);

	var title =  getTime() + " - " + title;

	var layout = {
		title: title
	};
	
	Plotly.newPlot(divPlot.id, data, layout);
	
	idPlotDiv++;
}
