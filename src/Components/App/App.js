import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import EmployeeForm from '../Employee/EmployeeForm/EmployeeForm';
import OrderForm from '../Order/OrderForm/OrderForm';
import OrderList from '../Order/OrderList/OrderList';
import EmployeeList from '../Employee/EmployeeList/EmployeeList';
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
      {/* <h1>Sales Management</h1> */}
      {/* <ExpenseReportForm /> */}
      {/* <OrderForm /> */}
      {/* <Dashboard setAuthToken={setAuthToken} setUser={setUser}/> */}
      <Navbar setAuthToken={setAuthToken} setUser={setUser} user={user}/>
      {/* <OrderList/> */}
      {/* <EmployeeForm /> */}
      {/* <EmployeeList /> */}
      {/* <ExpenseReportList /> */}
      {/* <QRUpload /> */}
      {/* <QRDisplay /> */}
      {/* <WorkingReportForm /> */}
      {/* <WorkingReportList /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Navbar />
          </Route>
          <Route path="/users/add">
            <EmployeeForm />
          </Route>
          <Route path="/users">
            <EmployeeList />
          </Route>
          <Route path="/orders/add">
            <OrderForm />
          </Route>
          <Route path="/orders">
            <OrderList />
          </Route>
          <Route path="/expense_report/add">
            <ExpenseReportForm />
          </Route>
          <Route path="/expense_report">
            <ExpenseReportList />
          </Route>
          <Route path="/work_report/add">
            <WorkingReportForm />
          </Route>
          <Route path="/work_report">
            <WorkingReportList />
          </Route>
          <Route path="/QR_Code/add">
            < QRUpload />
          </Route>
          <Route path="/QR_Code">
            <QRDisplay  />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
