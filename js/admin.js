function mostrarDiaHora() {
    var fecha = new Date();
    var fecha = new Date();
    var opciones = { day: 'numeric', month: 'short' };
    var diaMes = fecha.toLocaleDateString('es-ES', opciones);
    var hora = fecha.toLocaleTimeString();

    document.getElementById("day").textContent = diaMes;
    document.getElementById("time").textContent = hora;
}

// Actualizar cada segundo
setInterval(mostrarDiaHora, 1000);



var ctx = document.getElementById('myChart').getContext('2d');
var data = {
"labels": [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio"
],
"datasets": [
{
  "label": "2023",
  "backgroundColor": "#ffffff",
  "fill": false,
  "data": [
    "4200000",
    "4600000",
    "3200000",
    "3900000",
    "4100000",
    "3800000",
    "3650000"
  ],
  "borderWidth": "1",
  "pointBackgroundColor": "#ffffff",
  "borderColor": "#000000",
  "pointBorderColor": "#000000",
  "pointHoverBackgroundColor": "#ffffff",
  "pointHoverBorderColor": "#000000"
}
]
};
var options = {
"title": {
"display": false,
"text": "Ad Revenue Comparison 2014-2015",
"position": "bottom",
"fullWidth": true,
"fontColor": "#aa7942",
"fontSize": 16
},
"legend": {
"display": true,
"fullWidth": true,
"position": "top",
"labels": {
  "fontFamily": ""
}
},
"scales": {
"yAxes": [
  {
    "ticks": {
      "beginAtZero": true,
      "display": true
    },
    "gridLines": {
      "display": true,
      "lineWidth": 2,
      "drawOnChartArea": true,
      "drawTicks": true,
      "tickMarkLength": 1,
      "offsetGridLines": true,
      "zeroLineColor": "#a6a6a6",
      "color": "#d6d6d6",
      "zeroLineWidth": 2
    },
    "scaleLabel": {
      "display": true,
      "labelString": "CLP"
    },
    "display": true
  }
],
"xAxes": {
  "0": {
    "ticks": {
      "display": true,
      "fontSize": 14,
      "fontStyle": "italic",
      "fontColor": "#000000",
      "beginAtZero": false
    },
    "display": true,
    "gridLines": {
      "display": true,
      "lineWidth": 1,
      "drawOnChartArea": false,
      "drawTicks": true,
      "tickMarkLength": 5,
      "zeroLineWidth": 1,
      "offsetGridLines": false,
      "color": "#b3b3b3",
      "zeroLineColor": "#cccccc"
    },
    "scaleLabel": {
      "fontSize": 16,
      "display": true,
      "fontStyle": "normal",
      "fontColor": "#000000"
    },
    "type": "category",
    "position": "top"
  }
}
},
"tooltips": {
"enabled": false,
"mode": "label",
"caretSize": 10,
"backgroundColor": "#454545"
},
"elements": {
"arc": {
  "backgroundColor": "#ffffff"
},
"line": {
  "backgroundColor": "#ffffff",
  "lineTension": 0,
  "borderColor": "#ffffff"
}
},
"animation": {
"duration": ""
}
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});


function changeView(view) {
    var elements = document.getElementsByTagName("section");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    document.getElementById(view).style.display = "block";
}