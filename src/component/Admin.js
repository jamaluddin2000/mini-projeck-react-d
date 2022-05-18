import React from "react";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import TabelData from "./pages/TabelData";
import AdminStyle from "./pages/AdminStyle";
import Loading  from "./pages/Loading"


const queryPemesanan = gql`
  query MyQuery {
    pemesanan {
      id
      nama_pemesan
      alamat
      tanggal_order
      editing
    }
  }
`;
export default function Admin() {
  const { data, loading } = useQuery(queryPemesanan);

  const initial = {
    editing: false,
  };

  const [isEditing, setEditing] = useState(initial.editing);


  if (loading) return(
    <div>
    <Loading />
    <div className='text-center text-6xl '>Tunggu ya!! Lagi Loading...</div>
    </div>
  )

  
  return (
    <div className="" >
    <AdminStyle />
      <table className="ml-28 mt-10">
      {data.pemesanan.map((list) => (
        <TabelData list={list} queryPemesanan={queryPemesanan}  />
      ))}
      </table>
    </div>
  );
}

