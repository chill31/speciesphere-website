// scroll function
function scroll(top) {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top
  })
}

// getting colors
const style = getComputedStyle(document.body);
const accent = style.getPropertyValue("--accent");
const dark400 = style.getPropertyValue('--dark-400');
const dark700 = style.getPropertyValue('--dark-700');

const header = document.querySelector(".header");
const firstGoDownButton = document.querySelector(".main-arrow");

firstGoDownButton.addEventListener("click", () => {
  scroll(header.offsetHeight);
});

const skipOrangutanReportBtn = document.querySelector(".btn-skip_report");
const firstSection = document.querySelector(".section-why");

skipOrangutanReportBtn.addEventListener("click", () => {
  scroll(firstSection.offsetHeight + header.offsetHeight);
});

const orangutanChart = document.getElementById('sumatranOrangutanChart');

new Chart(orangutanChart, {
  type: 'bar',
  data: {
    labels: ['1900s', '1960s', '2016'],
    datasets: [{
      label: '# Orangutans',
      data: [300000, 150000, 50000],
      borderWidth: 1,
      backgroundColor: accent,
      hoverBackgroundColor: dark400,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    locale: 'en-us'
  }
});

const readMoreBtn = document.querySelector(".btn-endangered");
const secondSection = document.querySelector(".section-dos_donts");

readMoreBtn.addEventListener("click", () => {
  scroll(header.offsetHeight + firstSection.offsetHeight + secondSection.offsetHeight);
});

const allSpeciesDiv = document.querySelectorAll(".species");
const speciesDivObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting) {
      entry.target.classList.add("done");
    }

  });
}, {
  threshold: .25
});

allSpeciesDiv.forEach((speciesDiv) => speciesDivObserver.observe(speciesDiv));