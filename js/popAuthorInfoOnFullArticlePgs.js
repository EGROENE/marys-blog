// Function to populate article & author info on full-article pages
// Should be called upon loading of the full-article page
const authorInfoArea = document.getElementById("author-info");
const popAuthorInfoOnFullArticlePages = (articleNumber) => {
    for (let i = 0; i < 1; i++) {
        authorInfoArea.innerHTML += "<div class='author-info-full-article-page'>"
        + "<img src='" + allPostPreviews[articleNumber - 1].authorImgFromFullArticle + "'>"
        + "<div class='preview-author-date full-article-page'>"
        + "<h2>" + allPostPreviews[articleNumber - 1].author + "</h2>"
        + "<header>" + allPostPreviews[articleNumber - 1].pubDate + "</header>"
        + "</div>"
        + "</div>"
    }
}