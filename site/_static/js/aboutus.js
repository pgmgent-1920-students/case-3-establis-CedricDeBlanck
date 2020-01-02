(() => {
  const app = {
    initialize() {
      this.aboutData = null;
      this.cacheElements();
      this.loadTeam();
    },
    cacheElements() {
      this.aboutListElement = document.querySelector('.aboutus_diensten');
    },
    async loadTeam() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`../json/overons.json`,
        (data) => {
          this.aboutData = data;
          this.generateUIForTeam();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForTeam() {
      if (this.aboutData !== null && this.aboutListElement !== null) {
        console.log(this.aboutData);
        let teamElement = null;
        this.aboutData.forEach((aboutus, index) => {
          aboutElement = document.createElement('div');
          aboutElement.classList.add('g-fb-col-12', 'g-fb-col-sm-6', 'g-fb-col-md-4', 'g-fb-col-lg-3', 'g-fb-col-xl-2');
          aboutElement.innerHTML = `
              ${aboutus.name}
              ${aboutus.surname}
              ${aboutus.age}
              ${aboutus.city}
          `;
          this.aboutListElement.appendChild(aboutElement);
        });
      }
    },
  };
  app.initialize();
})();