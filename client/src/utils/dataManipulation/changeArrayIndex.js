export default function changeArrayIndex(arr, curentIndex, newIndex)
{
    let newArray = [...arr]

    if(newIndex < curentIndex)
    {
        let newIndexElement = newArray.splice(newIndex,1)
        newArray.splice(curentIndex,0,newIndexElement[0])
    }
    else
    {
        let oldIndexElement = newArray.splice(curentIndex,1)
        newArray.splice(newIndex,0,oldIndexElement[0])
    }

    return newArray;
}