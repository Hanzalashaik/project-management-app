import img from "../assets/no-projects.png"
import Button from "./Button.jsx"

export default function NoProjectSelected({onStartAddProjects}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={img} alt="Am empty list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProjects}>Create a new project</Button>
            </p>
        </div>
    )
}