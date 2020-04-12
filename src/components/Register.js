import React from 'react';
import {Formik, Form, Field} from 'formik';
import UserService from '../services/users.service'

export default ({cb})=>{
    const handleSubmit = async(values) => {
        const user = await UserService.createUser(values);
        cb(user);
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
                            <label>First name</label>
                            <Field
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                            />
                        </div>
                        <div className="form-group">
                         <label>Last name</label>
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