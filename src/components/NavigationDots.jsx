import React from "react";

function NavigationDots({ active }) {
  const links = ["home", "about", "work", "skills", "contact"];
  return (
    <div className="app__navigation">
      {links.map((link, index) => (
        <a
          href={`#${link}`}
          key={link + index}
          className="app__navigation-dot"
          style={active === link ? { color: "var(--red-color)" } : {}}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default NavigationDots;
