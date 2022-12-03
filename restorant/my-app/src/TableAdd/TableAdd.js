import React from 'react'
import {Formik} from 'formik'
import {useDispatch,} from 'react-redux/es/exports'  
import { AddTableData } from '../store/action'
import {useNavigate} from 'react-router-dom'


function TableAdd() {

    const dispatch=useDispatch()
    const navigate=useNavigate()

  return (
    <div>
         <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-3'>
                        <Formik
                            initialValues={{
                                Tablename: '',
                                Tableservis: '',
                                status:0
                            }}
                            onSubmit={  (values, actions) => {
                                dispatch(AddTableData(values))
                                actions.resetForm();
                            }}
                        >
                            {props => (
                                <form onSubmit={props.handleSubmit} className='d-flex flex-column my-5'>
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.Tablename}
                                        name="Tablename"
                                        className={`form-control ${props.errors.Tablename ? 'is-invalid' : ''}`}
                                        placeholder='Table-name'
                                    />
                                    {props.errors.Tablename && (<div id="feedback" className='badge bg-danger'>{props.errors.Tablename}</div>)}
                                    <input
                                        type="text"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.Tableservis}
                                        name="Tableservis"
                                        className='form-control my-3'
                                        placeholder='Table-servis'
                                    />
                                    {props.errors.Tableservis && <div id="feedback">{props.errors.Tableservis}</div>}
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
  )
}

export default TableAdd