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
       <div className="Container xxl">
        <h2>Tasks Available</h2>
        <div>
          <div className="row">
            <div className="col-5"><p className="font-bold">Title</p></div>
            <div className="col-3"><p className="font-weight-bold">Due Date</p></div>
            <div className="col-2"><p className="font-weight-bold">Category</p></div>
            <div className="col-2"><p className="font-weight-bold">Action</p></div>
          </div>
          {tasks.map((task)=>(<div className="row mt-2">
                            <TaskItem key={task.id} {...{task, onDelete}}/>
                            </div>))}
        </div>
       </div>
      );
}