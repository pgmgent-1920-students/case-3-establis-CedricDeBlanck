// Random API
(() => {
  const app = {
    initialize() {
      this.randomData = null;
      this.cacheElements();
      this.loadRandom();
    },
    cacheElements() {
      this.randomListElement = document.querySelector('.random-project');
    },
    loadRandom() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl`,
        (data) => {
          this.randomData = data;
          this.generateUIForHome();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForHome() {
      if (this.randomData !== null && this.randomListElement !== null) {
        console.log(this.randomData);
        let randomElement = null;
        const random1 = this.randomData[Math.floor(Math.random() * this.randomData.length)];
        const random2 = this.randomData[Math.floor(Math.random() * this.randomData.length)];
        randomElement = document.createElement('a');
        randomElement.setAttribute('href', `/case-3-establis-CedricDeBlanck/projecten/`)
        randomElement.classList.add('random-element');
        randomElement.innerHTML = `
        <a href="">
        <div class="random_projects">
          <div class="random_project1">
            <div class="project__hover__random">
            <div class="project__random__text">
            <div class="project__random__title">
            <p>${random1.field_city}</p>
            <h3>${random1.title}</h3>
            </div>
            <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/">Projecten <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
            </div>
            <img src="https://www.establis.eu${random1.field_image}" alt="Image of ${random1.title}">
          </div>
          </a>
          <a href="">
          <div class="random_project2">
            <div class="project__hover__random">
              <div class="project__random__text">
                  <div class="project__random__title">
                  <p>${random2.field_city}</p>
                  <h3>${random2.title}</h3>
                  </div>
                <div class="read-more read-more-color-white">
                    <a href="/case-3-establis-CedricDeBlanck/projecten/">Projecten <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <img src="https://www.establis.eu${random2.field_image}" alt="Image of ${random2.title}">
          </div>
        </a>
        </div>
        `;
        this.randomListElement.appendChild(randomElement);
      }
    },
  };
  app.initialize();
})();