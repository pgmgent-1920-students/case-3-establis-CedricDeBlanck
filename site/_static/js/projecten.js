(() => {
  const app = {
    initialize() {
      this.projectData = null;
      this.cacheElements();
      this.loadTeam();
    },
    cacheElements() {
      this.projectListElement = document.querySelector('.projects');
    },
    async loadTeam() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl`,
        (data) => {
          this.projectData = data;
          this.generateUIForTeam();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForTeam() {
      if (this.projectData !== null && this.projectListElement !== null) {
        console.log(this.projectData);
        let teamElement = null;
        this.projectData.forEach((project, index) => {
          projectElement = document.createElement('div');
          projectElement.classList.add('g-fb-col-12', 'g-fb-col-sm-6', 'g-fb-col-md-4', 'g-fb-col-lg-3', 'g-fb-col-xl-2');
          projectElement.innerHTML = `
            <article>
              ${project.field_address}
              ${project.field_architect}
              ${project.field_build_time}
              ${project.field_city}
              ${project.field_contractor}
              ${project.field_copyright}
              ${project.field_project_type}
              ${project.field_surface}
              ${project.langcode}
              ${project.title}
              <picture>
              <img src= http://www.establis.eu/${project.field_gallery_images}>
              </picture>
              <picture>
              <img src= http://www.establis.eu/${project.field_image}>
              </picture>
              <picture>
              <img src= http://www.establis.eu/${project.field_image_1}>
              </picture>
             
            </article>
            </br>
          `;
          this.projectListElement.appendChild(projectElement);
        });
      }
    },
  };
  app.initialize();
})();