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

const navItemAbout = document.querySelector('.about-navigation');
const aboutItems = document.querySelector('.about-items');

const codeScroll = document.querySelector('.media-scroller');
const codeMoodScroll = document.querySelector('.media-scroller-mood');
const codeGameScroll = document.querySelector('.media-scroller-game');
const codePortfolioScroll = document.querySelector('.media-scroller-portfolio');


const items = [welcomeItems, codeItems, moodItems, gameItems, portfolioItems, aboutItems];

const scrolls = [codeScroll, codeMoodScroll, codeGameScroll, codePortfolioScroll];

function hide(exception) {
    items.forEach(element => {
        if (element === exception) {
            element.setAttribute('data-visible', "true");
        } else {
            element.setAttribute('data-visible', "false");
        }
    });
}

function moveScroll(exception) {
    scrolls.forEach(element => {
        if (element === exception) {
            element.style.right = '100px';
        } else {
            element.style.right = '-300px';
        }
    })
}

/* Welcome Items Show */
navItemWelcome.addEventListener('click', () => {
    hide(welcomeItems);
    moveScroll(null);
    headerTitle.textContent = 'Hello, I\'m Logan';
});

/* Code Items Show */
navItemCode.addEventListener('click', () => {
    hide(codeItems);
    moveScroll(codeScroll);
    headerTitle.textContent = 'Software Projects';
});

navItemMood.addEventListener('click', () => {
    hide(moodItems);
    moveScroll(codeMoodScroll);
    headerTitle.textContent = 'Mood Memo Project';
})

navItemGame.addEventListener('click', () => {
    hide(gameItems);
    moveScroll(codeGameScroll);
    headerTitle.textContent = 'Itch.io Projects';
})

navItemPortfolio.addEventListener('click', () => {
    hide(portfolioItems);
    moveScroll(codePortfolioScroll);
    headerTitle.textContent = 'This Website';
})

navItemAbout.addEventListener('click', () => {
    hide(aboutItems);
    moveScroll(null);
    headerTitle.textContent = 'My Links and Resume';
})