// START JS FOR TOGGLING OF THEME
// Vars pertaining to theme:
const dark = 'dark';
const light = 'light';
const theme = 'theme';
const dataTheme = 'data-theme';
const currentTheme = localStorage.getItem(theme);
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const open = 'open';
const active = 'active';
const root = document.documentElement;
const toggleTheme = document.querySelector(themeTab);

// Func to populate theme button container:
const themeBtnContainers = document.getElementsByClassName('theme-button-container');
const popThemeBtnContainer = () => {
    for (let container of themeBtnContainers) {
        container.innerHTML += '<button title="Dark Mode" data-toggle="dark" class="switcher-btn"><i id="to-dark-btn" class="fas fa-moon"></i></button>'
        + '<button title="Light Mode" data-toggle="light" class="switcher-btn"><i id="to-light-btn" class="fas fa-sun"></i></button>'
    }
}
popThemeBtnContainer();
const switcher = document.querySelectorAll(switcherBtn);

// Function to remove active class if already present, then set the active class:
const setActive = (elem, selector) => {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
    elem.classList.add(active);
}

// Function to set the theme:
const setTheme = (value) => {
    if (value === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
}
if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme); // Set the data theme to the current theme (dependent on user choice):
    // Style both toggle buttons, which each have the .switcher-btn class, by default to the active class:
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    })
    // If the dark theme is set, PAGE LOADS with the active class added to its class list. Active styles the button that corresponds to active theme.
    if (currentTheme === dark) {
        switcher[0].classList.add(active); // If dark class is set, active class is the second switcher btn (from querySelector array)
    } else {
        switcher[1].classList.add(active); // If light class is set, active class is the second switcher btn (from querySelector array)
    }
}

// For each element with switcher-btn as a class, the particular toggle button is set to active class and theme is set to either light or dark, which are the two datasets ([data-toggle="light"] & [data-toggle="dark"] available)
for (const elem of switcher) {
    elem.addEventListener('click', function() {
        const toggle = this.dataset.toggle; // dataset corresponds to data in data-toggle
        // set active state:
        setActive(elem, switcherBtn); // Upon click of select toggle btn, active class is added to it. Style of btn changes, depending on if its active or not. Without this, theme toggling is still possible, but the button of the selected theme stays the same as it was when page originally loaded.
        setTheme(toggle); // sets theme to the option the user selects
    })
}
// END JS FOR TOGGLING OF THEME

// START FUNC TO POPULATE (ALMOST) UNIVERSAL SOCIALS PANEL
const socialsPanels = document.getElementsByClassName('socials-panel');
const popSocialsPanel = () => {
    for (let socialsPanel of socialsPanels) {
        socialsPanel.innerHTML += "<a id='socials-panel-fb' href='#' title='Facebook'><i class='fa fa-facebook-f'></i></a>"
        + "<a id='socials-panel-tw' href='#' title='Twitter'><i class='fa fa-twitter'></i></a>"
        + "<a id='socials-panel-li' href='#' title='LinkedIn'><i class='fab fa-linkedin-in'></i></a>"
        + "<a id='socials-panel-ig' href='#' title='Instagram'><i class='fab fa-instagram'></i></a>"
    }
}
popSocialsPanel();
// END FUNC TO POPULATE (ALMOST) UNIVERSAL SOCIALS PANEL

// START JS FOR ANIMATING POST PREVIEWS ON SCROLL
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load:
reveal();
// END JS FOR ANIMATING POST PREVIEWS ON SCROLL

// Array containing all article previews in their own objects:
const allPostPreviews = [
    { linkFromIndex: './pages/full-articles/1-how-to-care-for-a-dog.html', linkFromAllPosts: './full-articles/1-how-to-care-for-a-dog.html', linkFromTopicPages: '../full-articles/1-how-to-care-for-a-dog.html', author: 'Ethan Groene', authorImgFromIndex: './assets/images/ethan-groene.jpg', authorImgFromAllPosts: '../assets/images/ethan-groene.jpg', authorImgFromFullArticleAndTopicPages: '../../assets/images/ethan-groene.jpg', authorImgAlt: 'ethan-groene', pubDate: (new Date('August 3, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 3, 2022').getTime()), postTopic: 'Aging', topicLinkFromHomepage: './pages/topic-pages/topic-aging.html', topicLinkFromAllPostsPages: './topic-pages/topic-aging.html', postTitle: 'How to Care for a Dog', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: './pages/full-articles/2-how-i-brought-hope-back-to-a-historically-god-awful-team-and-a-miserable-city.html', linkFromAllPosts: './full-articles/2-how-i-brought-hope-back-to-a-historically-god-awful-team-and-a-miserable-city.html', author: 'Dan Campbell', linkFromTopicPages: '../full-articles/2-how-i-brought-hope-back-to-a-historically-god-awful-team-and-a-miserable-city.html', authorImgFromIndex: './assets/images/dan-campbell.jpg', authorImgFromAllPosts: '../assets/images/dan-campbell.jpg', authorImgFromFullArticleAndTopicPages: '../../assets/images/dan-campbell.jpg', authorImgAlt: 'dan-campbell', pubDate: (new Date('August 5, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 5, 2022').getTime()), postTopic: 'Career', topicLinkFromHomepage: '', topicLinkFromAllPostsPages: './topic-pages/topic-career.html', postTitle: 'How I Brought Hope Back to a Historically God-Awful Team & a Miserable City', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', linkFromTopicPages: '#', author: 'Pat McAfee', authorImgFromIndex: './assets/images/pat-mcafee.jpg', authorImgFromAllPosts: '../assets/images/pat-mcafee.jpg', authorImgFromFullArticleAndTopicPages: '#', authorImgAlt: 'pat-mcafee', pubDate: (new Date('August 14, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 14, 2022').getTime()), postTopic: 'Motivation', topicLinkFromHomepage: '#', topicLinkFromAllPostsPages: '#', postTitle: 'How I Beat the Piss aht of ESPN in Ratings Every Single Day', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Pakalu Pitito', authorImgFromIndex: './assets/images/pakalu-pitito.jpg', authorImgFromAllPosts: '../assets/images/pakalu-pitito.jpg', authorImgFromFullArticleAndTopicPages: '#', authorImgAlt: 'pakalu-pitito', pubDate: (new Date('August 28, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 28, 2022').getTime()), postTopic: 'Career', topicLinkFromHomepage: '#', topicLinkFromAllPostsPages: '#', postTitle: 'How to Run a Convenience Store', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', linkFromTopicPages: '#', author: 'Charles Barkley', authorImgFromIndex: './assets/images/charles-barkley.jpg', authorImgFromAllPosts: '../assets/images/charles-barkley.jpg', authorImgFromFullArticleAndTopicPages: '#', authorImgAlt: 'charles-barkley', pubDate: (new Date('September 5, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('September 5, 2022').getTime()), postTopic: 'Motivation', topicLinkFromHomepage: '#', topicLinkFromAllPostsPages: '#', postTitle: 'How I Survived Playing an NBA Game while Drunk', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: './pages/full-articles/6-why-i-still-live-with-my-mom-as-a-39-year-old.html', linkFromAllPosts: './full-articles/6-why-i-still-live-with-my-mom-as-a-39-year-old.html', linkFromTopicPages: '../full-articles/6-why-i-still-live-with-my-mom-as-a-39-year-old.html', author: 'Brennan Huff', authorImgFromIndex: './assets/images/brennan-huff.jpg', authorImgFromAllPosts: '../assets/images/brennan-huff.jpg', authorImgFromFullArticleAndTopicPages: '../../assets/images/brennan-huff.jpg', authorImgAlt: 'brennan-huff', pubDate: (new Date('September 7, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('September 7, 2022').getTime()), postTopic: 'Aging', topicLinkFromHomepage: './pages/topic-pages/topic-aging.html', topicLinkFromAllPostsPages: './topic-pages/topic-aging.html', postTitle: 'Why I Still Live with My Mom As a 39-Year-Old', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' }
]

// Var to get array of all sections where previews of posts should be displayed:
// Function to populate post previews on index.html:
// Function should only populate index.html with the first 3 (or so) posts from allPosts:
const popPostPreviewsHomepage = () => {
    // Since post prevs are added to end of allPostPrevs arr as time goes on, the order needs to be reversed on homepage if you want to display from new to old:
    allPostPreviews.sort((a, b) => {
        return b.dateNum - a.dateNum;
    })
    for (let i = 0; i < allPostPreviews.length - (allPostPreviews.length - 5); i++) {
            document.getElementById('post-previews-container').innerHTML +=
            '<div class="post-preview reveal">'
            + '<a class="prev-topic-link" href="' + allPostPreviews[i].topicLinkFromHomepage + '">'
            + allPostPreviews[i].postTopic + '</a>'
            + '<a href="' + allPostPreviews[i].linkFromIndex + '">'
            + '<h1>' + allPostPreviews[i].postTitle + '</h1>'
            + '<div class="author-info-container">'
            + '<img  src="' + allPostPreviews[i].authorImgFromIndex + '"' + 'alt="' + allPostPreviews[i].authorImgAlt + '">'
            + '<div class="preview-author-date">'
            + '<h2>'+ allPostPreviews[i].author + '</h2>'
            + '<header>' + allPostPreviews[i].pubDate + '</header>'
            + '</div>'
            + '</div>'
            + '<p>' + allPostPreviews[i].prevText + '... ' + '<span class="read-more-link">Read More</span>' + '</p>'
            + '</a>'
            + '</div>'
    }
}

// Init array to store items from allPostPrevs that have been displayed on the site:
let displayedPrevs = [];

// Function to populate post previews on loading of allposts.html (paths to article and images may differ):
const ascending = 'ascending';
const descending = 'descending';
const popPostPreviewsAll = (order) => {
    if (order === ascending) {
        allPostPreviews.sort((a, b) => {
            return a.dateNum - b.dateNum;
        })
    } else if (order === descending) {
        allPostPreviews.sort((a, b) => {
            return b.dateNum - a.dateNum;
        })
    }
    // Automatically display first prev:
    for (let i = 0; i < 1; i++) {
        displayedPrevs.push(allPostPreviews[i]);
        document.getElementById('post-previews-container').innerHTML +=
        '<div class="post-preview reveal active" data-author="' + displayedPrevs[i].author + '"'
        + 'data-date="' + displayedPrevs[i].pubDate + '"'
        + 'data-title="' + displayedPrevs[i].postTitle + '"'
        + 'data-text="' + displayedPrevs[i].prevText + '"'
        + '>'
        + '<a class="prev-topic-link" href="' + displayedPrevs[i].topicLinkFromAllPostsPages +'">' 
        + displayedPrevs[i].postTopic + '</a>'
        + '<a href="' + displayedPrevs[i].linkFromAllPosts + '">'
        + '<h1>' + displayedPrevs[i].postTitle + '</h1>'
        + '<div class="author-info-container">'
        + '<img  src="' + displayedPrevs[i].authorImgFromAllPosts + '"' + 'alt="' + displayedPrevs[i].authorImgAlt + '">'
        + '<div class="preview-author-date">'
        + '<h2>'+ displayedPrevs[i].author + '</h2>'
        + '<header>' + displayedPrevs[i].pubDate + '</header>'
        + '</div>'
        + '</div>'
        + '<p>' + displayedPrevs[i].prevText + '... ' + '<span class="read-more-link">Read More</span>' + '</p>'
        + '</a>'
        + '</div>'
    }
    // Populate rest of prevs:
    for (let i = 1; i < allPostPreviews.length; i++) {
        displayedPrevs.push(allPostPreviews[i]);
        document.getElementById('post-previews-container').innerHTML +=
        '<div class="post-preview reveal" data-author="' + displayedPrevs[i].author + '"'
        + 'data-date="' + displayedPrevs[i].pubDate + '"'
        + 'data-title="' + displayedPrevs[i].postTitle + '"'
        + 'data-text="' + displayedPrevs[i].prevText + '"'
        + '>'
        + '<a class="prev-topic-link" href="' + displayedPrevs[i].topicLinkFromAllPostsPages + '">' 
        + displayedPrevs[i].postTopic + '</a>'
        + '<a href="' + displayedPrevs[i].linkFromAllPosts + '">'
        + '<h1>' + displayedPrevs[i].postTitle + '</h1>'
        + '<div class="author-info-container">'
        + '<img  src="' + displayedPrevs[i].authorImgFromAllPosts + '"' + 'alt="' + displayedPrevs[i].authorImgAlt + '">'
        + '<div class="preview-author-date">'
        + '<h2>'+ displayedPrevs[i].author + '</h2>'
        + '<header>' + displayedPrevs[i].pubDate + '</header>'
        + '</div>'
        + '</div>'
        + '<p>' + displayedPrevs[i].prevText + '... ' + '<span class="read-more-link">Read More</span>' + '</p>'
        + '</a>'
        + '</div>'
    }
}

// Populate topic-page prevs:
// Function param should be equal to particular topic
// Function should only be called on the topic pages
const topicPrevsAreas = document.getElementsByClassName('display-topic-articles');
const popTopicPagePrevs = (topic) => {
    // Populate first prev:
    for (let i = 0; i < 1; i++) {
        if (topic == allPostPreviews[i].postTopic.toLowerCase()) {
            for (let topicPrevArea of topicPrevsAreas) {
                topicPrevArea.innerHTML += '<div class="post-preview reveal active" data-author="' + allPostPreviews[i].author + '"'
                + 'data-date="' + allPostPreviews[i].pubDate + '"'
                + 'data-title="' + allPostPreviews[i].postTitle + '"'
                + 'data-text="' + allPostPreviews[i].prevText + '"'
                + '>'
                + '<a href="' + allPostPreviews[i].linkFromTopicPages + '">'
                + '<h1>' + allPostPreviews[i].postTitle + '</h1>'
                + '<div class="author-info-container">'
                + '<img  src="' + allPostPreviews[i].authorImgFromFullArticleAndTopicPages + '"' + 'alt="' + allPostPreviews[i].authorImgAlt + '">'
                + '<div class="preview-author-date">'
                + '<h2>'+ allPostPreviews[i].author + '</h2>'
                + '<header>' + allPostPreviews[i].pubDate + '</header>'
                + '</div>'
                + '</div>'
                + '<p>' + allPostPreviews[i].prevText + '... ' + '<span class="read-more-link">Read More</span>' + '</p>'
                + '</a>'
                + '</div>'
            }
        }
    }
    // Populate rest of prevs:
    for (let i = 1; i < allPostPreviews.length; i++) {
        if (topic == allPostPreviews[i].postTopic.toLowerCase()) {
            for (let topicPrevArea of topicPrevsAreas) {
                topicPrevArea.innerHTML += '<div class="post-preview reveal" data-author="' + allPostPreviews[i].author + '"'
                + 'data-date="' + allPostPreviews[i].pubDate + '"'
                + 'data-title="' + allPostPreviews[i].postTitle + '"'
                + 'data-text="' + allPostPreviews[i].prevText + '"'
                + '>'
                + '<a href="' + allPostPreviews[i].linkFromAllPosts + '">'
                + '<h1>' + allPostPreviews[i].postTitle + '</h1>'
                + '<div class="author-info-container">'
                + '<img  src="' + allPostPreviews[i].authorImgFromFullArticleAndTopicPages + '"' + 'alt="' + allPostPreviews[i].authorImgAlt + '">'
                + '<div class="preview-author-date">'
                + '<h2>'+ allPostPreviews[i].author + '</h2>'
                + '<header>' + allPostPreviews[i].pubDate + '</header>'
                + '</div>'
                + '</div>'
                + '<p>' + allPostPreviews[i].prevText + '... ' + '<span class="read-more-link">Read More</span>' + '</p>'
                + '</a>'
                + '</div>'
            }
        }
    }
}

// Function to populate footer social links:
const footer = document.querySelector('footer');
const popFooterSocials = () => {
    footer.innerHTML += "<div id='socials'>"
    + "<a href='#' title='Facebook'><i class='fab fa-facebook-square'></i></a>"
    + "<a href='#' title='Twitter'><i class='fa fa-twitter'></i></a>"
    + "<a href='#' title='LinkedIn'><i class='fab fa-linkedin-in'></i></a>"
    + "<a href='#' title='Instagram'><i class='fab fa-instagram'></i></a>"
    + "</div>"
}
popFooterSocials();

// Functionality to populate global header of full-articles & topic pages:
const globalHeader = document.getElementById('global-header');
const popGlobalHeaderOnFAAndTopicPages = () => {
    globalHeader.innerHTML += "<div id='global-header-logo-and-headings'>"
    + "<a href='../../index.html' id='logo-part'>"
    + "<img src='../../assets/images/flower-logo.png' alt='header-flower-logo'>"
    + "<div id='logo-headers'>"
    + "<header>Mary's Blog</header>"
    + "<header>a place of healing</header>"
    + "</div>"
    + "</a>"
    + "</div>"
    + "<nav id='global-header-nav'>"
    + "<ul>"
    + "<li>"
    + "<a href='../all-posts-descending.html'>All Posts</a>"
    + "</li>"
    + "<li>"
    + "<a href='../about.html'>About</a>"
    + "</li>"
    + "<li>"
    + "<a href='../contact.html'>Contact</a>"
    + "</li>"
    + "</ul>"
    + "</nav>"
}

// Functionality to pop article title on full-article pages:
const articleTitleOnFAPage = document.getElementById('article-title-fa-pg');
const articleTitleOnFAPages = (articleNumber) => {
    for (let i = 0; i < 1; i++) {
        articleTitleOnFAPage.textContent += allPostPreviews[articleNumber - 1].postTitle
    } 
}

// Functionality to populate share-this-btns div at bottom of every article on full-article pages:
const shareBtnsAreas = document.getElementsByClassName('share-this-btns');
const popShareThisBtnsArea = () => {
    for (let shareBtnsArea of shareBtnsAreas) {
        shareBtnsArea.innerHTML += "<header>Share this article!</header>"
        + "<div class='sharethis-inline-share-buttons'></div>"
    }
}
popShareThisBtnsArea();