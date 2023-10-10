import { useParams } from "react-router-dom"

export default function User(){
    const {userid} = useParams()
    return(
        <div className='bg-gray-600 text-center text-yellow-100'>
            User: {userid}
        </div>
    )
}