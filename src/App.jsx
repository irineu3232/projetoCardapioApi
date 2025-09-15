import { useState } from "react"
import Menu from "./components/Menu"
import Categorias from "./components/Categorias"
import menudados from "./data/dados.js"

    //Obtem todas as categorias únicas do menu, adicionando todos no ínicio
    const todasCategorias = ['todos', ...new Set(menudados.map((item)=>item.categoria))];

function App() {

    //hook - useState - Manipula o estado da variavel
    const [menuitems,setMenuItems] = useState(menudados);
    const [categorias,setCategorias] = useState(todasCategorias);


    // Criando a função que filtra todos os items
    const filtroItems = (categorias)=>{
      if(categoria === "todos")
      {
        setMenuItems(menudados) ; //mostra todos os itens da lista
      }
      else
      {
        const novoItem = dados.filter((item) => item.categoria === cateogria)
        setMenuItems(novoItem); // Mostrando item filtrado 
      }
    }

  return (
    <>
      <main>
        <section>
            <header>
                <h2>Cardapio City</h2>
                <div></div>
            </header>
            <Categorias categorias ={categorias} filtroItems={filtroItems}/>
            <Menu  items= {menuitems}/>
        </section>
        <footer> &copy; 2025 - todos direitos reservados</footer>
      </main>
    </>
  )
}

export default App
