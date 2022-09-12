import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from "react";
import {addStudent, getStudent} from './redux/action'
import {Field, Form, Formik} from "formik";
import {getStudents} from "./redux/reducers/student";
import {getUsers} from "./redux/slice/userSlice";

function App() {
    const list = useSelector(state => {
        return state.students
    });
    const users = useSelector(state => {3
        return state.users
    });
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getStudent())
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <Formik
                initialValues={
                    {
                        name: '',
                        description:'',
                        action:''
                    }
                }
                onSubmit={(values, form)=> {
                    dispatch(addStudent(values))
                    form.resetForm();
                }}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'action'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
            {users.map(item => (
                <div>
                    {item.username}
                </div>
            ))}
        </div>
    );
}

export default App;
