//#region SET TIME OUT
setTimeout(function(){
    console.log("-----------SET TIMEOUT--------");
    console.log("Paso 10 segundos "+"SET TIMEOUT")
},10000);
//#endregion

//#region SET INTERVAL 1
console.log("-----------SET INTERVAL--------");
var tiempo = 0;
setInterval(()=> {
    console.log("Paso: ", tiempo)
    tiempo++;
}, 1000);
//#endregion

//#region SET INTERVAL 2 
//Este contiene metodo para detener el interval
console.log("-----------SET INTERVAL 2--------");
var segundos = 0;

var intervalo = setInterval(()=> {
    console.log("Paso: ", tiempo)
    tiempo++;

    if(tiempo===5){
        clearInterval(intervalo);
    }
}, 1000);
//#endregion

//#region 
var persona = {
    nombre: "Julio",
    edad: 22,
    imprimir: () => {
        var self = this;
        setTimeout(()=>{
            console.log("CONSUMIENDO UN OBJETO")
            console.log(self.persona);
            console.log(self.persona.nombre, self.persona.edad);
        },1000)
    }
}
persona.imprimir();
//#endregion
