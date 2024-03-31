import { useState } from 'react'
import AddCustomer from './AddCustomer'
import { Provider } from 'react-redux';
import { store } from './store';
import ViewCustomer from './ViewCustomer';


function App() {

  return (
    <Provider store={store}>
    <AddCustomer/>
    <ViewCustomer/>
    </Provider>
  )
}

export default App
