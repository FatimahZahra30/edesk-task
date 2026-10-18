import treeData from "./treeData";
import MenuList from "./MenuList";
import "./TreeView.css";

// tree structure reference: https://dev.to/tobidelly/building-a-simple-tree-view-component-in-react-1lln

function TreeView() {
  return (
    <div className="tree-view">
      <MenuList list={treeData} />
    </div>
  );
}

export default TreeView;
