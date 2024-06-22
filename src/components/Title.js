import React from 'react';
import '../styles/Title.css';

function Title() {
  return (
    <div className="title">
      <img className="logo" src="https://i.postimg.cc/rmJY1bbB/logo.png" alt="ERROR" />
      <h2>Добро пожаловать на сайт Подслушано МПТ!</h2>
      <p>
        Мы хотим дать тебе пару рекомендаций, которые помогут сделать твою учебу легче и приятнее. Рекомендации сугубо субъективные, но основаны на опыте.
      </p>
    </div>
  );
}

export default Title;
