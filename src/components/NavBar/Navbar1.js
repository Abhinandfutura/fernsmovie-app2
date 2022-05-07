import React from 'react'
import{Nav,Navbar,Container,Dropdown} from 'react-bootstrap'
function Navbar1() {

const prevntDeflt=(e)=>{

//  e.preventDefault()


}
  
  return (
    <div>


<Navbar  style={{background:'#7B6F57'}} variant="dark" fixed='top'>
    <Container  >
    <Navbar.Brand href="#home"  className='h1 text-white ' style={{fontSize:'30px',letterSpacing:'3px'}}>FERNS MOVIES</Navbar.Brand>
    <Nav className="me-auto mt-4 d-flex justify-content-end " style={{width:'100%'}}>
 <Nav.Link onClick={prevntDeflt} href="/" >Home</Nav.Link> 
     <Dropdown style={{marginLeft:'10px'}}>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic " style={{background:'none',border:'none'}}>
  Filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
   
 <Dropdown.Item href="/popular"  onClick={prevntDeflt}>Popular Movies</Dropdown.Item>
  <Dropdown.Item href="/latest"  onClick={prevntDeflt}>Latest Movies</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbar1