import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { AddTaskProp, categories } from "../types/types";

export const TaskForm = (addTask:AddTaskProp) => {
    
    const validateForm = Yup.object().shape({
        title: Yup.string().required("Title is required")
                  .min(3, "Task should be atleast 3 characters long")
                  .max(100, "Task is too long. Max 100 characters only."),
      
        dueDate: Yup.date().required("Date required"),
        category: Yup.string().oneOf(categories).required("Category required")
        });

    return (<>
        <div> 
        <Formik
            initialValues={{
                id: 1,
                title:'',
                dueDate:new Date(Date.now()),
                category:"Work"
            }}
            validationSchema={validateForm}
            onSubmit={values => {
              // same shape as initial values
              addTask.addTask(values);
            }}
            >
            {({ errors, touched }) => (
                <Form >
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <Field name="title" className="form-control"/>
                    {errors.title && touched.title ? (
                        <div className="text-danger">{errors.title}</div>
                    ) : null}
                    </div>
                    <div className="form-group col-md-4">
                    <Field name="dueDate">
                    {({ field, form }) => (
                    <DatePicker
                        id="date"
                        {...field}
                        selected={field.value}
                        onChange={(date) => form.setFieldValue(field.name, date)}
                        className="form-control col-md-4"
                    />
                    )}
                    </Field>
                    </div>
                    <div className="form-group col-md-4">
                    <Field name="category" as="select" className="form-control col-md-4">
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="School">School</option>
                    </Field>
                    {errors.category && touched.category ? <div className="text-danger">{errors.category}</div> : null}
                    </div>
                    <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
    </>)
}