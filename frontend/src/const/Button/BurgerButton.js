import { useState, useRef, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "../../styles/main.css";

export default function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // закрытие при клике вне меню
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef}>
      {/* кнопка меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`burger-btn ${isOpen ? "open" : ""}`}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* само меню */}
      <Menu
        right
        width={"70%"}
        className="menuBlock"
        customBurgerIcon={false}
        customCrossIcon={false}
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/shop">Shop</a>
        <a className="menu-item" href="/aboutus">About Us</a>
      </Menu>
    </div>
  );
}
