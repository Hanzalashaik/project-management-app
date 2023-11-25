import ProjectSideBar from "./component/ProjectsSideBar.jsx"
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
import NewProject from "./component/NewProject.jsx";
import SelectedProeject from "./component/SelectedProject.jsx"

function App() {
  const [projectState ,setProjectState] = useState({
    selectedProjectId : undefined,
    projects : [],
    tasks :[]
  });

  function handleStartAddProjects(){
    setProjectState(prevState =>{
      return{
      ...prevState,
      selectedProjectId : null      
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevState =>{
      return{
      ...prevState,
      selectedProjectId : id      
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState((prevState) =>{
      return{
      ...prevState,
      selectedProjectId : undefined      
      }
    })
  }

  function handleAddProject(ProjectData){
    setProjectState((prevState)=>{
      const projectID =  Math.random()
      const newProject = {
        ...ProjectData,
        id :projectID
      }
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects : [...prevState.projects ,newProject]
      }
    })
  }

  function handleDelete(){
    setProjectState((prevState) =>{
      return{
      ...prevState,
      selectedProjectId : undefined ,     
      projects : prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleAddTask(text){
    setProjectState((prevState)=>{
      const TaskId =  Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id :TaskId
      }
      return {
        ...prevState,
        tasks : [...prevState.tasks ,newTask]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectState((prevState) =>{
      return{
      ...prevState,
      tasks : prevState.tasks.filter((task)=>task.id !== id)
      }
    })
  }

  let selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId) 

  let content = <SelectedProeject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  />;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProjects={handleStartAddProjects} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar selectedProjectId={projectState.selectedProjectId} onSelectProject={handleSelectProject} onStartAddProjects={handleStartAddProjects} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
