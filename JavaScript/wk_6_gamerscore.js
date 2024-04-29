document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Star Wars: Battlefront', 'Halo: MCC', 'The Walking Dead', 'The Walking Dead: S2', 'The Walking Dead: Michonne', 'The Walking Dead: A New Frontier', 'Rise of the Tomb Raider', 'A Way Out', 'AVICII Invector', 'LEGO Star Wars: TCS'],
        datasets: [{
          label: 'Gamerscore',
          data: [1345, 1110, 1000, 1000, 1000, 1000, 965, 900, 900, 900],
          pointHoverBackgroundColor: 'rgb(0, 55, 0)',
          backgroundColor: 'rgb(14, 122, 13)',
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
            text: 'Videogame Title',
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
              text: 'Gamerscore',
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