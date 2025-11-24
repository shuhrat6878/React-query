import { useQuery } from "@tanstack/react-query"
import { request } from "@/config/request"


interface UserList {
    id:number,
    name:string,
    username?:string,
    email:string
}

export const useGetUserList = () => {
  return useQuery({
    queryKey:["user_list"],
    queryFn: ()=> request.get<UserList[]>("/users").then((res)=> res.data)
  })
}

