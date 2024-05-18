import { useState } from 'react';
import './App.css';
import Start from './components/Start';

function App() {

  const listGenerator = (total) => {
    let list = [];
    for (let i = 0; i < total; i++) {
      list.push({ id: i , value: false });
    }
    return list;
  }
  
  const [colored, setColored] = useState(() => listGenerator(10));

  const list = [...colored];
  
  function handleClick(id){
    let newColored = colored.map(current => {
    if(current.id <= id){
        return { ...current, value: true };
      }else{
        return { ...current, value: false};
      }
    })
    setColored(newColored);
  }

  return (
    <div className="App">
      {
        list.map((item) => <Start onClick={() => handleClick(item.id)}
                                    key={item.id}
                                    id={item.id}
                                    color={item.value}
                                />)
        }
    </div>
  );
}

export default App;
