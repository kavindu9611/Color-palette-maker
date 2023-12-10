import styled from "styled-components"
import { useState } from "react"
import { palette } from "../myPalettes"
import { Link } from "react-router-dom"


function Palettes() {

    const [myPalettes,setMyPalettes] = useState(palette)

    //console.log(myPalettes)
  return (
    <PalettesStyled>
      <div className="palettes">
         
        {
            myPalettes.map((pal,index)=>{
                return  <Link to={`/palette/${pal.name}`} key={pal.name}>
                         <div className="palette">
                            {pal.colors.map((col,i)=>{
                                 return <div  key ={i} 
                                          className="color"
                                          style={{backgroundColor: col}}>  
                                                                                       
                                       </div>
                       } )  }
                   
                    
                </div>
                <p>{pal.name}</p>
            </Link>
            } )
        }
      </div>
    </PalettesStyled>
  )
}

 const PalettesStyled = styled.div`
  position:relative;
  z-index:5;
 .palettes{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(400px,1fr));
    grid-gap:25px;
    padding:2rem 18rem;
    transition:all .3s ease;
    a{
      text-decoration: none;
      display: inline-block;
      padding: 1rem;
      background-color: white;
      border-radius: 7px;
      box-shadow: 1px 3px 20px rgba(0,0,0, 0.2);
    }
    p{
    font-size: 1.5rem;   
    padding-top: .5rem;
    display: inline-block;
    background: linear-gradient(90deg, #7263F3 20%,#F56692 50%, #6FCF97 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    .palette{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        width:100%;
        height:250px;

        .color{
            width:100%;
            height:100%;
        }
    }
 }
 
 `;

export default Palettes
