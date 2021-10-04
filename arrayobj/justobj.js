const person = {
    firstname: 'Farjana',
    lastname: 'Hossain',
    age: 26,
    hobbies: ['coding', 'reading', 'learning'],
    address: {
        street: '01',
        city: 'Uttara'
    }
}
//all
console.log(person);
//single value
console.log(person.firstname);
//more than one value
console.log(person.firstname, person.lastname);
//certain value in array
console.log(person.hobbies[0]);
//city in address object
console.log(person.address.city);


//new feature:destructing
const {firstname, lastname, address:{city}} = person;
console.log(city);

//direct added property
person.email = 'farjana.96.hossain@gmail.com';
console.log(person);