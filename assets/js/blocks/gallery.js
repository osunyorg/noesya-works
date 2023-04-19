const galleries = document.querySelectorAll('.block-gallery');

class BlockGallery {
    constructor (block) {
        this.block = block;
        this.content = this.block.querySelector('.gallery');
        this.items = this.content.querySelectorAll('figure');

        this.listen();
    }

    listen () {

        this.items.forEach((item) => {
          if (item.innerText.includes("full")) {
            item.setAttribute("aria-hidden", "true");
            item.classList.add("cover");
          } 
        });
    }
}

galleries.forEach((gallery) => {
    new BlockGallery(gallery);
});
