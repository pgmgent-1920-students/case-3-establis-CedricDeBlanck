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
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
        // const p = this.detailData[Math.floor(Math.random() * this.detailData.length)]
        this.detailData.forEach((detail, index) => {
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext">
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
                    <div class="detail__image1"></div>
                </div>
                <div class="detail__image__hover2">
                    <div class="detail__image2"></div>
                </div>
            </div>
</div>
          `;
          this.detailListElement.appendChild(detailElement);
        });
      }
    },
  };
  app.initialize();
})();