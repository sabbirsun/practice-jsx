import './App.css';
import Card from './Pages/BlogWebsite/Card';
import Carousel from './Pages/BlogWebsite/Carousel';

function App() {
  return (
    <>
      {/* Pages/Components commented out */}
      {/* <Home />
      <About />
      <Contact />
      <Feedback />
      <Fragment />
      <Clipboardoncopy />
      <Focus />
      <Keyboard />
      <Fiter />
      <WelComeAdmin />
      <Style />
      <ReactBootstrap />
      <Input /> 
      <Form />
      <Controlled />
      <Expressions /> */}
      
      {/* Rendering Carousel */}
      <Carousel />

      {/* Rendering Cards */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <Card img="img/natural.jpg" title="Card title 1" p="Some quick example text to build on the card title and make up the bulk of the card's content." Btn="Go somewhere"/>
          </div>
          <div className='col-md-4'>
            <Card img="img/road.jpg" title="Card title 1" p="Some quick example text to build on the card title and make up the bulk of the card's content." Btn="Go Anywhere"/>
          </div>
          <div className='col-md-4'>
            <Card img="img/tree.jpg" title="Card title 1" p="Some quick example text to build on the card title and make up the bulk of the card's content." Btn="Go Anywhere"/>
          </div>
          {/* Add another col-md-4 here if needed */}
        </div>
      </div>
    </>
  );
}

export default App;
