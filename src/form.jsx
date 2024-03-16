import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTransaction, deposit, updateMobile, updateName, withdraw } from "./store"

const Form = () => {

    const dispatch = useDispatch()
    const [inputFields, setInputFields] = useState({
        balance : '',
        name : '',mobile : ''
    })

    const data = useSelector(state=>state.user)

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setInputFields({
            ...inputFields,
            [name] : value
        })

    }

    return(
        <>
            <div className="container">
                <h2>Account Form</h2>
                <div className="row">
                    <div className="col-6"><input type="number" className="form-control" placeholder="Enter Amount"
                    onChange={onChangeHandler}
                    name="balance"
                    /></div>
                    <button className="btn btn-danger col-2 me-2" 
                    onClick={() => {dispatch(withdraw(inputFields.balance))
                    dispatch(addTransaction({
                        timeStamp : new Date().toISOString(),
                        type: "debit",
                        accountName : data?.fullName,
                        amount : inputFields.balance

                    }))
                    }}
                    > WithDraw</button>
                    <button 
                    onClick={() => {dispatch(deposit(inputFields.balance))
                        dispatch(addTransaction({
                            timeStamp : new Date().toISOString(),
                            type: "credit",
                            accountName : data?.fullName,
                            amount : inputFields.balance
    
                        })) }}className="btn btn-primary col-2">Deposit</button>
                </div>
                <div className="row mt-2">
                    <div className="col-6"><input type="text" className="form-control" placeholder="Enter Name" 
                    name="name"
                    onChange={onChangeHandler} /></div>
                    <button 
                    onClick={() => dispatch(updateName(inputFields.name)) }className="btn btn-primary col-2">Update</button>
                </div>
                <div className="row mt-2">
                    <div className="col-6"><input type="number" className="form-control" placeholder="Enter Mobile No."
                    name="mobile"
                    onChange={onChangeHandler} /></div>
                    <button 
                    onClick={() => dispatch(updateMobile(inputFields.mobile)) }className="btn btn-primary col-2">Update</button>
                </div>
            </div>
        </>
    )
}

export default Form