import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import EmployeeForm from '../Employee/EmployeeForm/EmployeeForm';
import EmployeeList from '../Employee/EmployeeList/EmployeeList';
import UpdateEmployee from '../Employee/UpdateEmployee/UpdateEmployee';
import OrderForm from '../Order/OrderForm/OrderForm';
import OrderList from '../Order/OrderList/OrderList';

import ExpenseReportList from '../ExpenseReport/ExpenseReportList/ExpenseReportList';
import ExpenseReportForm from '../ExpenseReport/ExpenseReportForm/ExpenseReportForm';
import WorkingReportForm from '../WorkingReport/WorkingReportForm/WorkingReportForm';
import WorkingReportList from '../WorkingReport/WorkingReportList/WorkingReportList';
import QRUpload from '../QR/QRUpload';
import QRDisplay from '../QR/QRDisplay';
import Login from '../Login/Login';
import useToken from './useToken';
import useUser from './useUser';

function App() {
  const {authToken , setAuthToken} = useToken();
  const {user, setUser} = useUser();
  if(!authToken || authToken === 'undefined'){
    return(
      <Login setAuthToken={setAuthToken} setUser={setUser} />
    )
  }
  return (
    <div className="wrapper">
      <Navbar setAuthToken={setAuthToken} setUser={setUser} user={user}/>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Navbar />
          </Route>
          {user=="Admin" && <Route path="/users/add">
            <EmployeeForm />
          </Route>}
          {user=="Admin" && <Route path="/users/update/:userId">
            <UpdateEmployee/>
          </Route>}
          <Route path="/users">
            <EmployeeList />
          </Route>
          {user=="User"&& <Route path="/orders/add">
            <OrderForm />
          </Route>}
          <Route path="/orders">
            <OrderList />
          </Route>
          {user=="User" && <Route path="/expense_report/add">
            <ExpenseReportForm />
          </Route>}
          <Route path="/expense_report">
            <ExpenseReportList />
          </Route>
          {user=="User" && <Route path="/work_report/add">
            <WorkingReportForm />
          </Route>
          }
          <Route path="/work_report">
            <WorkingReportList />
          </Route>
          {user=="Admin" && <Route path="/QR_Code/add">
            < QRUpload />
          </Route>}
          
          <Route path="/QR_Code">
            <QRDisplay  />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
