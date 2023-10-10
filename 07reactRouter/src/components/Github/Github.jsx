import { useState } from "react";
import { useEffect } from "react"

export default function Github(){

    const [data, setData] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])

    return(
        <div className='text-center m-4 bg-gray-600 text-yellow-50
        p-4 text-3xl'>Github Followers: {data.followers}

        </div>
    )
}