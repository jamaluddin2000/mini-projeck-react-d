import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import Loading from "./pages/Loading";
import Header from "./pages/Header";
import LoginStyle from "./pages/LoginStyle";

const QueryStatus = gql`
  query MyQuery($_eq: String) {
    pemesanan(where: { nama_pemesan: { _eq: $_eq } }) {
      nama_pemesan
      alamat
      tanggal_order
    }
  }
`;

export default function Status() {
  const [getQueryStatus, { data, loading }] = useLazyQuery(QueryStatus);

  const [nama, setNama] = useState("");

  const onChangeNama = (e) => {
    setNama(e.target.value);
  };

  const handleSumbid = () => {
    getQueryStatus({ variables: { _eq: nama } });
  };

  if (loading)
    return (
      <div>
        <Loading />
        <div className="text-center text-6xl ">Tunggu ya!! Lagi Loading...</div>
      </div>
    );
  return (
    <>
      <Header />
      <div className="bg-purple-200">
        <h1 className="text-5xl text-center pt-10">Cari Status Schedule Mu</h1>
        <div className="container mx-auto mt-10 w-full ml-40 pb-10  ">
          <input
            className="border-red border-2  text-center container w-9/12 p-2 rounded-xl "
            placeholder="Cari Schedule mu...."
            text="text"
            onChange={onChangeNama}
          />
          <button
            className="border-2 border-red bg-green-400 p-2 rounded-2xl text-white font-bold ml-3 "
            onClick={handleSumbid}
          >
            Perlihatkan
          </button>
        </div>

        {data?.pemesanan.map((list) => (
          <div className="pb-36">
            <table cellPadding="5px" cellSpacing="0" className="m-auto mt-10">
              <thead className="bg-purple-300  ">
                <td className="px-40 border-2 border-black">Nama Pemesan</td>
                <td className="px-40 border-2 border-black">Alamat</td>
                <td className="px-40 border-2 border-black">tanggal</td>
              </thead>
              <tr>
                <td className="border-2 border-black">{list.nama_pemesan}</td>
                <td className="border-2 border-black">{list.alamat}</td>
                <td className="border-2 border-black">{list.tanggal_order}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
