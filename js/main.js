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
        switcher[1].classList.add(active); // If dark class is set, active class is the second switcher btn (from querySelector array)
    } else {
        switcher[0].classList.add(active); // If light class is set, active class is the second switcher btn (from querySelector array)
    }
}

// On click of icon in theme tab, open class will be added/removed from theme panel. In other words, this makes the toggle options display or not display.
toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement; // first parentElement is theme-panel-body, second is theme-panel 
    if (!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
})

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
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Brennan Huff', authorImgFromIndex: './assets/images/brennan-huff.jpg', authorImgFromAllPosts: '../assets/images/brennan-huff.jpg', authorImgAlt: 'brennan-huff', pubDate: (new Date('September 7, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('September 7, 2022').getTime()), postTitle: 'Why I Still Live with My Mom As a 39-Year-Old', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Charles Barkley', authorImgFromIndex: './assets/images/charles-barkley.jpg', authorImgFromAllPosts: '../assets/images/charles-barkley.jpg', authorImgAlt: 'charles-barkley', pubDate: (new Date('September 5, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('September 5, 2022').getTime()), postTitle: 'How I Survived Playing an NBA Game while Drunk', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Pakalu Pitito', authorImgFromIndex: './assets/images/pakalu-pitito.jpg', authorImgFromAllPosts: '../assets/images/pakalu-pitito.jpg', authorImgAlt: 'pakalu-pitito', pubDate: (new Date('August 28, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 28, 2022').getTime()), postTitle: 'How to Run a Convenience Store', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Pat McAfee', authorImgFromIndex: './assets/images/pat-mcafee.jpg', authorImgFromAllPosts: '../assets/images/pat-mcafee.jpg', authorImgAlt: 'pat-mcafee', pubDate: (new Date('August 14, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 14, 2022').getTime()), postTitle: 'How I Beat the Piss aht of ESPN in Ratings Every Single Day', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Dan Campbell', authorImgFromIndex: './assets/images/dan-campbell.jpg', authorImgFromAllPosts: '../assets/images/dan-campbell.jpg', authorImgAlt: 'kate-hudson', pubDate: (new Date('August 5, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 5, 2022').getTime()), postTitle: 'How I Brought Hope Back to a Historically God-Awful Team & a Miserable City', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' },
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Ethan Groene', authorImgFromIndex: './assets/images/ethan-groene.jpg', authorImgFromAllPosts: '../assets/images/ethan-groene.jpg', authorImgAlt: 'ethan-groene', pubDate: (new Date('August 3, 2022').toLocaleString("en-US", {day: "numeric", month: "long", year: "numeric"})), dateNum: (new Date('August 3, 2022').getTime()), postTitle: 'How to Care for a Dog', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' }
]

// Var to get array of all sections where previews of posts should be displayed:
// Function to populate post previews on index.html:
// Function should only populate index.html with the first 3 (or so) posts from allPosts:
const popPostPreviewsHomepage = () => {
    for (let i = 0; i < allPostPreviews.length - (allPostPreviews.length - 5); i++) {
            document.getElementById('post-previews-homepage').innerHTML +=
            '<div class="post-preview reveal">'
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
        document.getElementById('post-previews-all').innerHTML +=
        '<div class="post-preview reveal active" data-author="' + displayedPrevs[i].author + '"'
        + 'data-date="' + displayedPrevs[i].pubDate + '"'
        + 'data-title="' + displayedPrevs[i].postTitle + '"'
        + 'data-text="' + displayedPrevs[i].prevText + '"'
        + '>'
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
        document.getElementById('post-previews-all').innerHTML +=
        '<div class="post-preview reveal" data-author="' + displayedPrevs[i].author + '"'
        + 'data-date="' + displayedPrevs[i].pubDate + '"'
        + 'data-title="' + displayedPrevs[i].postTitle + '"'
        + 'data-text="' + displayedPrevs[i].prevText + '"'
        + '>'
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

// FUNCTIONALITY FOR SEARCH FEATURE ON ALL POSTS PAGES
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener("keyup", (e) => {
    // Declare & assignt the event's target to a variable, which is whatever is typed into the search bar:
    let value = e.target.value.trim().toLowerCase();

    const postPreviews = document.getElementsByClassName('post-preview');

    let totalResults = 0;
    const resultsMessageLocations = document.getElementsByClassName('results-message');

    // Check if input exists & is greater than 0:
    if (value && value.trim().length > 0) {
        for (const prev of postPreviews) {
            if (prev.dataset.author.toLowerCase().trim().includes(value)
            || prev.dataset.date.toLowerCase().trim().includes(value)
            || prev.dataset.title.toLowerCase().trim().includes(value)
            || prev.dataset.text.toLowerCase().trim().includes(value)) {
                prev.style.display = 'block';
                prev.style.opacity = '1';
                totalResults += 1;
                for (let resultsMessage of resultsMessageLocations) {
                    resultsMessage.style.display = 'block';
                    resultsMessage.textContent = `Your search yielded ${totalResults} result(s).`;
                    resultsMessage.style.margin = '4% 0';
                    resultsMessage.style.textAlign = 'center';
                    resultsMessage.style.color = 'var(default-text-color)';
                }
            } else {
                totalResults += 0;
                prev.style.display = 'none';
                for (let resultsMessage of resultsMessageLocations) {
                    resultsMessage.classList.add('rm-active');
                    if (totalResults === 0) {
                        resultsMessage.textContent = `We couldn't find what you're looking for. Make sure your spelling is correct & try again.`;
                    }
                }
            }
        }
    } else {
        totalResults = 0;
        for (let resultsMessage of resultsMessageLocations) {
            resultsMessage.style.display = 'none';
        }
        for (const prev of postPreviews) {
            prev.style.display = 'block';
        }
    }
    const clearSearchIcon = document.getElementById('clear-search-icon');
    clearSearchIcon.addEventListener("click", function clearSearchBox() {
        totalResults = 0;
        for (let resultsMessage of resultsMessageLocations) {
            resultsMessage.style.display = 'none';
        }
        for (const prev of postPreviews) {
            prev.style.display = 'block';
        }
    })
})