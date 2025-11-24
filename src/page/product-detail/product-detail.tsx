import { useParams } from "react-router-dom"
import { useUse } from "./service/query/useUse"

export  const ProductDetail = () => {
  const {id}= useParams()
  const {data,isLoading,isError}= useUse(id as string);

  if(isError){
    return <h1 className="text-7xl text-red-500">User Not Faund</h1>
  }

  return (
    <div className="container">
      {isLoading ? <h2>Loading...</h2> :<>
      <h2 className="text-4xl">{data?.name}</h2>
      <h2 className="text-3xl">{data?.email}</h2>
      </>}
    </div>
  )
}

