// import "./social.css";

// import socialIcon1 from "../img/Vector.png";
// import socialIcon2 from "../img/Vector (1).png";
// import socialIcon3 from "../img/Vector (2).png";
// import socialIcon4 from "../img/Vector (3).png";

// function Social() {
//   return (
//     <aside className="social">
//       <img src={socialIcon1} alt="social icon 1" className="social__icon" />
//       <img src={socialIcon2} alt="social icon 2" className="social__icon" />
//       <img src={socialIcon3} alt="social icon 3" className="social__icon" />
//       <img src={socialIcon4} alt="social icon 4" className="social__icon" />
//     </aside>
//   );
// }

// export default Social;



import "./social.css";

import socialIcon1 from "../img/Vector.png";
import socialIcon2 from "../img/Vector (1).png";
import socialIcon3 from "../img/Vector (2).png";
import socialIcon4 from "../img/Vector (3).png";

const socialLinks = [
  {
    image: socialIcon1,
    name: "GitHub",
    link: "#",
  },
  {
    image: socialIcon2,
    name: "Telegram",
    link: "#",
  },
  {
    image: socialIcon3,
    name: "LinkedIn",
    link: "#",
  },
  {
    image: socialIcon4,
    name: "Instagram",
    link: "#",
  },
];

function Social() {
  return (
    <aside className="social">
      {socialLinks.map((social, index) => (
        <a
          href={social.link}
          className="social__link"
          key={social.name}
          style={{ "--delay": `${index * 0.15}s` }}
          aria-label={social.name}
        >
          <img
            src={social.image}
            alt={social.name}
            className="social__icon"
          />
        </a>
      ))}
    </aside>
  );
}

export default Social;