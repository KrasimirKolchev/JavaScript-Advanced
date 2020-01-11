function createArticle() {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    let title = document.getElementById('createTitle');
    let text = document.getElementById('createContent');
    let articles = document.getElementById('articles');

    if (title === null && text === null && articles === null) {
        throw new Error("Missing arguments");
    }

    if (title.value.trim().length >= 1 && text.value.trim().length >= 1) {
        h3.innerHTML = title.value;
        p.innerHTML = text.value;

        article.appendChild(h3);
        article.appendChild(p);
        articles.appendChild(article);

        title.value = "";
        text.value = "";
    }

}