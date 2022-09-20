import React, {Component} from 'react';
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg"

class Memoria extends Component {

   apagar(){
      const indice = this.props.indice
      this.props.deletarMemoria(indice)
   }

   render() { 
      return (
         <section className='memoria'>
            <header className='memoria_cabecalho'>
               <h3 className='memoria_titulo'>{this.props.titulo}</h3>
               <img 
               src={deleteSVG} 
               alt=""
               onClick={this.apagar.bind(this)}   
               />
               <h4>{this.props.categoria}</h4>
            </header>
            <p className='memoria_texto'>
               {this.props.texto}
            </p>
         </section>
      );
   }
}
 
export default Memoria;