import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header'
import {List} from './Components/List';
import ToAdd from './Components/ToAdd';

function App() {

  let initlist;
  if(localStorage.getItem("list")===null){
    initlist=[];
  }
  else{
    initlist = JSON.parse(localStorage.getItem("list"));
  }


  const OnDelete = (liststodel)=>{
         setList(lists.filter((e)=> 
                      e!==liststodel
  ));
  }
  const OnHover = (sno) => {
    setList(prevLists => 
      prevLists.map(list => 
      list.sno === sno ? { ...list, Hover: list.Hover + 1 } : list
      ));
    }

  const addto = (name,height,weight)=>
  {
   let sno;
    let Hover = 0
    if(lists.length===0)
    {sno = 1}
    else{
    sno = lists[lists.length-1].sno +1;
    }

    const newData = {
      sno:sno,
      name:name,
      height:height,
      weight:weight,
      Hover
    }
    console.log(newData)
    setList([...lists,newData]);
  }

  const [lists,setList] = useState(initlist);
  useEffect(() =>{
    localStorage.setItem("list",JSON.stringify(lists));
  },[lists])
   
  return (
    <>
    <Header title = "Learning" isTrue={true}/>
    <ToAdd addto={addto}/>
    <List lists={lists} OnDelete={OnDelete} OnHover={OnHover}/>
    
    </>
  );
}

export default App;
