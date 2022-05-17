import { useEffect } from "react";
import { StyledLeftSideEditor } from "./StyledLeftSideEditor";

export const LeftSideEditor = () => {

    const createEntry = () => {
      console.log('create entry');
    }
  
    const changeEntryType = () =>{
      console.log('changeEntryType');
    }
  
  
  
  
    useEffect(()=>{
      document.onmouseup = () => {
        console.log(window.getSelection().toString());
      };
    },[])
    
  
      return(
          <StyledLeftSideEditor>
  
            <h2>Changelog</h2>
            <p>entry.description</p>
            <h3>April 3, 2022</h3>
  
            {<button onClick={createEntry}><i className="fa-solid fa-circle-plus"></i></button>}
            <textarea id="" cols="30" rows="10" defaultValue={10}>
  
            </textarea>
           
          </StyledLeftSideEditor>
        )
    };