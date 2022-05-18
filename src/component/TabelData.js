import React from 'react'
import {useState} from "react"

export default function TabelData({list,...props}) {
    const [isEditing, setEditing] = useState(list.editing)
    const handleEditing = () => {
      setEditing(!isEditing)
    }
  return (
    <tr>
              <td className={`${isEditing ? "bg-blue-800" : "bg-red-700"}`}>
  
                {list.nama_pemesan}
              </td>
  
              <td>
                <button
                  className="border-2 border-red-800"
                  onClick={handleEditing}
                >
                  pencet
                </button>
              </td>
            </tr>
  )
}
