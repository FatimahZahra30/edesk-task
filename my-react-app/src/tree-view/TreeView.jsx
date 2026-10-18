import treeData from "./treeData";
import MenuList from "./MenuList";
import "./TreeView.css";

function TreeView() {
  return (
    <div className="tree-view">
      <MenuList list={treeData} />
    </div>
  );
}

export default TreeView;
