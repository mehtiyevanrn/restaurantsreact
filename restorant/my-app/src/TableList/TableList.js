import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/exports'
import { GetTableData } from '../store/action'
import { Link } from "react-router-dom";


function TableList() {
    const data = useSelector(state => state.AddTable)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTableData())
    })
    return (
        <div className='container'>
            <div className='row'>
                {
                    data &&
                    data.map(item => {
                        return (
                           <Link key={item.id} to={`/detail/${item.id}`} className='col-4 my-4 ' >
                            <div >
                                <div className={`card p-4 ${item.status===0 ? 'border border-success border-4' : 'border border-danger border-4'}` }>
                                    <h2 className='text-center text-capitalize'>{item.Tablename}</h2>
                                    <p className='text-center text-capitalize'>{item.Tableservis}</p>
                                </div>
                            </div>
                           </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TableList