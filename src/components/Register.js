import React from 'react';
import {Formik, Form, Field} from 'formik';

export default function Register() {

    const handleSubmit = (values) => {
        console.log(values);
        //cb(values.name);
    }

    return (
        <Formik
            initialValues={{firstName:'',lastName:''}}
            onSubmit = {handleSubmit}
        >
            {
                () => (
                    <Form>
                        <div className="form-group">
                            <Field
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}