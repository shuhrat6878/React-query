import { request } from "@/config/request"
import { useQuery } from "@tanstack/react-query"


interface User {
    id:number,
    name:string,
    username?:string,
    email:string
}

export const useUse = (id:string) => {
  return useQuery({
    queryKey:["user",id],
    queryFn:()=>request.get<User>(`/users/${id}`).then((res)=>res.data)
  })
}

