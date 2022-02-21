import { Component, CreateElement } from '../../react/index.js';
import createElement from '../../react/functions/createElement.js';

const REACT_LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

class Header extends Component {
    constructor(){
      super();
    }

    logo = () => {
      const img = createElement('img', {attributes: {src: REACT_LOGO}});
      const a = CreateElement('a', { attributes: {'href': '#home'}}, img);
      return a;
    };

    toRender = () => {

      const li = createElement(
        'div', 
        null, 
        createElement('a', { attributes: { href: '#home'}}, 'HOME' ),
        createElement('a', { attributes: { href: '#pokedex'}}, 'Pokedex' ),
        createElement('a', { attributes: { href: '#page2'}}, 'page 2' )
      );

      const header = createElement(
        'div', 
        { attributes: {id: 'header'}},
        this.logo(),
        li
      );
      return header;
    };
  
  }
  
  export default new Header();