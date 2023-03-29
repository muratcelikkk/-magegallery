import Picture from "../components/Picture"
import data from "../helper/data"

const Homepage = () => {
    const renderedData=data.map(({photographer,src})=>{
                return <Picture photographer={photographer} src={src.large} />
            })
  return (
    <div style={{minHeight:'100vh'}}>
        <h1>Image Gallery</h1>
       <div className="pictures">{renderedData}</div> 
    </div>
    
  )
}

export default Homepage