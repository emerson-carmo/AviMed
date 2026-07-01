import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>🐦 AviMed</h2>

        <nav>
          <a href="#">🏠 Dashboard</a>
          <a href="#">🐦 Aves</a>
          <a href="#">💊 Medicamentos</a>
          <a href="#">🦠 Doenças</a>
          <a href="#">💉 Tratamentos</a>
          <a href="#">📊 Relatórios</a>
          <a href="#">⚙️ Configurações</a>
        </nav>
      </aside>

      <main className="content">
        <header>
          <h1>Dashboard</h1>
          <p>Bem-vindo ao AviMed.</p>
        </header>

        <div className="cards">
          <div className="card">
            <h3>🐦 Aves</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>💊 Medicamentos</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>🦠 Doenças</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>💉 Tratamentos</h3>
            <h2>0</h2>
          </div>
        </div>

        <div className="pesquisa">
          <input
            type="text"
            placeholder="Pesquisar ave, doença ou medicamento..."
          />
          <button>Pesquisar</button>
        </div>
      </main>
    </div>
  );
}

export default App;