import "./App.scss";

import { Navbar, Sidebar, SortHeader, ProductCard } from "./components";

import { useProductContext } from "./context/ProductProvider";

function App() {
  const { finalProducts } = useProductContext();

  return (
    <main className="app">
      <Navbar />
      <section className="app__content">
        <Sidebar />
        <section className="app__data">
          <SortHeader />
          <div className="app__products">
            {finalProducts.length > 0 ? (
              finalProducts.map((product) => (
                <ProductCard {...product} key={product.id} />
              ))
            ) : (
              <p> No products found for current filter! </p>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
