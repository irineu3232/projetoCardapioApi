
//Destrucut - acessando dados de outro componente
const MenuItem = ({titulo,preco,img,descricao}) => {
  return (
    <article>
        {/*Pegando imagem e texto*/}
        <img src={img} alt={titulo}/>
        <div>
            <header>
                    <h4>{titulo}</h4>
                    {/*Pega o preço e formata até duas casas decimais*/}
                    <p>R$ {preco.toFixed(2)}</p>
            </header>
            <p>{descricao}</p>
        </div>
    </article>
  )
}

export default MenuItem