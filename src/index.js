import App from './App.js';

const rootElem = document.getElementById("root");

function generatePage() {
    if (rootElem.childNodes.length) {
      rootElem.replaceChild(App(), rootElem.childNodes[0]);
    } else {
      rootElem.appendChild(App());
    }
};

window.onhashchange = generatePage;
generatePage();

