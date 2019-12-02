var mongoose = require('mongoose');  

var EmployeeSchema = new mongoose.Schema({  

	id: { type: String, required: true, trim: true, unique : true }, 
	firstname: { type: String, required: true, trim: true },
	middleinitial: { type: String, trim: true }, 
	lastname: { type: String, required: true, trim: true }, 
	ssn: { type: String, required: true, trim: true, unique : true }, 
	birthdate: { type: Date, default: Date.now, required: true},
	creationdate: { type: Date, default: Date.now, required: true},
	modificationdate: { type: Date, default: Date.now, required: true},
	age: { type: Number, required: true},

	address_details: {
		address1: { type: String, default:"" },
		address2: { type: String, default:"" },
		city: { type: String, default:"" },
		state: { type: String, default:"" },
		zip: { type: String, default:"" },
		country: { type: String, default:"" }
	},


	contact_details: {
		primary_email: { type: String, default:"" },
		secondary_email: { type: String, default:"" },
		phone_no: { type: String, default:"" }
	},

	
	status: { type: String, default:"Active", enum:['Active','Deleted']},

});


mongoose.model('Employee', EmployeeSchema);

module.exports = mongoose.model('Employee');