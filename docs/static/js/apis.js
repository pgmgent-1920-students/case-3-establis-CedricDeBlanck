/* 
Line 12  : 6 Reasons -> Werken bij ons
Line 61  : Diensten -> Over ons
Line 108 : Team Data -> Team
Line 166 : Projecten -> projecten
Line 220 : Nieuws -> Niews
Line 440 : Projecten -> PPS/DBFM


*/

//6 Reasons 


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
    loadReasons() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`/case-3-establis-CedricDeBlanck/static/data/reasons.json`,
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
    loadDiensten() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`/case-3-establis-CedricDeBlanck/static/data/diensten.json`,
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
          aboutElement.classList.add('g-fb-col-12', 'g-fb-col-xl-4');
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

//Team data

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

// Projecten -> projecten 

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
          this.generateUIForProjects();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjects() {
      if (this.projectData !== null && this.projectListElement !== null) {
        console.log(this.projectData);
        let projectElement = null;
        this.projectData.forEach((project, index) => {
          projectElement = document.createElement('div');
          projectElement.classList.add('project');
          projectElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${project.field_city}</p>
                <p>${project.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <picture>
            <img src= http://www.establis.eu/${project.field_image}>
          </picture>     
          
          `;
          this.projectListElement.appendChild(projectElement);
        });
      }
    },
  };
  app.initialize();
})();

// Nieuws -> nieuws

(() => {
  const app = {
    initialize() {
      this.newsData = null;
      this.cacheElements();
      this.loadNews();
    },
    cacheElements() {
      this.newsListElement = document.querySelector('.newspage');
    },
    async loadNews() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?langcode=nl`,
        (data) => {
          this.newsData = data;
          this.generateUIForNews();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForNews() {
      if (this.newsData !== null && this.newsListElement !== null) {
        console.log(this.newsData);
        let newsElement = null;
        this.newsData.forEach((news, index) => {
          newsElement = document.createElement('div');
          newsElement.classList.add('news');
          newsElement.innerHTML = `
          <div class="news__hover">
            <div class="news__text">
              <div class="news__titleandcity">
                <p></p>
                <p>${news.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="#">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${news.field_image}>
          </picture>
          `;
          this.newsListElement.appendChild(newsElement);
        });
      }
    },
  };
  app.initialize();
})();



//Renovatie

(() => {
  const app = {
    initialize() {
      this.renovatieData = null;
      this.cacheElements();
      this.loadRenovatie();
    },
    cacheElements() {
      this.renovatieListElement = document.querySelector('.renovatie');
    },
    async loadRenovatie() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl&field_project_type_target_id=16`,
        (data) => {
          this.renovatieData = data;
          this.generateUIForRenovatie();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForRenovatie() {
      if (this.renovatieData !== null && this.renovatieListElement !== null) {
        console.log(this.renovatieData);
        let renovatieElement = null;
        this.renovatieData.forEach((renovatie, index) => {
          renovatieElement = document.createElement('div');
          renovatieElement.classList.add('project');
          renovatieElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${renovatie.field_city}</p>
                <p>${renovatie.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${renovatie.field_image}>
          </picture>
          `;
          this.renovatieListElement.appendChild(renovatieElement);
        });
      }
    },
  };
  app.initialize();
})();



//Residentieel

(() => {
  const app = {
    initialize() {
      this.residentieelData = null;
      this.cacheElements();
      this.loadResidentieel();
    },
    cacheElements() {
      this.residentieelListElement = document.querySelector('.residentieel');
    },
    async loadResidentieel() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=17`,
        (data) => {
          this.residentieelData = data;
          this.generateUIForResidentieel();
        },
        (error) => {
          console.log(error);RenovatieNews
        });
    },
    generateUIForResidentieel() {
      if (this.residentieelData !== null && this.residentieelListElement !== null) {
        console.log(this.residentieelData);
        let residentieelElement = null;
        this.residentieelData.forEach((residentieel, index) => {
          residentieelElement = document.createElement('div');
          residentieelElement.classList.add('project');
          residentieelElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${residentieel.field_city}</p>
                <p>${residentieel.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${residentieel.field_image}>
          </picture>
          `;
          this.residentieelListElement.appendChild(residentieelElement);
        });
      }
    },
  };
  app.initialize();
})();

//utilitair

(() => {
  const app = {
    initialize() {
      this.utilitairData = null;
      this.cacheElements();
      this.loadutilitair();
    },
    cacheElements() {
      this.utilitairListElement = document.querySelector('.utilitair');
    },
    async loadutilitair() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=14`,
        (data) => {
          this.utilitairData = data;
          this.generateUIForutilitair();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForutilitair() {
      if (this.utilitairData !== null && this.utilitairListElement !== null) {
        console.log(this.utilitairData);
        let utilitairElement = null;
        this.utilitairData.forEach((utilitair, index) => {
          utilitairElement = document.createElement('div');
          utilitairElement.classList.add('project');
          utilitairElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${utilitair.field_city}</p>
                <p>${utilitair.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${utilitair.field_image}>
          </picture>
          `;
          this.utilitairListElement.appendChild(utilitairElement);
        });
      }
    },
  };
  app.initialize();
})();

//PPS/DBFM

(() => {
  const app = {
    initialize() {
      this.ppsdbfmData = null;
      this.cacheElements();
      this.loadppsdbfm();
    },
    cacheElements() {
      this.ppsdbfmListElement = document.querySelector('.ppsdbfm');
    },
    async loadppsdbfm() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl&field_project_type_target_id=15`,
        (data) => {
          this.ppsdbfmData = data;
          this.generateUIForppsdbfm();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForppsdbfm() {
      if (this.ppsdbfmData !== null && this.ppsdbfmListElement !== null) {
        console.log(this.ppsdbfmData);
        let ppsdbfmElement = null;
        this.ppsdbfmData.forEach((ppsdbfm, index) => {
          ppsdbfmElement = document.createElement('div');
          ppsdbfmElement.classList.add('project');
          ppsdbfmElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${ppsdbfm.field_city}</p>
                <p>${ppsdbfm.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${ppsdbfm.field_image}>
          </picture>
          `;
          this.ppsdbfmListElement.appendChild(ppsdbfmElement);
        });
      }
    },
  };
  app.initialize();
})();

//Industrieel

(() => {
  const app = {
    initialize() {
      this.industrieelData = null;
      this.cacheElements();
      this.loadIndustrial();
    },
    cacheElements() {
      this.industrieelListElement = document.querySelector('.industrieel');
    },
    async loadIndustrial() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?field_project_type_target_id=3`,
        (data) => {
          this.industrieelData = data;
          this.generateUIForNews();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForNews() {
      if (this.industrieelData !== null && this.industrieelListElement !== null) {
        console.log(this.industrieelData);
        let industrieelElement = null;
        this.industrieelData.forEach((industrieel, index) => {
          industrieelElement = document.createElement('div');
          industrieelElement.classList.add('project');
          industrieelElement.innerHTML = `
          <div class="project__hover">
            <div class="project__text">
              <div class="project__titleandcity">
                <p>${industrieel.field_city}</p>
                <p>${industrieel.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="/case-3-establis-CedricDeBlanck/projecten/utilitair/quatuor-building">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${industrieel.field_image}>
          </picture>
          `;
          this.industrieelListElement.appendChild(industrieelElement);
        });
      }
    },
  };
  app.initialize();
})();


//nieuws -> pers

(() => {
  const app = {
    initialize() {
      this.persData = null;
      this.cacheElements();
      this.loadpers();
    },
    cacheElements() {
      this.persListElement = document.querySelector('.pers');
    },
    async loadpers() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?field_news_type_target_id=1`,
        (data) => {
          this.persData = data;
          this.generateUIForNews();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForNews() {
      if (this.persData !== null && this.persListElement !== null) {
        console.log(this.persData);
        let persElement = null;
        this.persData.forEach((pers, index) => {
          persElement = document.createElement('div');
          persElement.classList.add('news');
          persElement.innerHTML = `
          <div class="news__hover">
            <div class="news__text">
              <div class="news__titleandcity">
                <p></p>
                <p>${pers.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="#">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${pers.field_image}>
          </picture>
          `;
          this.persListElement.appendChild(persElement);
        });
      }
    },
  };
  app.initialize();
})();

//nieuws -> nieuws

(() => {
  const app = {
    initialize() {
      this.nieuwsdata = null;
      this.cacheElements();
      this.loadnieuws();
    },
    cacheElements() {
      this.nieuwsListElement = document.querySelector('.nieuws');
    },
    async loadnieuws() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news?field_news_type_target_id=2`,
        (data) => {
          this.nieuwsdata = data;
          this.generateUIForNews();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForNews() {
      if (this.nieuwsdata !== null && this.nieuwsListElement !== null) {
        console.log(this.nieuwsdata);
        let nieuwsElement = null;
        this.nieuwsdata.forEach((pers, index) => {
          nieuwsElement = document.createElement('div');
          nieuwsElement.classList.add('news');
          nieuwsElement.innerHTML = `
          <div class="news__hover">
            <div class="news__text">
              <div class="news__titleandcity">
                <p></p>
                <p>${pers.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="#">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${pers.field_image}>
          </picture>
          `;
          this.nieuwsListElement.appendChild(nieuwsElement);
        });
      }
    },
  };
  app.initialize();
})();


//6 reasons -> projectleider

(() => {
  const app = {
    initialize() {
      this.leiderdata = null;
      this.cacheElements();
      this.loadleider();
    },
    cacheElements() {
      this.leiderListElement = document.querySelector('.projectleider');
    },
    async loadleider() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/jobs?langcode=nl`,
        (data) => {
          this.leiderdata = data;
          this.generateUIForNews();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForNews() {
      if (this.leiderdata !== null && this.leiderListElement !== null) {
        console.log(this.leiderdata);
        let leiderElement = null;
        this.leiderdata.forEach((leider, index) => {
          leiderElement = document.createElement('div');
          leiderElement.classList.add('news');
          leiderElement.innerHTML = `
          <div class="news__hover">
            <div class="news__text">
              <div class="news__titleandcity">
                <p></p>
                <p>${leider.title}</p>
              </div>
              <div class="read-more read-more-color-white">
                <a href="#">Lees meer <i class="fa fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>     
          <picture>
            <img src= http://www.establis.eu/${leider.field_image}>
          </picture>
          `;
          this.leiderListElement.appendChild(leiderElement);
        });
      }
    },
  };
  app.initialize();
})();






