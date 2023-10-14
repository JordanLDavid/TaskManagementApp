import { useState } from "react";
import { Form } from "react-bootstrap"

export const TaskForm = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <>
        <div> 
        <Form>
            <Form.Group>
                <Form.Label >Task</Form.Label>
                <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    name="datepicker"
                    placeholder="DateRange"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label> Category: </Form.Label>
                <Form.Control type="text"></Form.Control>
            </Form.Group>
            <button className="primary" type="submit">Submit</button>
        </Form>

    </div>
    </>)
}