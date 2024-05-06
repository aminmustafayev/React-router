import React from 'react'
import { deleteOne } from '../../../API'
import Swal from 'sweetalert2'

const Delete = ({id}) => {
  return (
    <button style={{backgroundColor:"red", border:"none",
      padding:'15px', borderRadius:'10px', color:'white'
    }} onClick={async()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                await deleteOne("countries",id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }}>Delete</button>
  )
}

export default Delete