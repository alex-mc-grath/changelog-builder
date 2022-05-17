import styled from 'styled-components/macro';
import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const StyledLogin = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 500px;
    height: 500px;
    width: 100%;
    height:100%;
    flex-direction:column;
    background: ${props=>props.theme.colors.quinary};
    margin:auto;

    form{
        display:flex;
        flex-direction:column;
        width: 60%;
        h3{
            color: #FAEDF0;
            margin:auto;
        }

        .form-group{
            display: flex;
            justify-content:flex-start;
            align-items: center;
            flex-direction: column;
            margin-top:1rem;
        }

        label{
            margin:0;
            margin-bottom: 0.7rem;
            width:100%;
            font-weight:bold;
            opacity:50%;
        }
        input{
            background: white;
            border: 2px solid #161853;
            border-radius: 4px;
            height: 1.4rem;
            width: 99%;
            margin:0;

            &:focus,&:active{
                outline: none;
                border: 2px solid #161853;
                
            }

        }
        button[type=submit]{
            background-color: #FAEDF0;
            border-radius: 4px;
            border: 2px solid #FAEDF0;
            color: #161853;
            cursor: pointer;
            margin-top: 1.3rem;
            width:100%;
            padding: .4rem .5rem;

            &:hover{
                border: 2px solid #FAEDF0;
                background-color: #FAEDF0;
            }
        }
    }
`;

export const Login = ( )=>{

    const navigate = useNavigate()

    const redirectURL = 'https://linear-application.herokuapp.com/oauth/callback'

    useEffect(() => {
        if(redirectURL === '')
        {
            navigate("/oauth/callback")
        }
    }, [])

    return(
        <StyledLogin>
            {redirectURL !== '' &&
                <a className='big-button' href={`https://linear.app/oauth/authorize?response_type=code&client_id=c1c41f8bf8d55388cbbb9a7eecf35ec0&redirect_uri=https%3A%2F%2Flinear-application.herokuapp.com%2Foauth%2Fcallback&state=SECURE_RANDOM&scope=read`}>Login with linear</a>
            }
        </StyledLogin>
    )
}