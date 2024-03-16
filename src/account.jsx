import { useSelector } from "react-redux"

const Account = () => {

    const { user, transaction } = useSelector((state) => state)
    return (
        <>
            <div className="container">
                <h2 className="text-primary">Account Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user?.balance}</td>
                            <td>{user?.fullName}</td>
                            <td>{user?.mobile}</td>

                        </tr>
                    </tbody>
                </table>

                <h2 className="text-primary">Transaction Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Time Stamp</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transaction.map((e, i) => {
                                return <tr key={i + 'transaction'}>
                                    <td>{e?.type}</td>
                                    <td>{e?.timeStamp}</td>
                                    <td>{e?.amount}</td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account