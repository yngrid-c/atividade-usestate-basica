import { useState } from "react"
import "./App.css"

function Contador() {
  const [contador, setContador] = useState(0)
  const [visivel, setVisivel] = useState(false)
  const [nome, setNome] = useState("")

  const [cartao, setCartao] = useState("")
  const [saudacao, setSaudacao] = useState(true)

  function aumentar() {
    
    setContador((anterior) => {
      if (anterior === 10){
      return anterior
    } 
      return anterior + 1})
  }

  function diminuir() {
    setContador((anterior) => anterior - 1)
  }

  function reiniciar() {
    setContador(0)
  }
  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>

      <button onClick={reiniciar}>Zerou</button>
      {contador === 10 && <p>atingiu!!</p>}

      <button onClick={() => setVisivel(!visivel)}>
        Visivel
      </button>
      {visivel && <p>me da um 10 fessor, nunca te pedi nada</p>}
      
      <input
      value={nome}
      onChange={(evento) => setNome(evento.target.value)}
      placeholder="Yngrid"
      />
      
      <p>Oii, {nome || "pessoa"}</p>

      <input
        value={cartao}
        onChange={(evento) => setCartao(evento.target.value)}
        placeholder="nome do cartao"
      />
      
      <button onClick={() => setSaudacao(!saudacao)}>
        cartão
      </button>

      {saudacao && (
        <p>oii, {cartao || "queri dinheiro"}</p>
      )}
    </div>
  )
}

export default Contador
