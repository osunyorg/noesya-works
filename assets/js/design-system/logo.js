class Logo {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.hero = document.querySelector('.hero--with-image');
        this.heroHeight = this.hero.offsetHeight;

        if (!this.hero) {
            return;
        }
        
        this.listen();
    }

    listen () {
        ['scroll'].forEach(event => {
            window.addEventListener(event, this.onScroll.bind(this));
        });
    }

    onScroll () {
        if (window.scrollY < this.heroHeight) {
            this.element.classList.add('revert');
        } else {
            this.element.classList.remove('revert');
        }
    }
}

export default new Logo('header#document-header a.logo');
