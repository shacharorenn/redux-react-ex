import React from 'react';
import {Formik, Form, Field} from 'formik';
import messageService from '../services/messages.service'

export default function createMessage({userId,cb}) {
    
    const handleSubmit = async (values) => {
        values.userId = userId;
        const message = await messageService.createMessage(values);
        cb(message);
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
