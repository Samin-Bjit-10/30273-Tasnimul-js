//a->
function MediTrack_booking(statusCode , slotId, nextAvailableAt) {
    try {
        submitBooking(payload); // async function
        showToast("Appointment confirmed!");
    } catch (field) {
        e=>e("ValidationError");
    }
    finally{
        showToast("SlotUnavailableError");
    }
}


//b->
//because in try it is recieving paylod is the mother function which so it is giving a fake success toast.



//c->
const slots = document.getElementsByClassName("slot-row");
for (let i = 0; i < slots.length; i++) {
slots[i].remove();
}
//getElementsByClassName acces a field by the call name.

const slot_qall = document.querySelectorAll(".slot-row");// it selects all query
for (let i = 0; i < slots.length; i++) {
slots[i].remove();
}