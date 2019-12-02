import React from 'react';
import {FormControl, FormGroup} from "react-bootstrap";
import DatePicker from "react-16-bootstrap-date-picker";
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class NewBookForm extends React.Component {

    @observable employee;
    @observable touchedId = false;
    @observable touchedFirstname = false;
    @observable touchedMiddleinitial = false;
    @observable touchedLastname = false;
    @observable touchedSsn = false;
	@observable touchedAge = false;
	@observable touchedBirthdate = false;
	@observable touchedAddress1 = false;
	@observable touchedAddress2 = false;
	@observable touchedCity = false;
	@observable touchedState = false;
	@observable touchedZip = false;
	@observable touchedCountry = false;
	@observable touchedPrimaryemail = false;
	@observable touchedSecondaryemail = false;
	@observable touchedPhoneno = false;
	
    constructor(props) {
        super();
    }

    componentWillMount(){
        this.employee = this.props.employee;
    }
	
    componentDidMount() {
    }

    componentWillUnmount() {
        this.employee = null;
    }
	
	changeInput(key, value){
        this.employee[key] = value;
		//this.props.EmployeeStore.employeeCopy[key]=value;
    }

    changeInputAddress(key, value){
		/*if(this.employee.hasOwnProperty('address_details')) {
			this.employee.address_details[key] = value;
		} else {
			alert('here');
			//var address_details={};
			this.employee["address_details"]={};
			this.employee.address_details[key] = value;
		}*/
		this.employee.address_details[key] = value;
        
    }
	
    changeInputContact(key, value){
        this.employee.contact_details[key] = value;
    }
	
    @computed
    get idValidation(){
        if (this.touchedId) {
            if (this.employee["id"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }

    @computed
    get firstnameValidation(){
        if (this.touchedFirstname) {
            if (this.employee["firstname"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }
    
    @computed
    get middleinitialValidation(){
        if (this.touchedMiddleinitial) {
            if (this.employee["middleinitial"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }
    
    @computed
    get lastnameValidation(){
        if (this.touchedLastname) {
            if (this.employee["lastname"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }
    
    @computed
    get ssnValidation(){
        if (this.touchedSsn) {
            if (this.employee["ssn"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }        
    
    @computed
    get ageValidation(){
        if (this.touchedAge) {
            if (this.employee["age"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }           
    
    @computed
    get birthdateValidation(){
        if (this.touchedBirthdate) {
            if (this.employee["birthdate"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    } 
    
    @computed
    get address1Validation(){
        if (this.touchedAddress1) {
            if (this.employee.address_details["address1"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }

    @computed
    get address2Validation(){
        if (this.touchedAddress2) {
            if (this.employee.address_details["address2"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }
    
    @computed
    get cityValidation(){
        if (this.touchedCity) {
            if (this.employee["city"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }

    @computed
    get stateValidation(){
        if (this.touchedState) {
            if (this.employee["state"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }           
    
    @computed
    get zipValidation(){
        if (this.touchedZip) {
            if (this.employee["zip"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }

    @computed
    get countryValidation(){
        if (this.touchedCountry) {
            if (this.employee["country"].length === 0) {
                return "error";
            } else {
                return "success";
            }
        }
    }     
    
	@computed
	get primaryemailValidation(){
		if (this.touchedPrimaryemail) {
			if (this.employee["primaryemail"].length === 0) {
				return "error";
			} else {
				return "success";
			}
		}
    }   
    
	@computed
	get secondaryemailValidation(){
		if (this.touchedSecondaryemail) {
			if (this.employee["secondaryemail"].length === 0) {
				return "error";
			} else {
				return "success";
			}
		}
    }       
    
	@computed
	get phonenoValidation(){
		if (this.touchedPhoneno) {
			if (this.employee["phoneno"].length === 0) {
				return "error";
			} else {
				return "success";
			}
		}
    } 
	
	
	
    render() {
        const {t, employee} = this.props;
		
        return (
            <div className="newBookForm">
			   
                <FormGroup
                    validationState={this.idValidation}>
                    <FormControl
                        type="text"
                        placeholder="ID"
                        value={this.employee["id"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("id", e.target.value);
                        }}
                        />
                </FormGroup>
                
				<FormGroup
                    validationState={this.firstnameValidation}>
                    <FormControl
                        type="text"
                        placeholder="First Name"
                        value={this.employee["firstname"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("firstname", e.target.value);
                        }}
                        />
                </FormGroup>
				
				<FormGroup
                    validationState={this.middleinitialValidation}>
                    <FormControl
                        type="text"
                        placeholder="Middle Initial"
                        value={this.employee["middleinitial"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("middleinitial", e.target.value);
                        }}
                        />
                </FormGroup>
				
				<FormGroup
                    validationState={this.lastnameValidation}>
                    <FormControl
                        type="text"
                        placeholder="Last Name"
                        value={this.employee["lastname"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("lastname", e.target.value);
                        }}
                        />
                </FormGroup>				

				<FormGroup
                    validationState={this.ssnValidation}>
                    <FormControl
                        type="text"
                        placeholder="SSN"
                        value={this.employee["ssn"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("ssn", e.target.value);
                        }}
                        />
                </FormGroup>

				<FormGroup
                    validationState={this.ageValidation}>
                    <FormControl
                        type="text"
                        placeholder="Age"
                        value={this.employee["age"]}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInput("age", e.target.value);
                        }}
                        />
                </FormGroup>

                <FormGroup
                    validationState={this.birthdateValidation}>
                    <DatePicker
                        id={this.datePickerId}
                        style={{width: "100px"}}
                        showClearButton={false}
                        value={ this.employee["birthdate"]}
                        onChange={(value) => {
                            this.touchedDate = true;
                            this.changeInput("birthdate", value);
                        }
                        }
                        onBlur={(e)=> this.changeInput("birthdate", e.target)}
                    />
                </FormGroup>
				
					
				<FormGroup
                    validationState={this.address1Validation}>
                    <FormControl
                        type="text"
                        placeholder="Address1"
                        value={this.employee.address_details? this.employee.address_details["address1"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true;
							
                            this.changeInputAddress("address1", e.target.value);
                        }}
                        />
                </FormGroup>

				<FormGroup
                    validationState={this.address2Validation}>
                    <FormControl
                        type="text"
                        placeholder="Address2"
                        value={this.employee.address_details? this.employee.address_details["address2"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputAddress("address2", e.target.value);
                        }}
                        />
                </FormGroup>				

				<FormGroup
                    validationState={this.cityValidation}>
                    <FormControl
                        type="text"
                        placeholder="City"
                        value={this.employee.address_details? this.employee.address_details["city"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputAddress("city", e.target.value);
                        }}
                        />
                </FormGroup>

				<FormGroup
                    validationState={this.stateValidation}>
                    <FormControl
                        type="text"
                        placeholder="State"
                        value={this.employee.address_details? this.employee.address_details["state"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputAddress("state", e.target.value);
                        }}
                        />
                </FormGroup>

				<FormGroup
                    validationState={this.zipValidation}>
                    <FormControl
                        type="text"
                        placeholder="Zip"
                        value={this.employee.address_details? this.employee.address_details["zip"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputAddress("zip", e.target.value);
                        }}
                        />
                </FormGroup>

				<FormGroup
                    validationState={this.countryValidation}>
                    <FormControl
                        type="text"
                        placeholder="Country"
                        value={this.employee.address_details? this.employee.address_details["country"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputAddress("country", e.target.value);
                        }}
                        />
                </FormGroup>
				
				<FormGroup
                    validationState={this.primaryemailValidation}>
                    <FormControl
                        type="text"
                        placeholder="Primary Email"
                        value={this.employee.contact_details? this.employee.contact_details["primary_email"]:''}
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputContact("primary_email", e.target.value);
                        }}
                        />
                </FormGroup>
				
				<FormGroup
                    validationState={this.secondaryemailValidation}>
                    <FormControl
                        type="text"
                        placeholder="Secondary Email"
						value={this.employee.contact_details? this.employee.contact_details["secondary_email"]:''}                 
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputContact("secondary_email", e.target.value);
                        }}
                        />
                </FormGroup>
				
				<FormGroup
                    validationState={this.phonenoValidation}>
                    <FormControl
                        type="text"
                        placeholder="Phone No."
						value={this.employee.contact_details? this.employee.contact_details["phone_no"]:''}    
                        onChange={(e)=>{
                            this.touchedTitle = true
                            this.changeInputContact("phone_no", e.target.value);
                        }}
                        />
                </FormGroup>
				
				
            </div>
        );
    }
}