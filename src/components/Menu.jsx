import MenuItem from "./MenuItem"

//Destruturação/destrucut = acessa propriedades de outros locais
const Menu = ({items}) => {
  return (
    <div>
        {/* Criando a função que vai percorrer item por id 
        {...} - operador spread - pega os dados já exisente e junto com o novo */}
        {items.map((item)=>{
            <MenuItem key = {item.id} {...item}/>
        })}
    </div>
  )
}

export default Menu
