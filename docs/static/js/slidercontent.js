(() => {
  const app = {
    initialize() {
      this.sliderData = null;
      this.cacheElements();
      this.loadSlider();
    },
    cacheElements() {
      this.sliderListElement = document.querySelector('.slider');
    },
    loadSlider() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`../static/data/slider.json`,
        (data) => {
          this.sliderData = data;
          this.generateUIForSlider();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForSlider() {
      if (this.sliderData !== null && this.sliderListElement !== null) {
        console.log(this.sliderData);
        let sliderElement = null;
        this.sliderData.forEach((sliderdata, index) => {
          sliderElement = document.createElement('div');
          sliderElement.classList.add('slidercontent');
          sliderElement.innerHTML = `
          <div class="slider-image3">${slider.image}</div>
            <div class="header-text-top">
                <h2>${sliderdata.title}</h2>
                <div class="redline"></div>
                <div class="header-text-lees-meer">
                    <a class="read-more uppercase" href="#">${sliderdata.readmore} </a>
                    <i class="arrow-red fa fa-long-arrow-right"></i>
                </div>
            </div>

          `;
          this.sliderListElement.appendChild(sliderElement);
        });
      }
    },
  };
  app.initialize();
})();