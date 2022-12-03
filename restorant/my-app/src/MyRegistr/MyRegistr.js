import React, { useState } from 'react'
import {Formik} from 'formik'
import {useDispatch, } from 'react-redux/es/exports'
import { AddUserData } from '../store/action'
import {useNavigate} from 'react-router-dom'

function MyRegistr() {

  const dispatch=useDispatch()
  const [isLogin,setIslogin]=useState(false)
  const navigate=useNavigate()

 

  function Change(){
    isLogin=== false ? setIslogin(true) : setIslogin(false)
  }
  return (
    <div>
             <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values, actions) => {
                                values.isUser=isLogin
                               dispatch(AddUserData(values));
                            setTimeout(()=>{
                                navigate("/tableadd")
                            }, 800)
                            }}
                        >
                            {props => (
                                <form onSubmit={props.handleSubmit} className='d-flex flex-column my-5'>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                        name="email"
                                        className='form-control'
                                        placeholder='mail adresinizi yazin'
                                    />
                                    {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                                    <input
                                        type="password"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.password}
                                        name="password"
                                        className='form-control my-3'
                                        placeholder='sifrenizi girin'
                                    />
                                    {props.errors.password && <div id="feedback">{props.errors.password}</div>}
                                    <p className='btn' onClick={()=>{Change()}}>Qeydiyyatiniz var mi?</p>
                                    <button type="submit" className={`btn ${isLogin=== true ? 'btn-info' : 'btn-success'}`}>
                                        {isLogin=== true ? "Sign in" : "Sign up"}
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MyRegistr