import {useState} from "react"

export default function NewTask({onAdd}){
    const [enteredTask ,setenteredTask] = useState('');

    function handleChange(event){
        setenteredTask(event.target.value)
    }
    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask)
        setenteredTask('')
    }
    return(
        <div className="flex items-center gap-4">
        <input type="text"  onChange={handleChange}  value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-800 hover:bg-stone-300 rounded-md px-2 py-2 font-bold">Add Task</button>
        </div>
    )
}