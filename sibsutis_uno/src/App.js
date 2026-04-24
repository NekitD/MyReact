import './styles/App.css';
import Preview from './components/Preview'
import Navbar from './components/Navbar'

export default function App() {
  const tabs = [{name: "Предметы"}, {name: "Преподы"}]
  return (
    <div className="App">
      <Preview/>
      <Navbar tabs={tabs}/>
    </div>
  );
}
