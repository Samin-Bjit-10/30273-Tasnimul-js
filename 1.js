//a -> 
// ReferenceError in line 1 because cannot access 'consultFee' before initialization
//consultFee is a const(fixed) varriable and later later can not be changed
//buildInvoice is a varriable whichs value is a function returning consultFee along with the paitent name
//formatSlot is a function which is taking slot as a perameter and returning slot start and end time


const scheduler = {
    clinic: "MediTrack Uttara",
    doctors: ["Dr. Karim Uddin", "Dr. Nusrat Jahan"],
    printRoster: function () {
        this.doctors.forEach(function (doc) {
        console.log(`${doc} @ ${this.clinic}`);
        });
    }
};
scheduler.printRoster();
const printRoster = scheduler.printRoster;
printRoster();
//b ->
//they are searching for clinic value in the doctors array as a result undefined is showing in the output.
//one solution can be an object in which doctor and clinick value will be there.

//c->
// this method is not even showing the clinic value.



