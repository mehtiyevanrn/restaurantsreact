import React from 'react'
import {Formik} from 'formik'
import {useDispatch,} from 'react-redux/es/exports'
import { AddFoodData } from '../store/action'
import{useNavigate} from 'react-router-dom'

function FoodAdd() {
    const dispatch=useDispatch()
    const navigate=useNavigate
  return (
    <div>
        <div>
         <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <Formik
                            initialValues={{
                                foodName: '',
                                foodPrice:'',
                            }}
                            onSubmit={  (values, {resetForm}) => {
                                dispatch(AddFoodData(values))
                                resetForm();
                                
                            }}
                        >
                            {props => (
                                <form onSubmit={props.handleSubmit} className='d-flex flex-column my-5'>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.Tablename}
                                        name="foodName"
                                        className='form-control'
                                        placeholder='foodname'
                                    />
                                    {props.errors.foodName && <div id="feedback">{props.errors.foodName}</div>}
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.Tableservis}
                                        name="foodPrice"
                                        className='form-control my-3'
                                        placeholder='foodPrice'
                                    />
                                    {props.errors.foodPrice && <div id="feedback">{props.errors.foodPrice}</div>}
                                    <button type="submit" className="btn btn-success">
                                        Add
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default FoodAdd