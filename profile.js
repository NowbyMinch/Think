
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
            label: 'Progresso',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(240, 100, 101, 0.1)',
            borderColor: 'red',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Semana passada', 'Semana atual'],
        datasets: [{
            label: 'Média de progresso',
            data: [60, 65],
            backgroundColor: [
                'rgba(143, 143, 143, 0.2)'
            ],
            borderColor: [
                'rgba(143, 143, 143, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    color: 'rgba(143, 143, 143, 0.2)'
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'rgba(143, 143, 143, 0.2)'
                }
            }]
        }
    }
});
