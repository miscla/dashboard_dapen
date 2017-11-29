var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [{
            label: "Tangguhan Tahun 2018",
            borderColor: 'rgb(255, 99, 132)',
            data: [154, 100, 200, 193, 354, 120, 290, 140, 222, 300, 230, 30, 0],
            fill: false,
            borderWidth: 1,
        }, {
            label: "Tangguhan Tahun 2017",
            borderColor: 'rgb(0, 0, 255)',
            data: [176, 90, 230, 180, 354, 140, 300, 123, 223, 240, 200, 360, 320],
            fill: false,
            borderWidth: 1,
        }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }
    }
});