document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Average Monthly Temperature',
        data: [22, 18, 40, 52, 67, 76, 88, 82, 63, 55, 51, 38],
        pointHoverBackgroundColor: 'rgb(0, 55, 0)',
        backgroundColor: 'rgb(224, 255, 255)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1        
      }]
    },
    options: {
      responsive: true,
      scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
          color: 'rgb(128, 0, 0)',
          font: {
            family: 'EB Garamond',
            size: 20,
            weight: 'bold',
            },
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Degrees (in Fahrenheit)',
            color: 'rgb(128, 0, 0)',
            font: {
              family: 'EB Garamond',
              size: 20,
              weight: 'bold',
            },
          }
        },
      }
    }
  
})
});