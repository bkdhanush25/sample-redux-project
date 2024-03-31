import React from 'react'
import { useSelector } from 'react-redux';

const ViewCustomer = () => {
    const customers = useSelector((state) => state.customers)
  return (
    <div>
        <h3>Customers List</h3>
        <ul>
            {
                customers.map((customer) => <li>{customer}</li>)
            }
        </ul>
    </div>
  )
}

export default ViewCustomer