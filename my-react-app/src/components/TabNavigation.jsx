import { useLayoutEffect, useRef, useState } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabNavigation.css';
import DataTable from './DataTable';
import ProfileForm from './ProfileForm';
import TreeView from '../tree-view/TreeView';

// tab creation reference: https://stackoverflow.com/questions/53960066/how-to-make-vertical-tabs-with-react

function TabNavigation() {
  const tableRef = useRef(null);
  const treeRef = useRef(null);

  useLayoutEffect(() => {
    const table = tableRef.current;
    const tree = treeRef.current;

    if (!table || !tree) return;

    const updateTreeHeight = () => {
      tree.style.height = `${table.offsetHeight + 40}px`;
    };

    const observer = new ResizeObserver(updateTreeHeight);
    observer.observe(table);
    updateTreeHeight();

    return () => observer.disconnect();
  }, []);

  return (
    <Tabs className="vertical-tabs">
      <TabList>
        <Tab>Home</Tab>
        <Tab>Profile</Tab>
        <Tab>Messages</Tab>
        <Tab>Settings</Tab>
      </TabList>

      <TabPanel>
        <div className="panel-header">Home Tab.</div>

        <div className="home-panel">
          <div className="tree-section" ref={treeRef}>
            <TreeView />
          </div>

          <div ref={tableRef}>
            <DataTable />
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="panel-header">Profile Tab.</div>
        <ProfileForm />
      </TabPanel>

      <TabPanel>
        <p>This is the Messages section.</p>
      </TabPanel>

      <TabPanel>
        <p>This is the Settings section.</p>
      </TabPanel>
    </Tabs>
  );
}

export default TabNavigation;
