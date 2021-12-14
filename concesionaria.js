let autos= require('./autos')

let concesionaria = {
   autos: autos,
   buscarAuto: function(patente){
      for(let i = 0;i<autos.length;i++){
         if(autos[i].patente == patente) {
            return autos[i];
         }
      }
      return null;
      },
      venderAuto: function(patente){
   if(this.buscarAuto(patente) != null){
       let index = autos.indexOf(this.buscarAuto(patente));
      autos[index].vendido = true;
      }
},
autosParaLaVenta: function(autosParaLaVenta){
return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
},
autosNuevos :function(nuevo){
   return this.autosParaLaVenta().filter( (function(nuevo){
      return nuevo.km < 100
   }))
},
listaDeVentas: function () {
        let ventas = this.autos.filter(function (patente) {
            return patente.vendido == true
        });
        let lista = [];
        ventas.forEach(function (costo) {
            lista.push(costo.precio);
        })
        return lista;
    },
     totalDeVentas : function(sumatoria){
let total = this.listaDeVentas().reduce((acumulador,suma) =>{
return acumulador + suma;
},0);
return total;
},
puedeComprar: function(auto, persona){
      let cuotasAuto = auto.precio/auto.cuotas;
      return ((auto.precio <= persona.capacidadDePagoTotal) && (cuotasAuto <= persona.capacidadDePagoEnCuotas));
   },
autosQuePuedeComprar: function(persona){
      let listaAutos = this.autosParaLaVenta();
      let autosPosibles = [];
      listaAutos.forEach(function(auto){
         if(concesionaria.puedeComprar(auto,persona)){
            autosPosibles.push(auto);
         }
      });
      return autosPosibles;
   }
}
console.log(concesionaria);