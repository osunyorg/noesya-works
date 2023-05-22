const callToActions = document.querySelectorAll('.call_to_action--with-image');

class BlockCallToAction {
    constructor (block) {
        this.block = block;
        this.image = block.querySelector("img");

        this.listen();
    }
    listen() {

        ['scroll'].forEach(event => {
            window.addEventListener(event, this.onScroll.bind(this));
        });
    }
    initObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.requestAnimationFrame(this.parallax);
                } 
                else {
                    return;
                }
            });
          }, { threshold: 0});
        observer.observe(this.block);
    }
    onScroll() {
        this.initObserver();
    }
    parallax(frameCount) {
        // this.scrollPosition = window.pageYOffset;
        let y = window.pageYOffset;
        let mouv = (frameCount / 50) + (y / 10);
        const imageParallax = document.querySelector('.call_to_action--with-image img');
        console.log(imageParallax)

        imageParallax.style.transform = `translateY(${mouv}px)`;


    }
}

callToActions.forEach((cta) => {
    new BlockCallToAction(cta);
});
