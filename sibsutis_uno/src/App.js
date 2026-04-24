import './styles/App.css';
import Preview from './components/Preview'
import Navbar from './components/Navbar'
import { useState } from 'react';
import Teachers from './components/Teachers'

export default function App() {

  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [{id: 1, name: "Предметы"}, {id: 2, name: "Преподы"}]
  const teachers = [
    {id: 1, name: "Трофимов Виктор Куприянович", 
      nickname: " Куприяныч",
      description: "Не уметь решать дифференциальные уравнения второго порядка с определёнными коэффициентами и специальной правой частью - это зашквар! Вы что, не умеете решать квадратные уравнения?",
      image: "/img/trofimov.jpg"
    }, 
    {id: 2, name: "Милешко Антон Владимирович"}, 
    {id: 3, name: "Чудинов Сергей Клэшроялевич"},
    {id: 4, name: "Агалаков Антон Александрович"},
    {id: 5, name: "Дементьева Кристина Игоревна"},  
    {id: 6, name: "Ситняковская Елена Игоревна"},
    {id: 7, name: "Орлов Илья Олегович"},
  ]
  return (
    <div className="App">
      <div className='App__header'>
        <Preview/>
        <Navbar tabs={tabs} callback={setSelectedTab} selected={selectedTab}/>
      </div>
      <div className='App__body'>
        {(selectedTab === 2) ? <Teachers data={teachers}/> : null}
      </div>
      <div className='App__footer'>

      </div>
    </div>
  );
}
