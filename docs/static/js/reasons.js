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
          this.generateUIForDiensten();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForDiensten() {
      if (this.reasonData !== null && this.reasonListElement !== null) {
        console.log(this.reasonData);
        let reasonElement = null;
        this.reasonData.forEach((reasons, index) => {
          reasonElement = document.createElement('div');
          reasonElement.innerHTML = `
          <div class="reason">
          <div class="reasons_text">
          ${reasons.title}
          <div class="red_line"></div>
          ${reasons.text}
          ${reasons.solliciteer}
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