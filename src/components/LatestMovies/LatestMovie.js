import React ,{useState,useEffect} from 'react'
import{Card,Button,Modal} from 'react-bootstrap'
import{BASE_URL,API_KEY} from '../ApiUrL/urls'
import axios from 'axios'


function LAtestMovie() {


    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [latestMovies,setlatestMovies] = useState([])
    const [overview,setOverview] = useState([])
    

    const latestMoviesList=async()=>{

     await  axios.get(`${BASE_URL}discover/movie?primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-04-10&${API_KEY}`)
    .then((res)=>{
        setlatestMovies(res.data.results)
    
    })
    console.log(latestMovies);

    }

useEffect(()=>{

latestMoviesList();
    

},[])


latestMovies.map((data)=>{
      console.log("hii",data);
    })

const handleShow = (id) =>{
    setShow(true)
    const view=latestMovies.filter((movie)=>{
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

 latestMovies.map((data)=>{ 

     return(

      
    <Card style={{ width: '18rem' }} className='cardBodyPart'>
      <Card.Img variant="top" style={{height:'19rem'}} 
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <Card.Body className='cardBodyText'>
      <Card.Title>{data.title}</Card.Title>
  <div style={{display:'flex' ,justifyContent:'space-between'}}>
      <Card.Text>
      Release Year : &nbsp;{data.release_date.slice(0,4)}
      </Card.Text>
  <div style={{width:'30%',display:'block' }}>
  <p style={{marginBottom:'0'}}> Rating </p> 
  <span style={{color:'white',
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

export default LAtestMovie