import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../myPalettes';

function Palette() {

  const {id} = useParams()  
  const initialPalette = palette.find(pal => pal.name === id)

  //state
  const [myPalette,setMyPalette] = useState(initialPalette );

  return (
    <PaletteStyled>
    <div className="colors">
        {myPalette.colors.map((color,index)=>{
            return <div 
                 key={index} 
                 style={{background:color}}
                 className='full-color'></div>
        })}
    </div> 
    </PaletteStyled >
  )
}

const PaletteStyled = styled.div`
    position:relative;
    z-index:5;
    width:100%;

    .colors{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        width:100%;
        height:94vh;
        .full-color{
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative
        }
    }

`;

export default Palette
