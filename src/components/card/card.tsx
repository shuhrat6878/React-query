import { Link } from 'react-router-dom'
import { CreateForm } from '../form/form'
import { Button } from '../ui/button'
import { useQueryClient } from '@tanstack/react-query'

import { useDeleteUser } from '@/page/home/service/mutation/useDeleteUser'
import { Spinner } from '../ui/spinner'


interface UserList {
    id:number,
    name:string,
    username?:string,
    email:string
}


export const Card = ({email,name,username,id}:UserList) => {
  const client = useQueryClient()
  const { mutate: deleteUser ,isPending} = useDeleteUser(id)

  const submit = ()=>{
    deleteUser({ name, email, username: username ?? '' },{
      onSuccess:()=>{
        client.setQueriesData(
          { queryKey: ["user_list"] },
          (oldData: UserList[] = [])=>oldData.filter(item=> item.id !== id)
        )
      }
    })
}

  return (
    <div className='border rounded-2xl p-5 my-5 border-blue-600'>
      <h2 className='text-4xl hover:text-blue-600'>
        <Link to={`/product/${id}`}>{name}</Link>
        </h2>
      <p >{email}</p>
      <p>{username}</p>
      <CreateForm email={email} username={username} name={name} id={id}/>
      <Button onClick={submit} className=" ml-5 bg-red-500" type="submit">{isPending? <Spinner/>: "Delete"}</Button>
    </div>
  )
}

