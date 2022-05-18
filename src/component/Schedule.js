import React, { useState, useCallback, useEffect } from "react";
import Header from "./pages/Header";
import {gql, useMutation, useQuery} from '@apollo/client'

 
const insertPemesanan = gql`
mutation MyMutation($nama_pemesan: String, $tanggal_order: date, $alamat: String ) {
  insert_pemesanan(objects: {nama_pemesan: $nama_pemesan, tanggal_order: $tanggal_order, alamat: $alamat}){
    returning{
      nama_pemesan
      alamat
      tanggal_order
    }
  }
}
`

export default function Schedule() {
  const [insertPemesan, {data, loading}] = useMutation(insertPemesanan)
  const [namaPemesan , setNamaPemesan] = useState("")
  const [alamat , setAlamat] = useState("")
  const [Tanggal , setTanggal] = useState("")

  const _onChangNamaPemesan = (e) => {
    setNamaPemesan(e.target.value)
  }
  const _onChangAlamat = (e) => {
    setAlamat(e.target.value)
  }
  const _onChangTanggal = (e) => {
    setTanggal(e.target.value)
  }

  useEffect(() => {
    console.log(namaPemesan)
  },[namaPemesan])

  useEffect(() => {
    console.log(alamat)
  },[alamat])

  useEffect(() => {
    console.log(Tanggal)
  },[Tanggal])

  
  const handleSubmid = useCallback((event)=> {
    if(namaPemesan === "" || alamat  === "" || Tanggal === ""){
      alert("Data ada yang Kosong!!!")
      console.log("datanya", namaPemesan, alamat, Tanggal  )
    }else{
      insertPemesan({variables : {nama_pemesan : namaPemesan, tanggal_order : Tanggal,alamat : alamat }})
      alert(`Berhasil Menambahkan Pemesanan ${namaPemesan}`)
    }
    event.preventDefault();

  },[namaPemesan,alamat,Tanggal])
  


  return (
    <>
      <Header />
      <section className="bg-purple-200 pl-20">
      <form onReset={handleSubmid}>
        <div className="container  mx-auto  pt-10 ">
          <div>
            <div>
              <label className="font-bold">Nama Pemesan</label>
            </div>
            <input
              className=" border-2 p-1 border-black w-11/12 mt-3"
              type="text"
              required
              placeholder="masukkan nama pemesan "
              onChange={_onChangNamaPemesan}
            />
          </div>

          <div className="pt-5">
            <div>
              <label className="font-bold">Alamat Pemesan</label>
            </div>
            <input  className="border-2 p-1 mt-3 border-black w-11/12" type="text" placeholder="masukkan alamat pemesan" onChange={_onChangAlamat} required />
          </div>

          <div className="pt-5">
            <div>
              <label className="font-bold">Tanggal Order</label>
            </div>

            <input className="border-2 p-1 mt-3 border-black w-11/12" type="date" onChange={_onChangTanggal} />
          </div>
        </div>

        <div className="pt-10 text-center pb-10">
          <button className="text-2xl border-solid border-2 text-white border-green-400 bg-green-400 w-60 h-12 rounded-lg " onClick={handleSubmid}>
            Submit
          </button>
        </div>

      </form>
      </section>
    </>
  );
}
