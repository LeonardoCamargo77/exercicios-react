export default function Home() {
    return (
      <main>
        <h1 className="promocoes">PROMOÇÕES DE CELULARES</h1>
        <div className="product-container">
          <div className="product">
            <img src="public/iphone10.png" alt="iPhone 12 Pro" />
            <p>R$1059,00 - iPhone 12 Pro</p>
          </div>
          <div className="product">
            <img src="public/iphone14.png" alt="iPhone 14 Pro Max" />
            <p>R$950 - iPhone 14 Pro Max</p>
          </div>
          {/* Adicione mais produtos conforme necessário */}
        </div>
      </main>
    );
  }
  