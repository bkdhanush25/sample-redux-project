import { useState } from 'react'
import AddCustomer from './AddCustomer'
import { Provider } from 'react-redux';
import { store } from './store';
import ViewCustomer from './ViewCustomer';
import AddNumber from './AddNumber';
import ChangeNumber from './ChangeNumber';


function App() {

  return (
    <Provider store={store}>
    <AddCustomer/>
    <ViewCustomer/>
    <AddNumber/>
    <ChangeNumber/>
    </Provider>
  )
}

export default App
