import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useFormik } from "formik";
import { GetFoodData } from '../store/action';
import { AddOrderData } from '../store/action';
import {UpdateTableData} from '../store/action';
import { useNavigate } from 'react-router-dom'


function FoodDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data = useSelector((state) => state.AddFood);
    const dataTable = useSelector(state => state.AddTable)
    const order = useSelector((state) => state.AddOrder);
    const [orders, setOrders] = useState([]);
    const [totals, setTotals] = useState(0);
    const { id } = useParams();

    const formik = useFormik({
        initialValues: {
            foodName: "",
            foodPrice: 0,
            miqdar: '',
            tableId: id,
            totalPrice: 0
        },
        onSubmit: (values) => {
            values.totalPrice = values.foodPrice * values.miqdar
            console.log(values);
            dispatch(AddOrderData(values))
        },
    });

    function foodName(fName) {
        formik.values.foodName = fName;
        let findName = data.find(item => {
            return item.foodName === fName
        })
        formik.values.foodPrice = findName.foodPrice
    }

    useEffect(() => {
        if (data === '') {
            dispatch(GetFoodData())
        }
    }, [data])

    useEffect(() => {
        if (Array.isArray(order)) {
            let filterOrder = order.filter(item => {
                return item.tableId === id
            })
            setOrders(filterOrder)

            
        }

    }, [order])
    useEffect(()=>{
        let total = 0;
          orders.forEach(item => {
                total += item.totalPrice
            })
            setTotals(total)
            console.log(totals);
    })
    function ended(id) {
        navigate('/')
        let uptStatus=dataTable.find(item=>{
            return item.id===id
        })
        uptStatus.status=1
      UpdateTableData(uptStatus)
    }
    return (
        <div className="container">
            <div className="row g-5 my-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Food List</span>
                        <span className="badge bg-primary rounded-pill">
                            {orders.length}
                        </span>
                    </h4>
                    <ul className="list-group mb-3">
                        {
                            orders &&
                            orders.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        className="list-group-item d-flex justify-content-between "
                                    >
                                        <div>
                                            <h6 className="my-0">{item.foodName}</h6>
                                        </div>
                                        <span className="text-muted">

                                            {item.totalPrice} AZN
                                        </span>
                                    </li>
                                )

                            })

                        }

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (AZN)</span>
                            <strong>{totals}</strong>
                        </li>
                    </ul>
                    <button className='btn btn-success ' onClick={
                        () => { ended(id) }
                    }>Sifarisi sonlandir</button>
                </div>
                <div className="col-md-7 col-lg-8">

                    <form onSubmit={formik.handleSubmit} className="needs-validation">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">
                                    Yemek Sec
                                </label>
                                <select

                                    className="form-select form-select-lg"
                                    name=""
                                    id=""
                                    onChange={(e) => foodName(e.target.value)}
                                >
                                    <option selected>
                                        Yemek Sec
                                    </option>
                                    {
                                        data &&
                                        data.map((item) => {
                                            return (
                                                <option key={item.id} value={item.foodName}>

                                                    {item.foodName} ({item.foodPrice} AZN)
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">
                                    Miqdar
                                </label>
                                <input
                                    type="number"
                                    className="form-control py-2"
                                    id="lastName"
                                    placeholder="Miqdar"
                                    required
                                    name="miqdar"
                                    min="1"
                                    onChange={formik.handleChange}
                                    value={formik.values.miqdar}
                                />
                            </div>

                            <button className="w-100 btn btn-primary btn-lg" type="submit">
                                Sifaris Et
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default FoodDetail