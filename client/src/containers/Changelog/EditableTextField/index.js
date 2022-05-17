import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {loadChangelogHeaderText, updateChangelogHeaderText} from './actions'

const StyledEditableTextField = styled.span`
    i {
        color: #292C6D;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }

`

export const EditableTextField = () => {
    const [text, setText] = useState(null)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        loadChangelogHeaderText(setText)
    }, [])

    return (
        <StyledEditableTextField>
        {text !== null &&
            <>
            {editMode && 
                <>
                <input type="text" value={text} onChange={({target}) => setText(target.value)}/>&nbsp;&nbsp;<i className="fa-solid fa-check" onClick={() => {updateChangelogHeaderText(text); setEditMode(false)}}></i>
                </>
            }
            {!editMode &&
                <>{text}&nbsp;&nbsp;<i className="fa-solid fa-pencil" onClick={() => setEditMode(true)}></i></>
            }
            </>
        }
        </StyledEditableTextField>
    )
}