export const categories = ["Work", "Personal", "School"] as const;

export interface Task {
    id : number;
    title : string; 
    dueDate : Date;
    category : string;
}

export interface AddTaskProp {
    addTask: (task:Task) => void;
}

export interface TaskListProp {
    tasks:Task[];
    onDelete: (id:number)=>void;
}

export interface TaskItemProp {
    task:Task;
    onDelete: (id:number)=>void;
}