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

// Array containing all articles in their own objects:
const allPosts = [
    { linkFromIndex: '#', linkFromAllPosts: '#', author: 'Ethan Groene', authorImgFromIndex: './assets/images/ethan-groene.jpg', authorImgFromAllPosts: '../assets/images/ethan-groene.jpg', authorImgAlt: 'ethan-groene',  postTitle: 'How to Care for a Turtle', prevText: 'Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Wenn sich der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. So schreitet in dem engen Bretterhaus (Theater, Bühne).' }
]
//pubDate: (new Date('September 5, 2022')), pubDateNum: pubDate.getTime(),

// Var to get array of all sections where previews of posts should be displayed:
//let previewSections = document.getElementsByClassName('post-previews');
// Function to populate post previews on index.html:
// Function should only populate index.html with the first 3 (or so) posts from allPosts:
const popPostPreviews = () => {
    /* for (const previewSection of previewSections) {
        for (let i = 0; i < allPosts.length; i++) {
            previewSection.innerHTML +=
            '<div class="post-preview">'
            '<h1>' + post.postTitle + '</h1>'
            + '<div class="author-info-container">'
            + '<img  src=' + post.authorImg + 'alt=' + post.authorImgAlt
            + '<div class="preview-author-date">'
            + '<h2>'+ post.author + '</h2>'
            + '<header>' + post.pubDate + '</header>'
            + '</div>'
            + '</div>'
            + '<p>' + post.postText.substring(0, 50) + '...</p>'
            + '</div>'
        }
    } */
    for (let i = 0; i < allPosts.length; i++) {
            document.getElementById('post-previews-homepage').innerHTML +=
            '<div class="post-preview">'
            + '<h1>' + allPosts[i].postTitle + '</h1>'
            + '<div class="author-info-container">'
            + '<img  src="' + allPosts[i].authorImgFromIndex + '"' + 'alt="' + allPosts[i].authorImgAlt + '">'
            + '<div class="preview-author-date">'
            + '<h2>'+ allPosts[i].author + '</h2>'
            //+ '<header>' + allPosts[i].pubDate + '</header>'
            + '</div>'
            + '</div>'
            + '<p>' + allPosts[i].prevText + '...</p>'
            + '</div>'
        }
    }

// Function to populate post previews on loading of allposts.html (paths to article and images may differ):