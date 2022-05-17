import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledCreateNewChangelog = styled.div`
    a{
        color: white;
        text-decoration: none;  
    } 
`;

export const CreateNewChangelog = ( )=>{

    return(
        <Link to='/login' className='big-button'>
            <StyledCreateNewChangelog>
                
                        Create New Changelog
                
            </StyledCreateNewChangelog>
        </Link>
    )
}