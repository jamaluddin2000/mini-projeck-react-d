import React from "react";
import { Link } from "react-router-dom";
import Header from "./pages/Header";
import imgOrang from "./asset/style/img/laundry.png";
import Calender from "./asset/style/icon/Calender";
import Map from "./asset/style/icon/Map";
import Truck from "./asset/style/icon/Truck";
import Box from "./asset/style/icon/Box";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-purple-200 pt-10">
        <div className="grid grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 ">
          <div>
            <div>
              <h1 className="laptop:text-6xl text-md text-xl pt-10 pl-20 ">
                Laundry & dry Cleaning Picked Up & delivered to Your door
              </h1>
            </div>

            <div className=" ml-32 pt-16">
              <button className="laptop:text-2xl text-sm border-solid cursor-pointer hover:scale-125 hover:bg-green-600 border-2 text-white border-green-400 bg-green-400  w-60 mb-20 h-12 rounded-lg">
                {" "}
                <Link to="/Schedule">make a schedule</Link>{" "}
              </button>
            </div>
          </div>
          <div>
            <img className="w-2/3 ml-32 " src={imgOrang}></img>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-5xl text-center pt-10">How E-LOundry Work</h1>
        <p className="text-center text-xl mx-10 pt-10">
          E-LOundry memberikan kemudahan bagi anda yang tidak memiliki waktu untuk mengantar pakaian kotor anda, Anda hanya duduk manis di rumah maka kamu akan siap mendatangi rumah anda dengan harga yang bersaing anda akan mendapatkan pelayanan terbaik kami sebagai penyedia jasa loundry berjalan 
        </p>
      </section>

      <section>
        <div className=" grid grid-cols-4 mt-14  p-10    tablet:grid-cols-4 tablet:pl-32  laptop:grid-cols-4 desktop:grid-cols-4 bg-purple-200 mx-10 rounded-full  ">
          <div className="hover:scale-125">
            <Calender />
            <p className="ml-7 font-bold">Complated</p>
          </div>
          <div className="hover:scale-125">
            <Map />
            <p className="ml-3 font-bold">Make a schedule</p>
          </div>
          <div className="hover:scale-125">
            <Truck />
            <p className="ml-5 font-bold">send address</p>
          </div>
          <div className="hover:scale-125">
            <Box />
            <p className="ml-11 font-bold">Process</p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-5xl text-center pt-10">Service</h1>
        <p className="text-center text-xl mx-10 pt-10">
          Service yang di berikan oleh E-lOndry akan memuaskan anda tanpa harus
          berpergian keluar rumah, anda hanya mengirimkan sebuah alamat maka
          kami dalam beberapa menit akan datang ke lokasi anda
        </p>
      </section>
    </>
  );
}
