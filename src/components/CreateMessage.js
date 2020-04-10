
import React from 'react';
import {Formik, Form, Field} from 'formik';

export default function createMessage() {
    const handleSubmit = (values) => {
        console.log(values);
        //cb(values.name);
    }

    return (
        <Formik
            initialValues={{message:''}}
            onSubmit = {handleSubmit}
        >
            {
                () => (
                    <Form>
                        <div className="form-group">
                            <p>Message</p>
                            <Field
                                className="form-control"
                                type="text"
                                name="message"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}