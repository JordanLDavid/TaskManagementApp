import { TaskListProp } from '../types/types';
import TaskItem from './TaskItem'

export default function TaskList({tasks, onDelete}:TaskListProp) {
    if(!tasks?.length){
        return (
          <div>
            <ul>No To-Dos found</ul>
          </div>
        );
      }
      return(
       <div className="Container">
        {tasks.map((task)=>(<div className="row">
                            <TaskItem key={task.id} {...{task, onDelete}}/>
                            </div>))}
       </div>
      );
}