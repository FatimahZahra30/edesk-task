import MenuItem from "./MenuItem";

function MenuList({ list }) {
  return (
    <ul className="menu-list">
      {list.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;
