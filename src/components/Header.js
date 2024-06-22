import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h4 className="nameheader">Подслушано МПТ</h4>
      <div>
        <a className="link" href="http://data.seapps.ru/block/show/11506910" target="_blank">
          <img className="file" src="https://i.postimg.cc/9Fc4nwm5/image.png" alt="ERROR" />
        </a>
      </div>
    </header>
  );
}

export default Header;
