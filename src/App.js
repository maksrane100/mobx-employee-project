import React from 'react';

import EmployeeTable from "./component/EmployeeTable";
import EmployeeStore from "./component/EmployeeStore";
import EmployeeModal from "./component/EmployeeModal";
import EditEmployeeModal from "./component/EditEmployeeModal";
import ToastrContainer from 'react-toastr-basic'


export default class App extends React.Component {


    constructor(props) {
        super();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const {t} = this.props;
        return (
            <div className="App">
                <ToastrContainer />
                <EmployeeModal EmployeeStore={EmployeeStore}/>		
				<EditEmployeeModal EmployeeStore={EmployeeStore}/>						
                <EmployeeTable EmployeeStore={EmployeeStore}/>
            </div>
        );
    }
}