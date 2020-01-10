// //Nieuws -> nieuws

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpagenews');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?langcode=nl`,
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
      let news = this.detailData[projectId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext__news">
        <h2>${news.title}</h2>
        <div class="red_line"></div>
        <picture>
          <img class="news_image" src="http://www.establis.eu${news.field_image}">
        </picture>
                <p>${news.field_content}</p>
    </div>
          `;
          this.detailListElement.appendChild(detailElement);
        // });
      }
    },
  };
  app.initialize();
})();

// Nieuws -> nieuws/nieuws

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpagenieuws');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?field_news_type_target_id=2`,
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
      let news = this.detailData[projectId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext__news">
        <h2>${news.title}</h2>
        <div class="red_line"></div>
        <picture>
          <img class="news_image" src="http://www.establis.eu${news.field_image}">
        </picture>
                <p>${news.field_content}</p>
    </div>
          `;
          this.detailListElement.appendChild(detailElement);
        // });
      }
    },
  };
  app.initialize();
})();

// Nieuws -> nieuws/nieuws

(() => {
  const app = {
    initialize() {
      this.detailData = null;
      this.cacheElements();
      this.loaddetail();
    },
    cacheElements() {
      this.detailData = [];
      this.detailListElement = document.querySelector('.detailpagepers');
    },
    async loaddetail() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?field_news_type_target_id=1`,
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
      const persId = searchLink.substring(searchLink.indexOf('=') + 1);
      console.log(this.detailData[persId]);
      let pers = this.detailData[persId];
      if (this.detailData !== null && this.detailListElement !== null) {
        let detailElement = null;
          detailElement = document.createElement('div');
          detailElement.classList.add('detail');
          detailElement.innerHTML = `
    <div class="detail__maintext__news">
        <h2>${pers.title}</h2>
        <div class="red_line"></div>
        <picture>
          <img class="news_image" src="http://www.establis.eu${pers.field_image}">
        </picture>
                <p>${pers.field_content}</p>
    </div>
          `;
          this.detailListElement.appendChild(detailElement);
        // });
      }
    },
  };
  app.initialize();
})();