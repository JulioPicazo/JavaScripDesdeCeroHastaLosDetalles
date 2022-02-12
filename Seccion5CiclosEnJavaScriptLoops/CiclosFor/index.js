//#region DATA ina for cicle
console.log("----------FOR with DATA ---------")
var Persona = function(){
    this.nombre = "Julio";
    this.apellidoP = "Picazo";
    this.edad = 22;
}

var data = new Persona();
Persona.prototype.provincia = "ags";

for(prop in data){
    if(data.hasOwnProperty(prop))

        console.log(prop, ":", data[prop]);
    
}
//#endregion

//#region FOR IN
console.log("----------FOR IN ---------")
for(num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num);
}
//#endregion

//#region clasic FOR
console.log("-------ClASSIC FOR---------")
for(var i = 0; i<= 10; i++){
    console.log(i)
}
//#endregion

//#region clasic FOREACH
console.log("-------FOREACH---------")
[1,2,3,4,true,6,7,8,false,"nombre"].forEach(function(val){
    console.log(val);
});
//#endregion
