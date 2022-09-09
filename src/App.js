import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {addStudent} from './redux/action'
import {Field, Form, Formik} from "formik";

function App() {
    const list = useSelector(state => {
        return state.students
    });
    const dispatch = useDispatch();
    const listProduct = useSelector(state => {
        return state.products
    });
    return (
        <div>
            <Formik
                initialValues={
                    {
                        name: '',
                        age: '',
                        class: ''
                    }
                }
                onSubmit={values => {
                    dispatch({
                        type: 'add',
                        payload: values
                    })
                }}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'age'}></Field>
                    <Field name={'class'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
            {list.map(item => (
                <div>
                    {item.name}: {item.age}: {item.class}
                </div>
            ))}
        </div>
    );
}

export default App;
