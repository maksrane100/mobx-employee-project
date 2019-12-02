import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {ToastDanger} from 'react-toastr-basic';
import Loading from 'react-loading-animation';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator'
import NewEmployeeForm from "./newEmployeeForm";

@observer
export default class EditEmployeeModal extends React.Component {

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
    saveEmployee(employee){
        this.props.EmployeeStore.saveEmployee(employee);
    }
	
	
    @autobind
    cancel(){
        this.props.EmployeeStore.cancelChanges();
        this.props.EmployeeStore.closeEditModal();
    }
	
	
    @autobind
    deleteEmployee(){
        this.props.EmployeeStore.deleteEmployeeFromServer();
    }
	
	/*******************************************************************************/
	/************* First validates employee and then save it. **********************/
	/*******************************************************************************/
     @autobind
	 validateAndUpdateEmployee(){
        const employee =this.props.EmployeeStore.employeeCopy;
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
		// save employee	
		this.props.EmployeeStore.saveEmployee(employee);


    }
	
	
    render() {
        const {t, EmployeeStore} = this.props;
        const showEditEmployeeModal = EmployeeStore.showedit;

        return (
            <div className="EmployeeModal">
			
				<Modal
					show={this.props.EmployeeStore.showedit}
					onHide={this.handleHide}
					dialogClassName="custom-modal-employee"
				>
				
				<Modal.Header closeButton>
					<Modal.Title id="employee-modal">
						{EmployeeStore.employeeCopy && "Update Employee Information"}
						
					</Modal.Title>
				</Modal.Header>
				
				<Modal.Body>
					{showEditEmployeeModal && <NewEmployeeForm employee={EmployeeStore.employeeCopy} EmployeeStore={EmployeeStore}/>}
				</Modal.Body>
				
				<Modal.Footer>
					{EmployeeStore.loading && <Loading/>}
					{EmployeeStore.employeeCopy && <Button onClick={this.validateAndUpdateEmployee} bsStyle="primary">Update</Button> }
					<Button onClick={this.cancel}>Cancel</Button>
				</Modal.Footer>
				
				</Modal>
		
            </div>
        );
    }
}

