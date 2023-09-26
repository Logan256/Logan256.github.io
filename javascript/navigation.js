
const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.querySelector('.navigation-items');

const headerTitle = document.querySelector('.header-title');

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNavigation.setAttribute('data-visible', "true");
    } else {
        primaryNavigation.setAttribute('data-visible', "false");
    }
})

const navItemWelcome = document.querySelector('.welcome-navigation');
const welcomeItems = document.querySelector('.welcome-items');

const navItemCode = document.querySelector('.code-navigation');
const codeItems = document.querySelector('.code-items');

const navItemMood = document.querySelector('.mood-navigation');
const moodItems = document.querySelector('.code-mood-items');

const navItemGame = document.querySelector('.game-navigation');
const gameItems = document.querySelector('.code-game-items');

const navItemPortfolio = document.querySelector('.portfolio-navigation');
const portfolioItems = document.querySelector('.code-portfolio-items');

const navItemArt = document.querySelector('.art-navigation');
const artItems = document.querySelector('.art-items');

const navItemAbout = document.querySelector('.about-navigation');
const aboutItems = document.querySelector('.about-items');

const artScroll = document.querySelector('.media-scroller-art');
const codeScroll = document.querySelector('.media-scroller');
const codeMoodScroll = document.querySelector('.media-scroller-mood');
const codeGameScroll = document.querySelector('.media-scroller-game');
const codePortfolioScroll = document.querySelector('.media-scroller-portfolio');

/* Welcome Items Show */
navItemWelcome.addEventListener('click', () => {
    const visibility = welcomeItems.getAttribute('data-visible');
    welcomeItems.setAttribute('data-visible', "true");

    codeItems.setAttribute('data-visible', "false");
    artItems.setAttribute('data-visible', "false");
    aboutItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");

    headerTitle.textContent = 'Hello, I\'m Logan';
});


/* Code Items Show */
navItemCode.addEventListener('click', () => {
    const visibility = codeItems.getAttribute('data-visible');
    codeItems.setAttribute('data-visible', "true");

    welcomeItems.setAttribute('data-visible', "false");
    artItems.setAttribute('data-visible', "false");
    aboutItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");
    gameItems.setAttribute('data-visible', "false");
    portfolioItems.setAttribute('data-visible', "false");

    // so scroll areas don't overlap
    codeScroll.style.right = '100px';
    artScroll.style.right = '-300px';
    codeMoodScroll.style.right = '-300px';
    codeGameScroll.style.right = '-300px';
    codePortfolioScroll.style.right = '-300px';

    headerTitle.textContent = 'Software Projects';
});

/* Code Mood Items Show */
navItemMood.addEventListener('click', function() {
    const visibility = moodItems.getAttribute('data-visible');
    moodItems.setAttribute('data-visible', "true");
    console.log("true");

    codeItems.setAttribute('data-visible', "false");

    // so scroll areas don't overlap
    codeMoodScroll.style.right = '100px';
    codeScroll.style.right = '-300px';
    artScroll.style.right = '-300px';
    codeGameScroll.style.right = '-300px';

    headerTitle.textContent = 'Mood Memo Project';
})

/* Game Items Show */
navItemGame.addEventListener('click', () => {
    const visibility = gameItems.getAttribute('data-visible');
    gameItems.setAttribute('data-visible', "true");
    console.log("true");

    codeItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");
    portfolioItems.setAttribute('data-visible', "false");

    // so scroll areas don't overlap
    codeGameScroll.style.right = '100px';
    codeScroll.style.right = '-300px';
    artScroll.style.right = '-300px';

    headerTitle.textContent = 'Mood Memo Project';
});

/* Portfolio Items Show */
navItemPortfolio.addEventListener('click', () => {
    const visibility = portfolioItems.getAttribute('data-visible');
    portfolioItems.setAttribute('data-visible', "true");
    console.log("true");

    codeItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");
    gameItems.setAttribute('data-visible', "false");

    // so scroll areas don't overlap
    codePortfolioScroll.style.right = '100px';
    codeScroll.style.right = '-300px';
    artScroll.style.right = '-300px';

    headerTitle.textContent = 'Mood Memo Project';
});


/* Art Items Show */
navItemArt.addEventListener('click', () => {
    const visibility = artItems.getAttribute('data-visible');
    artItems.setAttribute('data-visible', "true");

    welcomeItems.setAttribute('data-visible', "false");
    codeItems.setAttribute('data-visible', "false");
    aboutItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");
    gameItems.setAttribute('data-visible', "false");
    portfolioItems.setAttribute('data-visible', "false");

    // so scroll areas don't overlap
    artScroll.style.right = '100px';
    codeScroll.style.right = '-300px';
    codeMoodScroll.style.right = '-300px';
    
    headerTitle.textContent = 'Illustrations';
});

/* About Items Show */

navItemAbout.addEventListener('click', () => {
    const visibility = aboutItems.getAttribute('data-visible');
    aboutItems.setAttribute('data-visible', "true");

    welcomeItems.setAttribute('data-visible', "false");
    codeItems.setAttribute('data-visible', "false");
    artItems.setAttribute('data-visible', "false");
    moodItems.setAttribute('data-visible', "false");
    gameItems.setAttribute('data-visible', "false");
    portfolioItems.setAttribute('data-visible', "false");

    headerTitle.textContent = 'My Links and Resume';
});