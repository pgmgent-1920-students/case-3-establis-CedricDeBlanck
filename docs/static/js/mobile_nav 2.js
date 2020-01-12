(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.btnClick();
    },

    cacheElements () {
      this.filterElement = document.querySelector('.filter-nav');
      this.btnToggleElement = document.querySelector('.btn-toggle');
    },

    btnClick () {
      this.btnToggleElement.addEventListener('click', (ev) => {
        (this.filterElement.classList.contains('filter-isopen')) ? this.filterElement.classList.remove('filter-isopen') : this.filterElement.classList.add('filter-isopen');
      });
    },

  };
  app.initialize();
})();