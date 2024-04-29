document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Average Monthly Temperature (in Fahrenheit)',
        data: [22, 18, 40, 52, 67, 76, 88, 82, 63, 55, 51, 38],
        backgroundColor: 'rgb(224, 255, 255)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
        }]
      }
    }
  )
});