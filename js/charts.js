// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
var AreaChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ["Aug1", "Aug2", "Aug3", "Aug4", "Aug5", "Aug6", "Aug7", "Aug8", "Aug9", "Aug10", "Aug11", "Aug12"],
        datasets: [{
            data: [9000, 30000, 25000, 20000, 20000, 33000, 35000, 30000, 30000, 21000, 36000, 40000],
            pointBackgroundColor: "rgba(220, 92, 124, 1)",
            borderColor: "rgba(220, 92, 124, 1)",
            backgroundColor: "rgb(151, 145, 172,0.7)",
            fill: true
        }
        ]

    },
    options: {
        responsive:true,
            maintainAspectRatio:false,

        plugins: {
            legend: { display: false },

        },
        
        tension: 0.4,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks:
                    { min: 0, max: 40000, stepSize: 10000 }
            }

        }
    }
});
// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");
var BarChart = new Chart(visitorChart, {
    type: 'bar',
    data: {
        labels: ["June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Men",
            backgroundColor: "#564f77",
        }, {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Women",
            backgroundColor: "#ff869a",
        }
        ]

    },
    options: {
        legend: { display: false },
        
            responsive:true,
            maintainAspectRatio:false
            

    }
});
// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
var PieChart = new Chart(citiesChart, {
    type: 'pie',
    data: {
        labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
        datasets: [{
            data: [35, 25, 20, 20],

            backgroundColor: [
                "#ff869a",
                "#37315e",
                "rgba(220, 92, 124, 1)",
                "#9791ac"
            ],
        }]
    },

    options: {
        responsive:true,
        maintainAspectRatio:false
        }

});
// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
var LinearChart = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            data: [1, 1.5, 2.5, 4, 5, 3],
            pointBackgroundColor: "rgba(220, 92, 124, 1)",
            borderColor: "rgba(220, 92, 124, 1)",
            fill: true
        }
        ]

    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
        plugins: {
            legend: { display: false },

        },
        tension: 0.4,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks:
                    { min: 0, max:5, stepSize: 1 }
            }

        }
    }
});


