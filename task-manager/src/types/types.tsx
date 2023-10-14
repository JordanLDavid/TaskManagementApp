export const categories = ["Work", "Personal", "School"] as const;

export interface Task {
    id : number;
    title : string; 
    dueDate : Date;
    category : string;
}