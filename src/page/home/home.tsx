import { CardLoading } from "@/components/ui/card/card-loading"
import { useGetUserList } from "./service/query/useGetUserList"
import { Card } from "@/components/ui/card/card"
import { BackDrop } from "@/components/back-droup/back-drop"
import { CreateForm } from "@/components/form/form"


export const Home = () => {

  const { data, isLoading, isError } = useGetUserList()


  return (

    <div className="container">
      <CreateForm/>
      {isLoading ?
        <>
          <BackDrop />
          <CardLoading />
        </>

        : <div>
          {data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>}
      home
    </div>
  )
}


