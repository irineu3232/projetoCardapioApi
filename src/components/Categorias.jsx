

const Categorias = ({categorias,filtroItems}) => {
  return (
    <nav>
        {/*Cria um array que pega todas as categorias e passa categoria por categoria, usando um index como referência(uma forma de enumerar o array)*/}
        {categorias.map((categoria,index)=>{
            <button key ={index} onclick={()=>{filtroItems(categorias)}}>{categoria}</button>
        })}
    </nav>
  )
}

export default Categorias