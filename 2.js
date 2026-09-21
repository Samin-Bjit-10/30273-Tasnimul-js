//a->
//APT-9001
//Sylhet
//3
//appointmentId was a object name which has a value(working like a varriable) but patient.address.city is working as an obj in between another object which has its own key value and have to access the perticular value in that formate
//Yes ...appointmentSnapshot is a shadow type whhich will work different hen normal deep type


//c->
function getTopThreeTests(tests) {
return tests.sort((a, b) => b- a).slice(0, 3);
}
console.log(getTopThreeTests([16,2,10]));


//d
//line x will though bcz const protects it key value as in x we are changing the keys value of the onject so it will run.

