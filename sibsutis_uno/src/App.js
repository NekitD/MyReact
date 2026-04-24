import './styles/App.css';
import Preview from './components/Preview'
import Navbar from './components/Navbar'

export default function App() {
  const tabs = [{name: "Предметы"}, {name: "Преподы"}]
  return (
    <div className="App">
      <div className='App__header'>
        <Preview/>
        <Navbar tabs={tabs}/>
      </div>
      <div className='App__body'>

      </div>
      <div className='App__footer'>

      </div>
    </div>
  );
}
