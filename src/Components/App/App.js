import React from 'react';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import EmployeeForm from '../Employee/EmployeeForm/EmployeeForm';
import EmployeeList from '../Employee/EmployeeList/EmployeeList';
import ExpenseReportList from '../ExpenseReport/ExpenseReportList/ExpenseReportList';
import ExpenseReportForm from '../ExpenseReport/ExpenseReportForm/ExpenseReportForm';
import WorkingReportForm from '../WorkingReport/WorkingReportForm/WorkingReportForm';
import WorkingReportList from '../WorkingReport/WorkingReportList/WorkingReportList';
import QRUpload from '../QR/QRUpload';
import QRDisplay from '../QR/QRDisplay';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {
  const {authToken , setAuthToken} = useToken();
  
  if(!authToken){
    return(
      <Login setAuthToken={setAuthToken} />
    )
  }
  return (
    <div className="wrapper">
      <h1>Sales Management</h1>
      <ExpenseReportForm />
      {/* <EmployeeForm /> */}
      {/* <EmployeeList /> */}
      <ExpenseReportList />
      {/* <QRUpload /> */}
      {/* <QRDisplay /> */}
      {/* <WorkingReportForm /> */}
      {/* <WorkingReportList /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users">
            <EmployeeList />
          </Route>
          <Route path="/users/add">
            <EmployeeForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
