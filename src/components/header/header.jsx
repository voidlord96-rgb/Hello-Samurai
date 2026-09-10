import { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [visible, setVisible] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");

  const title = "hello samurai";
  const subtitle = "i am JAYENDRA AWASTHi";

  useEffect(() => {
    setVisible(true);

    let titleIndex = 0;
    let subtitleIndex = 0;

    const titleTyping = setInterval(() => {
      setTitleText(title.slice(0, titleIndex + 1));

      titleIndex++;

      if (titleIndex === title.length) {
        clearInterval(titleTyping);

        const subtitleTyping = setInterval(() => {
          setSubtitleText(subtitle.slice(0, subtitleIndex + 1));

          subtitleIndex++;

          if (subtitleIndex === subtitle.length) {
            clearInterval(subtitleTyping);
          }
        }, 100);
      }
    }, 150);

    return () => {
      clearInterval(titleTyping);
    };
  }, []);

  return (
    <header className="header" id="home">
      <h1
        className={`header__title ${
          visible ? "header--visible" : ""
        } ${titleText === title ? "header__title--glitch" : ""}`}
      >
        {titleText}
      </h1>

      <p className={`header__subtitle ${visible ? "header--visible" : ""}`}>
        {subtitleText}
      </p>
    </header>
  );
}

export default Header;
