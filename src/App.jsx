import { Header } from './components/header/index';
import { Product } from './components/product/index';
import { Benefits } from './components/benefits/index';
import DescriptionProduct from './components/description/index';
import { Testimonials } from './components/testimonials/index';
import { CTA } from './components/cta/index';
import { Footer } from './components/footer/index';

function App() {

  return (
    <>
      <Header />
      <main className="pt-20"> 
        <Product />
        <Benefits />
        <DescriptionProduct />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
    </>
  )
}

export default App
