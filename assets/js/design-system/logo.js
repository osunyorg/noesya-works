class Logo {
    constructor (selector) {
        this.element = document.querySelector(selector);
        this.hero = document.querySelector('.hero--with-image');

        if (!this.hero) {
            return;
        }
        
        this.heroHeight = this.hero.offsetHeight;
        
        this.listen();
    }

    listen () {
        this.element.classList.add('revert');

        window.addEventListener('resize', this.resize.bind(this));

        ['scroll'].forEach(event => {
            window.addEventListener(event, this.onScroll.bind(this));
        });
    }

    resize () {
        this.heroHeight = this.hero.offsetHeight;
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
