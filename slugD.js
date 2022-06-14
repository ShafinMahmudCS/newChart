
function ERFC(value1){
  return 1-math.erf(value1);
}

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

var C0 = 1000;
var q = 4;
var n = 0.3;
var v = q/n;

var Dstar = 0.0000000001;
var alphaX = 1;
var alphaY = 0.1;
var DL =  Dstar + (alphaX*v);
var Dt = Dstar + (alphaY*v);
var time = 22.22;

var x = 75;
var y = 20;
var Area = 5;

var ctx1 = document.getElementById("canvas1").getContext("2d");

const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];

var xyValues = [];

for(let i =0; i<xValues.length; i++){
  var obj = {};
  obj.x = xValues[i];
  var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
  obj.y = expo(C, 4);
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
            min: 0.0,
             max:1.4,
             fontSize: 13.5,}
        }]
      }
    }
  });

  // console.log(chart1.options.scales.yAxes[0].ticks.max);


var str; 

var slider = document.querySelectorAll(".slider");
var output = document.querySelectorAll(".demo");

output[0].innerHTML = slider[0].value;
output[1].innerHTML = slider[1].value + " m/day, velocity = " + v.toFixed(2) + " m/day";
output[2].innerHTML = slider[2].value;
output[3].innerHTML = slider[3].value;
output[4].innerHTML = slider[4].value;
output[5].innerHTML = slider[5].value;

  //function slider

slider[0].oninput = function() {
 
  chart1.destroy();

  //initial conditions (without sorption)
  C0 = slider[0].value;
  q = slider[1].value;
  var n = 0.3;
  var v = q/n;
  
  var Dstar = parseFloat(slider[2].value);
  var alphaX = 1;
  var alphaY = 0.1;
  var DL =  Dstar + (alphaX*v);
  var Dt = Dstar + (alphaY*v);
  var time = slider[3].value;
  
  var x = 75;
  var y = slider[4].value;
  var Area = slider[5].value;

    output[0].innerHTML = slider[0].value;

    const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];

    var xyValues = [];
  
    for(let i =0; i<xValues.length; i++){
      var obj = {};
      obj.x = xValues[i];
      var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
      obj.y = expo(C, 4);
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
              min: 0.0,
               max:1.4,
               fontSize: 13.5,}
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
    var n = 0.3;
    var v = q/n;
    
    var Dstar = parseFloat(slider[2].value);
    var alphaX = 1;
    var alphaY = 0.1;
    var DL =  Dstar + (alphaX*v);
    var Dt = Dstar + (alphaY*v);
    var time = slider[3].value;
    
    var x = 75;
    var y = slider[4].value;
    var Area = slider[5].value;
  
      output[1].innerHTML = slider[1].value + "m/day, velocity = " + v.toFixed(2) + "m/day";
  
      const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];
  
      var xyValues = [];
    
      for(let i =0; i<xValues.length; i++){
        var obj = {};
        obj.x = xValues[i];
        var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
        obj.y = expo(C, 4);
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
                min: 0.0,
                 max:1.4,
                 fontSize: 13.5,}
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
      var n = 0.3;
      var v = q/n;
      
      var Dstar = parseFloat(slider[2].value);
      var alphaX = 1;
      var alphaY = 0.1;
      var DL =  Dstar + (alphaX*v);
      var Dt = Dstar + (alphaY*v);
      var time = slider[3].value;
      
      var x = 75;
      var y = slider[4].value;
      var Area = slider[5].value;
    
        output[2].innerHTML = slider[2].value;
    
        const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];
    
        var xyValues = [];
      
        for(let i =0; i<xValues.length; i++){
          var obj = {};
          obj.x = xValues[i];
          var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
          obj.y = expo(C, 4);
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
                  min: 0.0,
                   max:1.4,
                   fontSize: 13.5,}
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
        var n = 0.3;
        var v = q/n;
        
        var Dstar = parseFloat(slider[2].value);
        var alphaX = 1;
        var alphaY = 0.1;
        var DL =  Dstar + (alphaX*v);
        var Dt = Dstar + (alphaY*v);
        var time = slider[3].value;
        
        var x = 75;
        var y = slider[4].value;
        var Area = slider[5].value;
      
          output[3].innerHTML = slider[3].value;
      
          const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];
      
          var xyValues = [];
        
          for(let i =0; i<xValues.length; i++){
            var obj = {};
            obj.x = xValues[i];
            var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
            obj.y = expo(C, 4);
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
                    min: 0.0,
                     max:1.4,
                     fontSize: 13.5,}
                }]
              }
            }
          });
        }

        slider[4].oninput = function() {
 
          chart1.destroy();
        
          //initial conditions (without sorption)
          C0 = slider[0].value;
          q = slider[1].value;
          var n = 0.3;
          var v = q/n;
          
          var Dstar = parseFloat(slider[2].value);
          var alphaX = 1;
          var alphaY = 0.1;
          var DL =  Dstar + (alphaX*v);
          var Dt = Dstar + (alphaY*v);
          var time = slider[3].value;
          
          var x = 75;
          var y = slider[4].value;
          var Area = slider[5].value;
        
            output[4].innerHTML = slider[4].value;
        
            const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];
        
            var xyValues = [];
          
            for(let i =0; i<xValues.length; i++){
              var obj = {};
              obj.x = xValues[i];
              var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
              obj.y = expo(C, 4);
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
                      min: 0.0,
                       max:1.4,
                       fontSize: 13.5,}
                  }]
                }
              }
            });
          }

          slider[5].oninput = function() {
 
            chart1.destroy();
          
            //initial conditions (without sorption)
            C0 = slider[0].value;
            q = slider[1].value;
            var n = 0.3;
            var v = q/n;
            
            var Dstar = parseFloat(slider[2].value);
            var alphaX = 1;
            var alphaY = 0.1;
            var DL =  Dstar + (alphaX*v);
            var Dt = Dstar + (alphaY*v);
            var time = slider[3].value;
            
            var x = 75;
            var y = slider[4].value;
            var Area = slider[5].value;
          
              output[5].innerHTML = slider[5].value;
          
              const xValues = [0.01, 1, 5, 10, 15, 20, 22, 30, 50, 80, 100, 105, 120, 170, 200, 250, 300, 350, 500];
          
              var xyValues = [];
            
              for(let i =0; i<xValues.length; i++){
                var obj = {};
                obj.x = xValues[i];
                var C = C0*Area/(4*(Math.PI)*time*Math.sqrt(Dt*DL))*Math.exp(-((xValues[i]-v*time)**2)/(4*DL*time)-y**2/(4*Dt*time));
                obj.y = expo(C, 4);
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
                        min: 0.0,
                         max:1.4,
                         fontSize: 13.5,}
                    }]
                  }
                }
              });
            }
  $("#canvas1").load(" #canvas1");
