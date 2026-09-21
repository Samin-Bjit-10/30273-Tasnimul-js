//b->
const durations = ["9", "11", "10", "21"];
console.log(durations.map(parseInt));
// here map function maps two permaneters while parseInt takes it own two value which colflicts and give the output [ 9, NaN, 2, 7 ]

//a->
const getAppointmentIds = (appointments) => {
appointments.map(apt => { apt.id });
};
const getAppointmentCards = (appointments) => appointments.map(apt => { id: apt.id, fee; 0 });