import { gql,useMutation } from '@apollo/client'
import React from 'react'
import {useState} from "react"

const DeletPemesan = gql`
mutation MyMutation($id: Int!) {
  delete_pemesanan_by_pk(id: $id){
    id
  }
}
`

export default function TabelData({list,queryPemesanan,...props}) {
    const [isEditing, setEditing] = useState(list.editing)
    const [delet, {data,loading} ] = useMutation(DeletPemesan, {refetchQueries : [queryPemesanan]})
    
    const handleEditing = () => {
      setEditing(!isEditing)
    }
    
    const handleHapus = (id) => {
      delet({ variables : {
        id : id
      }})
    }

 

  return (
    <>
    <thead className='bg-purple-300   '>
                            <td className='px-28 border-2'>Nama Pemesan</td>
                            <td className='px-40 border-2'>Alamat</td>
                            <td className='px-28 border-2'>tanggal</td>
                            <td bgcolor="white" className="removeBorder"></td>
                        </thead>
    <tr className='border-2 '>


              <td className={`${isEditing ? "bg-green-700" : "bg-red-700"}  text-white border-2 p-3`}>
  
                {list.nama_pemesan} 
              </td>

              <td className={`${isEditing ? "bg-green-700" : "bg-red-700"} text-white border-2 p-3`}>
  
                {list.alamat} 
              </td>

              <td className={`${isEditing ? "bg-green-700" : "bg-red-700"}  text-white border-2 p-3`}>
                
                {list.tanggal_order} 
              </td>

        
              <td>
                <button
                  className="border-2 border-red-800 p-2"
                  onClick={handleEditing}
                  >
               
                  Finish
                </button>
              </td>

              <td>
                <button className='border-2 border-red-800 p-2 ' onClick={() => {handleHapus(list.id)}}>
                  Hapus
                </button>
              </td>
            </tr>
                  </>
  )
}
