(() => {
  const app = {
    initialize() {
      this.reasonData = null;
      this.cacheElements();
      this.loadReasons();
    },
    cacheElements() {
      this.reasonListElement = document.querySelector('.reasons');
    },
    loadReasons () {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`../static/data/reasons.json`,
        (data) => {
          this.reasonData = data;
          this.generateUIForReasons();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForReasons() {
      if (this.reasonData !== null && this.reasonListElement !== null) {
        console.log(this.reasonData);
        let reasonElement = null;
        this.reasonData.forEach((reasons, index) => {
          reasonElement = document.createElement('div');
          reasonElement.classList.add('reason')
          reasonElement.innerHTML = `
          <div class="reasons_text">
          <h2>${reasons.title}</h2>
          <div class="red_line"></div>
          <p>${reasons.text}</p>
          <p>${reasons.solliciteer}</p>
          </div>
          <picture>
          <img src="${reasons.image}">
          </picture>
          `;
          this.reasonListElement.appendChild(reasonElement);
        });
      }
    },
  };
  app.initialize();
})();

//Over ons DATA Diensten

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

(() => {
  const app = {
    initialize() {
      this.teamData = null;
      this.cacheElements();
      this.loadTeam();
    },
    cacheElements() {
      this.teamListElement = document.querySelector('.team-list');
    },
    async loadTeam() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/team`,
        (data) => {
          this.teamData = data;
          this.generateUIForTeam();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForTeam() {
      if (this.teamData !== null && this.teamListElement !== null) {
        console.log(this.teamData);
        let teamElement = null;
        this.teamData.forEach((teamMember, index) => {
          teamElement = document.createElement('div');
          teamElement.classList.add('g-fb-col-12', 'g-fb-col-sm-6', 'g-fb-col-md-4', 'g-fb-col-lg-3', 'g-fb-col-xl-2');
          teamElement.innerHTML = `
          <article>
           <div class=membercontent>

              <h1>${teamMember.title}</h1>

           <picture class=team>
              <img src=https://www.establis.eu/${teamMember.field_image}>
           </picture>
           </div>

           <div class=field>
           <picture>
             <img src=https://www.establis.eu/${teamMember.field_hover_image}>
           </picture>
           </div>

          </article>

          `;
          this.teamListElement.appendChild(teamElement);
        });
      }
    },
  };
  app.initialize();
})();