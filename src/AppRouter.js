import {Router} from '../react/index.js';

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

export default function AppRouter() {
    const div = document.createElement('div');
    
    const header = document.createTextNode('HEADER');
    div.appendChild(header);

    let paths = [
        {path: 'home', component: Page1()},
        {path: 'yo', component: Page2()}
    ];
    let res = Router(paths);
    console.log(res)
    div.appendChild(res);

    const footer = document.createTextNode('FOOTER');
    div.appendChild(footer);

    return div;
}
