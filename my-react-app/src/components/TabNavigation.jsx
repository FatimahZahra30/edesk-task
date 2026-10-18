import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabNavigation.css';
import DataTable from './DataTable';
import ProfileForm from './ProfileForm';

function TabNavigation() {
  return (
    <Tabs className="vertical-tabs">
        <TabList>
            <Tab>Home</Tab>
            <Tab>Profile</Tab>
            <Tab>Messages</Tab>
            <Tab>Settings</Tab>
        </TabList>

        <TabPanel>
            <div className='panel-header'>
                Home Tab.
            </div>
            <DataTable />
        </TabPanel>

        <TabPanel>
            <div className='panel-header'>
                Profile Tab.
            </div>
            <ProfileForm/>
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