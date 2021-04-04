import './App.css';
import Navbar from "react-bootstrap/Navbar";
import { Col, Container, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className = "my-nav">
          <Navbar.Brand href="#home">
           Aditya's App
          </Navbar.Brand>
        </Navbar>
        <Container>
           <Row>
              <Col xs = {12} md={8}>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum non massa in efficitur. Nam eleifend lorem mauris. Integer eget metus nec nisl finibus feugiat quis eget urna. Sed ultricies, mi non condimentum porta, est leo accumsan dui, suscipit suscipit odio eros pulvinar urna. In elementum nisl quis consectetur tincidunt. Vivamus ut augue est. Nam tristique feugiat ligula, in commodo eros interdum eu. Suspendisse pellentesque ornare dui, sed dignissim arcu elementum vel. Proin pellentesque quam eu lectus semper tempor. Integer fermentum dui vehicula, euismod massa ut, aliquet neque. Pellentesque eu imperdiet ante. Vestibulum euismod, neque ac rhoncus sodales, nunc ligula semper eros, a cursus urna lectus quis nulla.</p>

             <p>Ut erat turpis, mattis ultricies sem nec, dignissim hendrerit enim. Nullam molestie laoreet pellentesque. Proin elit enim, fringilla id ligula eu, finibus laoreet lorem. Aliquam sed nibh ut justo hendrerit aliquam non vitae justo. Nulla a est maximus, molestie magna vitae, feugiat ligula. Morbi interdum diam id ultrices consequat. Nam ut lacinia lectus. Mauris in orci scelerisque leo lacinia porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sollicitudin felis eget mi auctor, non pretium dolor convallis. Vivamus et lacinia leo. In sed bibendum nunc, mattis ornare nisl. Etiam at tellus sit amet augue laoreet rhoncus ut vel libero. Donec sed ipsum in lacus consectetur posuere. In tristique sodales dui quis malesuada. Aliquam blandit eget nisi tempus vestibulum. </p>

             <p>Donec laoreet lacus mauris, eget maximus elit mattis lobortis. Nullam pharetra ut mi sit amet lacinia. Donec ornare ipsum sed tortor commodo, ac pharetra arcu luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum volutpat quis libero eu lacinia. Duis at nunc consectetur, dictum lacus quis, aliquam elit. Phasellus ac ornare nunc, a tempor nisi. Fusce a mauris aliquet, iaculis erat et, mollis metus. Praesent vel justo sed enim viverra ornare. Sed viverra bibendum congue. Sed porta pharetra lacus, sit amet mollis risus accumsan sit amet. Cras egestas blandit aliquet. Nullam accumsan tortor ex, quis dignissim eros ullamcorper nec. Duis a luctus justo. Suspendisse quis euismod arcu.</p>

             <p>In varius massa sed tincidunt sagittis. Maecenas varius varius lectus, ac dapibus quam accumsan ac. Cras egestas dui et eros blandit, vitae venenatis risus blandit. Suspendisse tincidunt sit amet magna sit amet pulvinar. Nam facilisis, arcu rutrum sollicitudin aliquet, turpis dolor convallis urna, eget imperdiet odio arcu et velit. Nam bibendum felis ut nisi rutrum, nec mollis orci maximus. Donec erat sem, dictum vel facilisis et, porttitor in nulla. Praesent et ipsum sed urna pharetra vulputate. Integer ac mattis mauris. Cras faucibus ipsum non sollicitudin facilisis.</p>

             <p>Sed faucibus justo vitae metus aliquam pellentesque eget et risus. Phasellus elementum lectus mauris, eu imperdiet nisi cursus non. Nullam placerat lacinia vehicula. In a est condimentum, eleifend nunc nec, suscipit mauris. Maecenas quis tellus faucibus, faucibus diam vel, facilisis diam. Cras sed lectus faucibus, sodales nisl ut, accumsan justo. Ut vel accumsan purus.</p>
              </Col>
              <Col xs = {12} md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
              </Col>
           </Row>

        </Container>
    </div>
  );
}

export default App;
