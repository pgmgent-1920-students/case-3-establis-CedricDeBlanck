(() => {
  const app = {
    initialize() {
      this.aboutData = null;
      this.cacheElements();
      this.loadDiensten();
    },
    cacheElements() {
      this.aboutListElement = document.querySelector('.aboutus_diensten');
    },
    loadDiensten () {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`../static/data/diensten.json`,
        (data) => {
          this.aboutData = data;
          this.generateUIForDiensten();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForDiensten() {
      if (this.aboutData !== null && this.aboutListElement !== null) {
        console.log(this.aboutData);
        let aboutElement = null;
        this.aboutData.forEach((aboutus, index) => {
          aboutElement = document.createElement('div');
          aboutElement.classList.add('g-fb-col-12','g-fb-col-xl-4');
          aboutElement.innerHTML = `
          <div class="diensten">
          <picture>
             <img src="${aboutus.image}">
          </picture>
              <p class="diensten_title">${aboutus.title}</p>
              <p class="diensten_text">${aboutus.text}</p>
              </div>
          `;
          this.aboutListElement.appendChild(aboutElement);
        });
      }
    },
  };
  app.initialize();
})();