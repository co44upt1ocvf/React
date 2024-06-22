import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>Спасибо, что посетили наш сайт :3</h3>
        <p>
          Если вам понравился колхозненький дизайн, то задонатьте автору на кофе, иначе это был последний сайт, который автор мог написать...
        </p>
      </div>
      <div className="contacts">
        <div>
          <a className="link" href="https://vk.com/podmpt" target="_blank">
            <img className="vk" src="https://i.postimg.cc/HLwztCZp/pngwing-com.png" alt="ERROR" />
          </a>
        </div>
        <div>
          <a className="link" href="https://t.me/+F6jFCG7buWg3NWZi" target="_blank">
            <img className="tg" src="https://i.postimg.cc/9fht0nWs/pngwing-com-1.png" alt="ERROR" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
