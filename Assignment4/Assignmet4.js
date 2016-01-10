var person = {
	name: 'jack',
  city:'mumbai',
	age: 28,
	personDetails: function() {
		console.log('Hi, my name is ' + this.name);
    console.log('And my age is ' + this.city);
		console.log('And my age is ' + this.age);
	}
};
person.personDetails();

        