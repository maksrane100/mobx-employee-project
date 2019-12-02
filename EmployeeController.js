var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Employee = require('./Employee');


// CREATES A NEW Profile
router.post('/', function (req, res) {
	
	let employee = new Employee({
		id: req.body.id,
		firstname: req.body.firstname,
		middleinitial: req.body.middleinitial,
		lastname: req.body.lastname,
		ssn: req.body.ssn,
		birthdate: req.body.birthdate,
		age: req.body.age,
		status: req.body.status,
		
		address_details: {
			address1: req.body.address_details.address1,
			address2: req.body.address_details.address2,
			city: req.body.address_details.city,
			state: req.body.address_details.state,
			zip: req.body.address_details.zip,
			country: req.body.address_details.country
		},
		
		contact_details: {
			primary_email: req.body.contact_details.primary_email,
			secondary_email: req.body.contact_details.secondary_email,
			phone_no: req.body.contact_details.phone_no
		}
		
	})
	
	
	
	console.log('Employee from request : '+employee);
    Employee.create(employee, 
        function (err, tempemployee) {
            if (err) return res.status(500).send("There was a problem adding the information to the database : "+err);
            res.status(200).send(tempemployee);
        });
});


router.get('/', function (req, res) {
	
	Employee.find({} , function (err, Employees) {
		if (err) {
			return res.status(500).send("There was a problem finding the questions.");
		}
        res.status(200).send(Employees);
    });
});

	
	



// DELETES A Profile FROM THE DATABASE
/*
router.delete('/:id', function (req, res) {
    Employee.findByIdAndRemove(req.params.id, function (err, Employee) {
        if (err) return res.status(500).send("There was a problem deleting the Employee.");
        res.status(200).send("Employee with id "+ req.params.id +" was deleted.");
    });
});
*/


router.delete('/:id', function (req, res) {
	 var query = { id: req.params.id };
	 var EmployeeObj;
	 
	 Employee.find(query , function (err, obj) {
		if (err) {
			return res.status(500).send("There was a problem finding the questions.");
		}
		console.log('obj:'+obj);
		
		Employee.deleteOne(query, function (err, deletedEmployee) {
			if (err) return res.status(500).send("There was a problem deleting the Employee.");
				console.log('EmployeeObj:'+obj);
				res.status(200).send(obj);
				// res.status(200).send(EmployeeObj);
		});
			
	});		
});

// UPDATES A SINGLE Profile IN THE DATABASE
router.put('/:id', function (req, res) {
	console.log('in employee update');
	
	let employee = new Employee({
		_id: req.params.id,
		id: req.body.id,
		firstname: req.body.firstname,
		middleinitial: req.body.middleinitial,
		lastname: req.body.lastname,
		ssn: req.body.ssn,
		birthdate: req.body.birthdate,
		age: req.body.age,
		status: req.body.status,
		
		address_details: {
			address1: req.body.address_details.address1,
			address2: req.body.address_details.address2,
			city: req.body.address_details.city,
			state: req.body.address_details.state,
			zip: req.body.address_details.zip,
			country: req.body.address_details.country
		},
		
		contact_details: {
			primary_email: req.body.contact_details.primary_email,
			secondary_email: req.body.contact_details.secondary_email,
			phone_no: req.body.contact_details.phone_no
		}
		
	})
	
	//let employee = req.body.employee;
	console.log('employee from request : '+employee);
	
    Employee.findByIdAndUpdate(req.params.id, employee,  function (err, Employee) {
        if (err) return res.status(500).send("There was a problem updating the Employee: "+err);
		console.log('Employee updated.');
        res.status(200).send(Employee);
    });
});


module.exports = router;