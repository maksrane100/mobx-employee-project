import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {ToastDanger} from 'react-toastr-basic';
import Loading from 'react-loading-animation';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator'
import NewEmployeeForm from "./newEmployeeForm";

@observer
export default class EmployeeModal extends React.Component {

    constructor(props) {
        super();
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }
	
	
    @autobind
    handleHide(){
        this.props.EmployeeStore.closeModal();
    }
	
	
    @autobind
    saveEmployee(){
        this.props.EmployeeStore.saveEmployee();
    }
	
	
    @autobind
    cancel(){
        this.props.EmployeeStore.cancelChanges();
        this.props.EmployeeStore.closeModal();
    }
	
	
    @autobind
    deleteEmployee(){
        this.props.EmployeeStore.deleteEmployeeFromServer();
    }
	
	
    createNewEmployee(){
        const employee =this.props.EmployeeStore.newEmployeeModal;
        if(!employee["id"].length){
            return ToastDanger("Can't save with empty id");
        }
		if(!employee["firstname"].length){
		return ToastDanger("Can't save with empty Firstname");
		}
		if(!employee["middleinitial"].length){
		return ToastDanger("Can't save with empty Middle Initial");
		}
		if(!employee["lastname"].length){
		return ToastDanger("Can't save with empty Lastname");
		}

		if(!employee["ssn"].length){
		return ToastDanger("Can't save with empty SSN");
		}
		if(!employee["age"].length){
		return ToastDanger("Can't save with empty Age");
		}
		if(!employee["birthdate"].length){
		return ToastDanger("Can't save with empty Birthdate");
		}



		if(!employee.address_details["address1"].length){
		return ToastDanger("Can't save with empty Address1");
		}
		if(!employee.address_details["address2"].length){
		return ToastDanger("Can't save with empty Address2");
		}
		if(!employee.address_details["city"].length){
		return ToastDanger("Can't save with empty City");
		}
		if(!employee.address_details["state"].length){
		return ToastDanger("Can't save with empty State");
		}
		if(!employee.address_details["zip"].length){
		return ToastDanger("Can't save with empty Zip");
		}
		if(!employee.address_details["country"].length){
		return ToastDanger("Can't save with empty Country");
		}

		if(!employee.contact_details["primary_email"].length){
		return ToastDanger("Can't save with empty Primary Email");
		}
		if(!employee.contact_details["secondary_email"].length){
		return ToastDanger("Can't save with empty Secondary Email");
		}
		if(!employee.contact_details["phone_no"].length){
		return ToastDanger("Can't save with empty Phone Number");
		}      
		this.props.EmployeeStore.saveNewEmployee(employee);


    }
	
	
    render() {
        const {t, EmployeeStore} = this.props;
        const showNewEmployeeModal = EmployeeStore.show;

        return (
            <div className="EmployeeModal">
			
				<Modal
					show={this.props.EmployeeStore.show}
					onHide={this.handleHide}
					dialogClassName="custom-modal-employee"
				>
				
				<Modal.Header closeButton>
					<Modal.Title id="employee-modal">
						{EmployeeStore.employeeCopy && "Update Employee Information"}
						{EmployeeStore.deleteEmployee && "Are you sure you want to delete employee?"}
						{showNewEmployeeModal && "Create Employee"}
					</Modal.Title>
				</Modal.Header>
				
				<Modal.Body>
					{showNewEmployeeModal && <NewEmployeeForm employee={EmployeeStore.newEmployeeModal}/>}
				</Modal.Body>
				
				<Modal.Footer>
					{EmployeeStore.loading && <Loading/>}
					{showNewEmployeeModal && <Button onClick={()=>this.createNewEmployee()} bsStyle="info">Create Employee</Button>}
					{EmployeeStore.employeeCopy && <Button onClick={this.saveEmployee} bsStyle="primary">Save</Button> }
					{EmployeeStore.deleteEmployee &&<Button onClick={this.deleteEmployee} bsStyle="danger">OK</Button> }
					<Button onClick={this.cancel}>Cancel</Button>
				</Modal.Footer>
				
				</Modal>
		
            </div>
        );
    }
}

