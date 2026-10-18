import { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="menu-item">
      <div className="menu-item-row">
        {hasChildren && (
          <button
            type="button"
            className="tree-toggle"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
          >
            {isOpen ? "−" : "+"}
          </button>
        )}

        <span className="menu-item-label">
          {item.label}
        </span>
      </div>

      {hasChildren && isOpen && (
        <MenuList list={item.children} />
      )}
    </li>
  );
}

export default MenuItem;
