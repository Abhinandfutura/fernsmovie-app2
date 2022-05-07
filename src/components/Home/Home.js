import React,{useEffect,useState} from 'react'
import {Card,Button,Modal} from 'react-bootstrap'
import "./Home.css"
import {BASE_URL,API_KEY} from '../ApiUrL/urls'
import axios from 'axios'



function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 

  const [allMovies,setAllMovies] = useState([])
  const [Overview,setOverview] = useState([])


const Display=async()=>{

  await axios.get(`${BASE_URL}discover/movie?${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
  .then((res)=>{
    setAllMovies(res.data.results)
  
    
})

}

useEffect(()=>{

 Display();


  },[])



const handleShow = (id) =>{
  setShow(true)
  const view=allMovies.filter((movie)=>{
    return(id===movie.id)
  })
  setOverview(view)
  console.log(view);
  

} 






  return (
    <div>
   <div className='container Cont'>
     <h2> All Movies</h2>
     <hr style={{width:'100%'}}></hr>
     <div className='container  bodyContainer'>
     
{

  allMovies.map((data)=>{

    return(

        
  <Card style={{ width: '18rem' }} className='cardBodyPart'>
    <Card.Img variant="top" style={{height:'19rem'}} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
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
        
      {  Overview.map((items)=>{
          return(

              <Modal.Body>
                 <h2>{items.title} - ({items.release_date})</h2><br/>
                {items.overview}
               </Modal.Body>

          )
        })
      }
       


       
        <Modal.Footer className='modalFooter'>
        
          <Button variant='secondary'  className='modalbutton'
          onClick={handleClose} > CLOSE  </Button>
        </Modal.Footer>
    </Modal>
        






   </div>



    </div>
 
  )
}

export default Home