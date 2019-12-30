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