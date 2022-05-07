import React,{useState,useEffect} from 'react'
import{Card,Modal,Button} from'react-bootstrap'
import { API_KEY,BASE_URL } from '../ApiUrL/urls';
import axios from 'axios';
import '../Home/Home.css'
function Popularmovies() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [popularMovies,setpopularMovies] = useState([])
    const [overview,setOverview] = useState([])
    
    const PopularMoviesList=async()=>{

     await  axios.get(`${BASE_URL}discover/movie?sort_by=popularity.desc&${API_KEY}`)
    .then((res)=>{
        setpopularMovies(res.data.results)
    
    })
    console.log(popularMovies);

    }

   useEffect(()=>{

   PopularMoviesList();
    

   },[])



const handleShow = (id) =>{
    setShow(true)
    const view=popularMovies.filter((movie)=>{
      return(id===movie.id)
    })
    setOverview(view)
    console.log(view);
    
}




  return (
    
    

    <div>
    <div className='container Cont'>
      <h2> Popular Movies</h2>
      <hr style={{width:'100%'}}></hr>
      <div className='container  bodyContainer'>

{

 popularMovies.map((data)=>{ 

     return(

      
    <Card style={{ width: '18rem' }} className='cardBodyPart'>
      <Card.Img variant="top" style={{height:'18rem'}} 
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <Card.Body className='cardBodyText'>
      <Card.Title>{data.title}</Card.Title>
      <div style={{display:'flex' ,justifyContent:'space-between'}}>
      <Card.Text>
      Release Year : &nbsp;{data.release_date.slice(0,4)}
      </Card.Text>
      <div style={{width:'30%',display:'block' }}>
      <p style={{marginBottom:'0'}}> Rating </p> <span style={{color:'white',
      padding:'1px 3px',borderRadius:'4px',
      backgroundColor:'#584444ad'}}>{data.vote_average}</span>
  </div>
  </div>
  
  <Button variant="outline-warning" onClick={()=>handleShow(data.id)}>
      Overview
    </Button>

    </Card.Body>
  </Card>
)
})
} 

</div>


    

  <Modal show={show} onHide={handleClose}  className='modal_cont' >
      <Modal.Header closeButton  >
        <Modal.Title ><h2 class='overViewTxt' >OVERVIEW</h2></Modal.Title>
      </Modal.Header>
      
    {  overview.map((items)=>{
        return(
          <Modal.Body>
              {items.overview}
              </Modal.Body>
        )

       

      })
    }
     


     
      <Modal.Footer>
      
        <Button variant='secondary'  className='modalbutton'
      onClick={handleClose} > CLOSE  </Button>
      </Modal.Footer>
    </Modal>
      






 </div>

</div>

 
 
 
  )
}

export default Popularmovies