import React, {Component } from "react";
import Memoria from "../Memoria";
import "./style.css"


class ListaMemorias extends Component {

   
   constructor(){
      super();
      this.state = {memorias:[]}
      this._novasMemorias = this._novasMemorias.bind(this)
   }
   
   
   componentDidMount(){
      this.props.memorias.inscrever(this._novasMemorias)
   }

   componentWillUnmount(){
      this.props.memorias.desinscrever(this._novasMemorias)
   }

   _novasMemorias(memorias){
      this.setState({...this.state,memorias})
   }

   render(){
      return(
         <ul className="lista-notas" >
         {this.state.memorias.map((memoria, index) => {
               return(
                  <li className="lista-notas_item" key={index}>
                     <Memoria 
                     indice = {index}
                     titulo = {memoria.titulo} 
                     texto = {memoria.texto}
                     categoria = {memoria.categoria}
                     deletarMemoria = {this.props.deletarMemoria}    
                     />
                  </li>
               )
            })
         }
            
         </ul>
      )
   }
}

export default ListaMemorias