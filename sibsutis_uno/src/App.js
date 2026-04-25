import './styles/App.css';
import Preview from './components/Preview'
import Navbar from './components/Navbar'
import { useState } from 'react';
import Teachers from './components/Teachers'
import TeachersData from "./data/teachers.json"
import TabsData from "./data/tabs.json"
import TeacherFilters from "./data/teachers_filters.json"

export default function App() {

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = TabsData;
  const teachers = TeachersData;
  return (
    <div className="App">
      <div className='App__header'>
        <Preview/>
        <Navbar tabs={tabs} callback={setSelectedTab} selected={selectedTab}/>
      </div>
      <div className='App__body'>
        {(selectedTab === 2) ? <Teachers data={teachers} filters={TeacherFilters}/> : null}
      </div>
      <div className='App__footer'>

      </div>
    </div>
  );
}
