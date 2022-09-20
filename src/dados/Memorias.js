export default class ArrayMemorias {
   constructor(){
      this.memorias =[]
      this._inscritos = [];

   }

   inscrever(func){
      this._inscritos.push(func)
   }
   
   desinscrever(func){
      this._inscritos = this._inscritos.filter(f => f !== func)
   }

   notificar(){
      this._inscritos.forEach(func => func(this.memorias))
   }

   adicionarMemoria(titulo, texto, categoria){
      const novaMemoria = new Memoria(titulo, texto, categoria)
      this.memorias.push(novaMemoria)
      this.notificar()
   }

   deletarMemoria(indice){
      this.memorias.splice(indice, 1)
      this.notificar()
   }
}

class Memoria{
   constructor(titulo, texto, categoria){
      this.titulo =titulo;
      this.texto = texto;
      this.categoria = categoria;
   }
}