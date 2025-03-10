import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Body = () => {

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);

    const [showFinished, setShowFinished] = useState(true);


    useEffect(() => {
      let todoString = localStorage.getItem("todos")
      if(todoString){
        let todos = JSON.parse(localStorage.getItem("todos"))
        setTodos(todos);
      }
    },[]);

    const toggelFinish = () => {
      setShowFinished(!showFinished);
    }

    const saveToLS = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleAdd= ()=>{
        setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}]) 
        setTodo("");
        saveToLS();
      }
      
    const handleDelete = (e,id) => {
      const newTodo = todos.filter((item) => id !== item.id);
      setTodos(newTodo);
      saveToLS();
    }

    const handleEdit = (e,id) => {
      const tempTodo = todos.filter((item) => item.id === id);
      setTodo(tempTodo[0].todo);                // filter returns an array on its 0th index we get tempTodo, which is an object where we need to edit its .todo
      //console.log(tempTodo[0]);
      setTodos(todos.filter((item) => item.id !== id));
      saveToLS();
    }

    const handleCheckBox = (e,id) => {
      const index = todos.findIndex((item) => item.id === id);        // here we return the position on which said particular todo is present by findIndex
      let newTodos = [...todos];                                      
      newTodos[index].isCompleted = !newTodos[index].isCompleted;     //of that particular index we set its isComplete to opposite
      setTodos(newTodos);
      saveToLS();
    }
    
    const getDate = () => {
      const today = new Date();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const date = today.getDate();
      return `${month}/${date}/${year}`;
    }

  return (
    <div className='h-dvh '>
    <h2 className='text-white text-7xl text-center mt-28 mb-16 hover:text-black'> Just do it!!!</h2>
    <div className="flex justify-center group">
      <input className='px-4 p-2 my-4 bg-black text-white rounded-s-3xl w-2/5 group-hover:bg-white group-hover:text-black' placeholder='Add a task' value={todo} onChange={ (e) => setTodo(e.target.value)} />
      <button className='bg-white text-black px-4 my-4 rounded-e-3xl w-0.5/5 group-hover:bg-black group-hover:text-white' disabled={todo.length < 3} onClick={handleAdd}>Pin it</button>
    </div>
    <input type='checkbox' checked={showFinished} onChange={toggelFinish} className='ml-[32rem]' /> ShowFinished Task
    <div className='text-white mt-6 ml-[50rem]'> Date - {getDate()} </div>
    <div className='todos ml-[26rem] w-1/2 justify-self-center border  border-black' >
    {todos.map( item => {

    
        return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex justify-between py-3 shadow-2xl rounded-3xl bg-slate-600 m-8 w-[26rem] ml-[14rem]'>
            <div className= {item.isCompleted? "line-through pl-4 text-white place-content-center hover:text-black" : "pl-4 text-white place-content-center hover:text-black" } > 
                {item.todo} 
            </div>
                <div className='flex'>
                    <svg className='tickmark w-14 h-8 cursor-pointer hover:fill-white' onClick={(e) => handleCheckBox(e,item.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            
                
                    <svg className='Delete w-14 h-8 cursor-pointer hover:fill-white' onClick={(e) => handleDelete(e,item.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
             
             
                    <svg className='Edit w-14 h-8 cursor-pointer hover:fill-white' onClick={(e) => handleEdit(e,item.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg> 
                </div>
            </div>
        })}
       </div>
    </div>       
  )
}

export default Body;