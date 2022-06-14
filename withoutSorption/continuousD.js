
function ERFC(value1){
  return 1-math.erf(value1);
}

var C0 = 25;
var q = 0.20000;
var n = 0.35;
var v = q/n;
var alpha = 1;
//0.0000000001
var Dstar = 0.0000000001;
var D =  Dstar + (alpha*v);
var time = 80;

var distance = 80;

var ctx1 = document.getElementById("canvas1").getContext("2d");

  const xValues = [0, 1, 5, 10, 15, 20, 30, 40, 50, 80, 100, 120, 150, 180, 200, 250, 300, 350, 500];

  var xyValues = [];

  for(let i =0; i<xValues.length; i++){
    var obj = {};
    obj.x = xValues[i];
    var C = (C0/2)*(ERFC((xValues[i]-v*time)/(2*Math.sqrt(D*time)))+(Math.exp(v*xValues[i]/D)*(ERFC((xValues[i]+v*time)/(2*Math.sqrt(D*time))))));
    obj.y = C.toFixed(2);
    xyValues.push(obj);
  }

  var chart1 = new Chart(ctx1,{
    type: 'scatter',
    data: {
      datasets: [{
        backgroundColor: '#4775c9',
        borderColor: '#4775c9',
        borderWidth:1.2,
        pointRadius:2.5,
        pointBackgroundColor: '#4775c9',
        // data: [25.00, 24.98, 24.89, 24.66, 24.25, 23.58, 21.23, 17.41, 12.60, 1.82, 0.20, 0.01, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
        data: xyValues,
        fill: false,
        showLine: true
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Concentration with Distance (Time = 115 days)",
        fontSize: 20
      },
      animation: false,
      legend:{
          display:false
      },
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Distance',
            fontSize: 17
          },
            ticks: {min: 0, max:600, fontSize: 13.5}
      }],
        yAxes: [{
          display: true,
          precision: 0.00,
          scaleLabel: {
            display: true,
            labelString: 'Concentration',
            fontSize: 17
          },
          ticks: {
            min: 0,
             max:30,
             fontSize: 13.5,
             callback: function(value, index, values) {
              return value + ".00";
          }}
        }]
      }
    }
  });


var str; 

var slider = document.querySelectorAll(".slider");
var output = document.querySelectorAll(".demo");

output[0].innerHTML = slider[0].value + " mg/L";
output[1].innerHTML = slider[1].value + " m/day, velocity = " + v.toFixed(2) + " m/day";
output[2].innerHTML = slider[2].value;
output[3].innerHTML = slider[3].value + " day";

  //function slider

slider[0].oninput = function() {
 
  chart1.destroy();

  //initial conditions (without sorption)
  C0 = slider[0].value;
  q = slider[1].value;
  alpha = 1;
  var n = 0.35;
  var v = q/n;
  var Dstar = parseFloat(slider[2].value);
  var D =  Dstar + (alpha*v);
  var time = slider[3].value;
  var distance = 80;

    output[0].innerHTML = slider[0].value + " mg/L";

    const xValues = [0, 1, 5, 10, 15, 20, 30, 40, 50, 80, 100, 120, 150, 180, 200, 250, 300, 350, 500];

    var xyValues = [];

    for(let i =0; i<xValues.length; i++){
      var obj = {};
      obj.x = xValues[i];
      var C = (C0/2)*(ERFC((xValues[i]-v*time)/(2*Math.sqrt(D*time)))+(Math.exp(v*xValues[i]/D)*(ERFC((xValues[i]+v*time)/(2*Math.sqrt(D*time))))));
      obj.y = C.toFixed(2);
      xyValues.push(obj);
    }

    chart1 = new Chart(ctx1,{
      type: 'scatter',
      data: {
        datasets: [{
          backgroundColor: '#4775c9',
          borderColor: '#4775c9',
          borderWidth:1.2,
          pointRadius:2.5,
          pointBackgroundColor: '#4775c9',
          // data: [25.00, 24.98, 24.89, 24.66, 24.25, 23.58, 21.23, 17.41, 12.60, 1.82, 0.20, 0.01, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
          data: xyValues,
          fill: false,
          showLine: true
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Concentration with Distance (Time = 115 days)",
          fontSize: 20
        },
        animation: false,
        legend:{
            display:false
        },
        tooltips: {
          mode: 'label',
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Distance',
              fontSize: 17
            },
              ticks: {min: 0, max:600, fontSize: 13.5}
        }],
          yAxes: [{
            display: true,
            precision: 0.00,
            scaleLabel: {
              display: true,
              labelString: 'Concentration',
              fontSize: 17
            },
            ticks: {
              min: 0,
               max:30,
               fontSize: 13.5,
               callback: function(value, index, values) {
                return value + ".00";
            }}
          }]
        }
      }
    });
  }

  slider[1].oninput = function() {
 
    chart1.destroy();
  
    //initial conditions (without sorption)
    C0 = slider[0].value;
    q = slider[1].value;
    alpha = 1;
    var n = 0.35;
    var v = q/n;
    var Dstar = parseFloat(slider[2].value);
    var D =  Dstar + (alpha*v);
    var time = slider[3].value;
    var distance = 80;
  
      output[1].innerHTML = slider[1].value + " m/day, velocity = " + v.toFixed(2) + " m/day";
  
      const xValues = [0, 1, 5, 10, 15, 20, 30, 40, 50, 80, 100, 120, 150, 180, 200, 250, 300, 350, 500];
  
      var xyValues = [];
  
      for(let i =0; i<xValues.length; i++){
        var obj = {};
        obj.x = xValues[i];
        var C = (C0/2)*(ERFC((xValues[i]-v*time)/(2*Math.sqrt(D*time)))+(Math.exp(v*xValues[i]/D)*(ERFC((xValues[i]+v*time)/(2*Math.sqrt(D*time))))));
        obj.y = C.toFixed(2);
        xyValues.push(obj);
      }
  
      chart1 = new Chart(ctx1,{
        type: 'scatter',
        data: {
          datasets: [{
            backgroundColor: '#4775c9',
            borderColor: '#4775c9',
            borderWidth:1.2,
            pointRadius:2.5,
            pointBackgroundColor: '#4775c9',
            data: xyValues,
            fill: false,
            showLine: true
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Concentration with Distance (Time = 115 days)",
            fontSize: 20
          },
          animation: false,
          legend:{
              display:false
          },
          tooltips: {
            mode: 'label',
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Distance',
                fontSize: 17
              },
                ticks: {min: 0, max:600, fontSize: 13.5}
          }],
            yAxes: [{
              display: true,
              precision: 0.00,
              scaleLabel: {
                display: true,
                labelString: 'Concentration',
                fontSize: 17
              },
              ticks: {
                min: 0,
                 max:30,
                 fontSize: 13.5,
                 callback: function(value, index, values) {
                  return value + ".00";
              }}
            }]
          }
        }
      });
    }

    slider[2].oninput = function() {
 
      chart1.destroy();
    
      //initial conditions (without sorption)
      C0 = slider[0].value;
      q = slider[1].value;
      alpha = 1;
      var n = 0.35;
      var v = q/n;
      var Dstar = parseFloat(slider[2].value);
      var D =  Dstar + (alpha*v);
      var time = slider[3].value;
      var distance = 80;
    
        output[2].innerHTML = slider[2].value;
    
        const xValues = [0, 1, 5, 10, 15, 20, 30, 40, 50, 80, 100, 120, 150, 180, 200, 250, 300, 350, 500];
    
        var xyValues = [];
    
        for(let i =0; i<xValues.length; i++){
          var obj = {};
          obj.x = xValues[i];
          var C = (C0/2)*(ERFC((xValues[i]-v*time)/(2*Math.sqrt(D*time)))+(Math.exp(v*xValues[i]/D)*(ERFC((xValues[i]+v*time)/(2*Math.sqrt(D*time))))));
          obj.y = C.toFixed(2);
          xyValues.push(obj);
        }
    
        chart1 = new Chart(ctx1,{
          type: 'scatter',
          data: {
            datasets: [{
              backgroundColor: '#4775c9',
              borderColor: '#4775c9',
              borderWidth:1.2,
              pointRadius:2.5,
              pointBackgroundColor: '#4775c9',
              data: xyValues,
              fill: false,
              showLine: true
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: "Concentration with Distance (Time = 115 days)",
              fontSize: 20
            },
            animation: false,
            legend:{
                display:false
            },
            tooltips: {
              mode: 'label',
            },
            hover: {
              mode: 'nearest',
              intersect: true
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Distance',
                  fontSize: 17
                },
                  ticks: {min: 0, max:600, fontSize: 13.5}
            }],
              yAxes: [{
                display: true,
                precision: 0.00,
                scaleLabel: {
                  display: true,
                  labelString: 'Concentration',
                  fontSize: 17
                },
                ticks: {
                  min: 0,
                   max:30,
                   fontSize: 13.5,
                   callback: function(value, index, values) {
                    return value + ".00";
                }}
              }]
            }
          }
        });
      }
      slider[3].oninput = function() {
 
        chart1.destroy();
      
        //initial conditions (without sorption)
        C0 = slider[0].value;
        q = slider[1].value;
        alpha = 1;
        var n = 0.35;
        var v = q/n;
        var Dstar = parseFloat(slider[2].value);
        var D =  Dstar + (alpha*v);
        var time = slider[3].value;
        var distance = 80;
      
          output[3].innerHTML = slider[3].value + " day";
      
          const xValues = [0, 1, 5, 10, 15, 20, 30, 40, 50, 80, 100, 120, 150, 180, 200, 250, 300, 350, 500];
      
          var xyValues = [];
      
          for(let i =0; i<xValues.length; i++){
            var obj = {};
            obj.x = xValues[i];
            var C = (C0/2)*(ERFC((xValues[i]-v*time)/(2*Math.sqrt(D*time)))+(Math.exp(v*xValues[i]/D)*(ERFC((xValues[i]+v*time)/(2*Math.sqrt(D*time))))));
            obj.y = C.toFixed(2);
            xyValues.push(obj);
          }
      
          chart1 = new Chart(ctx1,{
            type: 'scatter',
            data: {
              datasets: [{
                backgroundColor: '#4775c9',
                borderColor: '#4775c9',
                borderWidth:1.2,
                pointRadius:2.5,
                pointBackgroundColor: '#4775c9',
                data: xyValues,
                fill: false,
                showLine: true
              }]
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: "Concentration with Distance (Time = 115 days)",
                fontSize: 20
              },
              animation: false,
              legend:{
                  display:false
              },
              tooltips: {
                mode: 'label',
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              scales: {
                xAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Distance',
                    fontSize: 17
                  },
                    ticks: {min: 0, max:600, fontSize: 13.5}
              }],
                yAxes: [{
                  display: true,
                  precision: 0.00,
                  scaleLabel: {
                    display: true,
                    labelString: 'Concentration',
                    fontSize: 17
                  },
                  ticks: {
                    min: 0,
                     max:30,
                     fontSize: 13.5,
                     callback: function(value, index, values) {
                      return value + ".00";
                  }}
                }]
              }
            }
          });
        }
  $("#canvas1").load(" #canvas1");
