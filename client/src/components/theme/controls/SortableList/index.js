import {useState,useRef, useMemo, useEffect} from 'react'
import {StyledSortableList} from './StyledSortableList'

//!IMPORTANT: items is an array of {key, item, data} !!!!!!!!!!!!!!!!!!!!!!!!!!!!

const SortableList = ({items, orderChangeCallback, onRemoveCallback, emptyElement=<span>Empty</span>}) => {

    const [state,setState] = useState([])

    const dragging = useRef(null)

    const [dragState, setDragState] = useState('')

    const onDrag = (e) => {
        let target = e.target;
        while(target.getAttribute("name") !== "_sortableListItem")
        {
            target = target.parentNode;
        }
        dragging.current = e.target.id

        window._SortableListDrag = () => removeById(dragging.current)
    }

    const removeById = (id) => {

        for(let i=0;i<state.length;i++)
        {
            if(state[i].key === id)
            {
                let newState = [...state]
                let toReturn = {...newState[i]}
                newState.splice(i, 1)
                setState(newState)

                if(onRemoveCallback)
                {
                    onRemoveCallback(i)
                }

                return toReturn
            }
        }

        return null
    }


    const onDragOver = (e) => {
        e.preventDefault()
    }


    const onDrop = (e) => {

        let target = e.target;
        while(target.getAttribute("name") !== "_sortableListItem")
        {
            target = target.parentNode;
        }

        let index1 = null;
        let index2 = null;
        
        for(let i=0;i<state.length;i++)
        {
            if(state[i].key === dragging.current)
            {
                index1 = i;
            }
            else if(state[i].key === target.id)
            {
                index2 = i;
            }
        }

        dragging.current = null

        let newState = [...state]
        let oldValue = null;
        if(index1 !== null)
        {
            oldValue = newState.splice(index1, 1)[0]
        }
        else
        {
            oldValue = window._SortableListDrag()
        }
        newState.splice(index2, 0, oldValue)

        setState(newState);

        if(orderChangeCallback)
        {
            orderChangeCallback({"keyOrder":newState.map(item => item.key), "orderedData":newState.map(item => item.data)})
        }
    }


    useEffect(() => {
        setState(items)
    }, [items])


    return (
        <StyledSortableList>
            {state.length > 0 && state.map(item => (
                <li 
                    key={item.key} id={item.key}
                    name={"_sortableListItem"}
                    draggable={true} 
                    onDrag={onDrag} 
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                >
                    {item.item}
                </li>
            ))}
            {state.length == 0 &&
                <div name={"_sortableListItem"} onDrop={onDrop} onDragOver={onDragOver}>{emptyElement}</div>
            }
        </StyledSortableList>
    )
}

export {SortableList}
export default SortableList