import React from 'react';
import {observer} from 'mobx-react';
import {Button, PageHeader, Table} from "react-bootstrap";
import Loading from 'react-loading-animation';


@observer
export default class EmployeeTable extends React.Component {

    constructor(props) {
        super();
		this.changeDateFormat = this.changeDateFormat.bind(this);
    }

    componentDidMount() {
    }
	
    componentWillMount(){
        this.props.EmployeeStore.getEmployeesFromServer();
    }

    componentWillUnmount() {
    }
	
    delete(book){
        this.props.EmployeeStore.showDelete(book);
    }
    
	
	changeDateFormat(inputdate){
         
		var date = new Date(inputdate);
		var d = date.getDate();
		var m = date.getMonth()+1;
		var y = date.getFullYear();
		var bdate = d+'/'+m+'/'+y; 
		return bdate;
    }
	
	
	render() {
        const {t} = this.props;
        const {employees} = this.props.EmployeeStore;
		
		
        return (
            <div className="bookTable">
                
				<div className="appHeading">
                    Employee Management
                </div>
                
				<div style={{margin: "0px 10px 10px 10px"}}>
					<Button onClick={()=>this.props.EmployeeStore.addNewEmployeeModal()} bsStyle="info">Add Employee</Button>
                </div>
                
				<div  style={{maxHeight: "800px", overflowY: "scroll", margin: "0px 10px 0px 10px"}}>
                    {this.props.EmployeeStore.mainRefresh && <Loading/>}
            
			
			<Table striped bordered condensed hover responsive>
                <thead className="heading">
                <tr className="row">
                    
                    <th className="td">ID</th>
                    <th className="td">First Name</th>
                    <th className="td">Middle Name</th>
					<th className="td">Last Name</th>
                    <th className="td">SSN</th>
					<th className="td">Birthdate</th>				
					<th className="td">Address</th>
					<th className="td">Primary Email</th>
					<th className="td">Secondary Email</th>
					<th className="td">Phone No.</th>
					<th className="td">Creation Date</th>
					<th className="td">Status</th>
					<th className="td">Delete</th>
					<th className="td">Edit</th>
                    
                </tr>
                </thead>
                <tbody>
                {employees && employees.map((employee, index)=>
                    
					<tr className="row">
						
						<td>{employee.id}</td>
						<td>{employee.firstname}</td>
						<td>{employee.middleinitial}</td>
						<td>{employee.lastname}</td>

						<td>{employee.ssn}</td>

						<td>{this.changeDateFormat(employee.birthdate)}</td>

						<td>      
							{employee.address_details.address1} &nbsp;
							{employee.address_details.address2} &nbsp;
							{employee.address_details.city} &nbsp;
							{employee.address_details.state} &nbsp;
							{employee.address_details.zip} &nbsp;
							{employee.address_details.country}
						</td>

						<td>{employee.contact_details.primary_email}</td>
						<td>{employee.contact_details.secondary_email}</td>
						<td>{employee.contact_details.phone_no}</td>
						<td>{this.changeDateFormat(employee.creationdate)}</td>
						<td>{employee.status}</td>
						<td><Button onClick={()=>this.props.EmployeeStore.deleteEmployeeFromServer(employee.id)} bsStyle="info">Delete</Button> </td>
						<td><Button onClick={()=>this.props.EmployeeStore.editEmployee(employee.id)} bsStyle="info">Edit</Button> </td>

					</tr>
				)}
                </tbody>
            </Table>
                </div>
            </div>
        );
    }
}
