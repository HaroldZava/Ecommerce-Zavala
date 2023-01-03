import logo from '../logo.svg';
function Examples() {
    const greeting = "Bienvenidos a mi Ecommerce";

    const mostrarCurso = () => {
    return "Comisión 43580 - React JS"
  }
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "pink"}}>{mostrarCurso()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greeting}
          <br />
          {"Coderhouse."}
        </a>
        {/* soy un comentario */}
      </header>
    </div>
    )
}

export default Examples;