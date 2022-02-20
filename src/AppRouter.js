import createElement from '../react/functions/createElement.js';
import {Router, Component} from '../react/index.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

function Page1() {
    const data = JSON.parse(localStorage.getItem("tableData") || "{}");
  
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
  
    const handleTdClick = (event) => {
      const td = event.currentTarget;
      const input = document.createElement("input");
      input.value = td.textContent;
      td.textContent = "";
      td.appendChild(input);
      td.removeEventListener("click", handleTdClick);
  
      input.addEventListener("blur", (event) => {
        const text = document.createTextNode(input.value);
        data[td.dataset.position] = input.value;
        localStorage.setItem("tableData", JSON.stringify(data));
        td.removeChild(input);
        td.appendChild(text);
      });
    };
  
    for (let i = 0; i < 5; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const td = document.createElement("td");
        td.dataset.position = i + "-" + j;
        td.addEventListener("click", handleTdClick);
        const text = document.createTextNode(
          data[i + "-" + j] ?? "Default value"
        );
        td.appendChild(text);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    return table;
}

function Page2() {
    const content = document.createTextNode('Yo');
    return content;
}

class AppRouter extends Component {
  constructor(){
    super();
  }

  toRender = () => {

    let paths = [
      {path: 'page1', component: createElement('div', null, 'Welcome')},
      {path: 'page2', component: createElement('div', null, 'page2')}
    ];

    const div = createElement('div', 
      { attributes: {id: 'main'}},
      Header,
      Router(paths),
      Footer
    );
    return div;
  };

}

export default new AppRouter();