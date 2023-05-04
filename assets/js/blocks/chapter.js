const galleries = document.querySelectorAll('.block-chapter');

class BlockChapter {
  constructor (block) {
      this.block = block;
      this.title = block.querySelector("h2");
      
      this.listen();
  }

  listen () {
      if (this.title.innerHTML.includes("Crédits")) {
        this.block.classList.add('block-credits')
      } 
  }
}

galleries.forEach((chapter) => {
  new BlockChapter(chapter);
});
