import { Link } from 'react-router-dom'


interface UserList {
    id:number,
    name:string,
    username?:string,
    email:string
}

export const Card = ({email,name,username,id}:UserList) => {
  return (
    <div className='border rounded-2xl p-5 my-5 border-blue-600'>
      <h2 className='text-4xl hover:text-blue-600'>
        <Link to={`/product/${id}`}>{name}</Link>
        </h2>
      <p >{email}</p>
      <p>{username}</p>
    </div>
  )
}

