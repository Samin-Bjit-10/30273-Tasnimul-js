console.log("1: sync");
(async () => {
console.log("2: async body");
await Promise.resolve();
console.log("3: after await");
})();
setTimeout(() => console.log("4: timeout 0"), 0);
Promise.resolve().then(() => console.log("5: then"));
console.log("6: sync end");
//a->
//1: sync 2: async body 6: sync end 3: after await 5: then 4: timeout 0
// 1 is direct print, 2 is asunc func print so it will print, 3 is a promise relolver so before resolving it goes to 4 which is set in timout so it will print in last, then 5 is also a promise resolver, sp 6 will print, then 3, then 4, lastly 5


//b->
// the secon then recives the doctor name dor the appointment function

//d->
//no browser is is not frozen. only the inside parentehesis wor frozed outside code will runn
// promise all will work on promise for all the premeter, but .allSatteled will work on promise wait for just the satteled permaeters