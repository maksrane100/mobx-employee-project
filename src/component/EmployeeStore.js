import { observable, toJS } from 'mobx';
import {get} from 'ajax';
import axios from 'axios';
import {ToastSuccess, ToastDanger} from 'react-toastr-basic';


class EmployeeStore {

    @observable employees;
    @observable show = false;
	@observable showedit = false;
    @observable loading = false;
    @observable newEmployeeModal = {};
	@observable showNewEmployeeModal = false;
    @observable mainRefresh = false;
	@observable name = '';
	@observable employeeCopy = {};
	@observable deleteEmployee = {};
	
    constructor() {
        this.employeeCopy = null; //used to make changes
        this.deleteEmployee = null; //used to delete the employee
    }
	
    /*employeeDAO(){
        this.newEmployeeModal ={
		"id": "",
		"firstname": "",
		"middleinitial": "",
		"lastname": "",
		"ssn": "",
		"birthdate": "",
		"age": "",
		"address1": "",
		"address2": "",
		"city": "",
		"state": "",
		"zip": "",
		"country": "",
		"primary_email": "",
		"secondary_email": "",
		"phone_no": ""
		}
    }*/
	
	employeeDAO(){
        this.newEmployeeModal ={
		"id": "",
		"firstname": "",
		"middleinitial": "",
		"lastname": "",
		"ssn": "",
		"birthdate": "",
		"age": "",
		"address_details":
			{"address1": "",
			"address2": "",
			"city": "",
			"state": "",
			"zip": "",
			"country": ""
			},
		"contact_details":{
			"primary_email": "",
			"secondary_email": "",
			"phone_no": ""
			}
		}
    }
	
    getEmployeesFromServer() {
		 this.loading = true;
		console.log('in getEmployeesFromServer');
		
		fetch('http://localhost:3001/employees')
		.then(response => response.json())
		.then(data => {
			console.log('in getEmployeesFromServer data : '+data);
			console.log(data);
			this.employees = data;
			this.mainRefresh = false;
		})
		.catch(error => console.error(error))
		 this.loading = false;
    }
	
	
    showDelete(employee){
        this.show = true;
        this.deleteEmployee = employee;
		this.name='Deleting employee:'+employee["Employee Title"];
    }
	
	
    hideDelete(){
        this.show = false;
        this.deleteEmployee= null;
    }
    
	
	addNewEmployeeModal(){
		this.loading = false;
        this.show = true;
        this.employeeDAO();

    }
    
	
	deleteEmployeeFromServer(id){
        this.loading = true;
        const employee =this.deleteEmployee;
		
		axios.delete(`http://localhost:3001/employees/`+id)
		.then((response) => {  

			console.log('response:'+response);

			for(var i = this.employees.length -1; i >= 0 ; i--){
				if(this.employees[i].id == id){
					this.employees.splice(i, 1);
				}
			}
			ToastSuccess("Employee deleted : "+response.data[0].firstname+ ' ' +response.data[0].lastname);
		})
		.catch(({response}) => { 
			ToastDanger("Error occurred while deleting employee : "+response);
		});		
		ToastSuccess("Employee deleted : "+response.data[0].firstname+ ' ' +response.data[0].lastname);
    }

	editEmployee(id){
        this.loading = true;
        	
		for(var i = this.employees.length -1; i >= 0 ; i--){
			if(this.employees[i].id == id){
				this.employeeCopy = this.employees[i];
				break;
			}//
		}
		console.log('employeeCopy:'+this.employeeCopy);
		//alert(this.employeeCopy._id);
		this.showNewEmployeeModal=false;
		this.show=false;
		this.loading = false;
		this.showedit=true;
    }	
	
    saveNewEmployee(employee){
        this.loading = true;
		console.log('in saveNewEmployee : '+employee);
		
		var addressObj = {
			"address1":employee.address_details.address1, "address2":employee.address_details.address2, "city":employee.address_details.city,
			"state":employee.address_details.state, "zip":employee.address_details.zip, "country":employee.address_details.country
		};
		
		var contactObj = {
			"primary_email":employee.contact_details.primary_email, "secondary_email":employee.contact_details.secondary_email, "phone_no":employee.contact_details.phone_no
		};
		
		var employeeObj = {		
			"id":employee.id,
			"firstname":employee.firstname,
			"middleinitial": employee.middleinitial,
			"lastname":employee.lastname,
			"ssn":employee.ssn,
			"birthdate":employee.birthdate,
			"age":employee.age,
			"address_details":addressObj,
			"contact_details":contactObj,
			"status":'Active'	
		}
		
		axios.post(`http://localhost:3001/employees`, employeeObj, {
			headers: {'content-type': 'application/json'}, 
		})
		.then((response) => {  
			this.closeModal();
			// update mobx state
			this.employees.push(response.data);
			ToastSuccess("New employee created : "+employee.firstname+ ' ' +employee.lastname);
		})
		.catch(({response}) => {
			ToastDanger("Error occurred while creating employee : "+response.data);
		});
		this.loading = false;
		this.showedit=false;
    }
	
	
    /*
	editEmployee(employee){
        this.show = true;
        this.employeeCopy = employee;
        const promise = new Promise(resolve=>{
           this.discardChanges = resolve;
        });
        return promise;
    }
	*/
	
	
    closeModal(){
        this.show = false;
        this.employeeCopy = null;
        this.deleteEmployee = null;
        this.newEmployeeModal = {};
    }
	
	closeEditModal(){
        this.showedit = false;
        this.employeeCopy = null;
        this.deleteEmployee = null;
        this.newEmployeeModal = {};
    }
	
    cancelChanges(){
        this.employeeCopy = null;
    }
	
	
    saveEmployee(employee){
		this.loading = true;
		console.log('in saveNewEmployee : '+employee);
		
		axios.put(`http://localhost:3001/employees/`+employee._id, employee, {
			headers: {'content-type': 'application/json'}, 
		})
		.then((response) => {  
			this.closeModal();
			//this.employees.push(response.data);
			for(var i = this.employees.length -1; i >= 0 ; i--){
				if(this.employees[i].id == id){
					this.employees[i]=employee;
					break;
				}
			}
		
			ToastSuccess("Employee updated : "+employee.firstname+ ' ' +employee.lastname);
		})
		.catch(({response}) => {  // If create post failed, alert failure message
			ToastDanger("Error occurred while updating employee : "+response.data);
		});
		ToastSuccess("Employee updated : "+employee.firstname+ ' ' +employee.lastname);
		this.closeEditModal();
    }
}

export default new EmployeeStore();