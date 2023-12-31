import { TaskItemProp } from "../types/types";

function formatDateToString(currDate) {
    const date = new Date(currDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // January is 0!
    const year = date.getFullYear().toString();
  
    return `${month}/${day}/${year}`;
  }
  
export default function TaskItem({task, onDelete}:TaskItemProp) {
  return (<>
            <div className="col-5"> {task.title} </div> 
            <div className="col-3"> {formatDateToString(task.dueDate)} </div> 
            <div className="col-2"> {task.category} </div> 
            <div className="col-2">
            <button className="btn btn-primary" onClick={()=>onDelete(task.id)}>
                <span className="bi bi-trash"> </span>
            </button>
        </div>
        </>
  )
}