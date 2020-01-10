// Projecten

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpage');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const projectId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[projectId]);
      let detail = this.detailData[projectId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
          <div class="detail__maintext">
                <h3>Project</h3>
                <p>${detail.title}</p>

                <h3>bouwplaats</h3>
                <p>${detail.field_address}</p>

                <h3>client</h3>
                <p>${detail.field_client}</p>

                <h3>architect</h3>
                <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>

                <p>${detail.field_build_time}</p>
    </div>
</div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();

// renovatie

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpagerenovatie');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl&field_project_type_target_id=16`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const renovatieId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[renovatieId]);
      let detail = this.detailData[renovatieId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
              <div class="detail__maintext">
                <h3>Project</h3>
                  <p>${detail.title}</p>

                <h3>bouwplaats</h3>
                  <p>${detail.field_address}</p>

                <h3>client</h3>
                  <p>${detail.field_client}</p>

                <h3>architect</h3>
                  <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                  <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                  <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>
                <p>${detail.field_build_time}</p>
              </div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();

//industrieel

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpageindustrieel');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=3`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const industrieelId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[industrieelId]);
      let detail = this.detailData[industrieelId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext">
                <h3>Project</h3>
                <p>${detail.title}</p>

                <h3>bouwplaats</h3>
                <p>${detail.field_address}</p>

                <h3>client</h3>
                <p>${detail.field_client}</p>

                <h3>architect</h3>
                <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>

                <p>${detail.field_build_time}</p>
    </div>
</div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();

// PPS/DBFM

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpageppsdbfm');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl&field_project_type_target_id=15`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const ppsdbfmId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[ppsdbfmId]);
      let detail = this.detailData[ppsdbfmId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext">
                <h3>Project</h3>
                <p>${detail.title}</p>

                <h3>bouwplaats</h3>
                <p>${detail.field_address}</p>

                <h3>client</h3>
                <p>${detail.field_client}</p>

                <h3>architect</h3>
                <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>

                <p>${detail.field_build_time}</p>
    </div>
</div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();

// Residentieel

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpageresidentieel');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=17`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const residentieelId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[residentieelId]);
      let detail = this.detailData[residentieelId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext">
                <h3>Project</h3>
                <p>${detail.title}</p>

                <h3>bouwplaats</h3>
                <p>${detail.field_address}</p>

                <h3>client</h3>
                <p>${detail.field_client}</p>

                <h3>architect</h3>
                <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>

                <p>${detail.field_build_time}</p>
    </div>
</div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();

// utilitair

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpageutilitair');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=14`,
        (data) => {
          this.detailData = data;
          this.generateUIForProjectsDetail();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjectsDetail() {
      const searchLink = window.location.search;
      const utilitairId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[utilitairId]);
      let detail = this.detailData[utilitairId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext">
                <h3>Project</h3>
                <p>${detail.title}</p>
                
                <h3>bouwplaats</h3>
                <p>${detail.field_address}</p>

                <h3>client</h3>
                <p>${detail.field_client}</p>

                <h3>architect</h3>
                <p>${detail.field_architect}</p>

                <h3>hoofdaannemer</h3>
                <p>${detail.field_contractor}</p>

                <h3>vloeroppervlakte</h3>
                <p>${detail.field_surface}</p>

                <h3>bouwtijd</h3>

                <p>${detail.field_build_time}</p>
    </div>
</div>
            <div class="detail__content__images">
                <p>beelden: © Befimmo<p>
              <div class="detail__images">
                <div class="detail__image__hover1">
                  <picture>
                    <img class="detail__image1" src="http://www.establis.eu${detail.field_image}">
                  </picture>
                </div>
                <div class="detail__image__hover2">
                  <picture>
                    <img class="detail__image2" src=http://www.establis.eu${detail.field_gallery_images}>
                  </picture>
                </div>
            </div>
          </div>
          `;
          this.detailListElement.appendChild(detailElement);
      }
    },
  };
  app.initialize();
})();