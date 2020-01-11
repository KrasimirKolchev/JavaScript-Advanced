function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let p = createEl('p');
      p.textContent = word;
      p.style.display = 'none';
      let div = createEl('div');
      div.appendChild(p);
      div.addEventListener('click', showParagraph);
      content.appendChild(div);
   }

   function createEl(el) {
      return document.createElement(el);
   }

   function showParagraph() {
      this.children[0].style.display = 'block';
   }
}