import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaMemorias from "./components/ListaMemorias";
import ListaCategorias from "./components/ListaCategorias";
import Categorias from "./dados/Categorias";
import ArrayMemorias from "./dados/Memorias";
import "./assets/App.css";
import "./assets/index.css";


class App extends Component {
  
  constructor(){
    super()
    this.categorias = new Categorias();
    this.memorias = new ArrayMemorias();
  }

  render(){
    return (
      <div className="conteudo">
         <Formulario 
          criarMemoria={this.memorias.adicionarMemoria.bind(this.memorias)}
          categorias={this.categorias}
         />
         <div className="conteudo-principal">
            <ListaCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
            />
            <ListaMemorias 
            memorias={this.memorias}
            deletarMemoria={this.memorias.deletarMemoria.bind(this.memorias)}
            />
          </div>    
       </div>
    );
  }
  
}

export default App;
