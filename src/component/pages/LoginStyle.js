import React from "react";
import imgOrang from "../asset/style/img/laundry.png";
import {Link} from "react-router-dom"


export default function LoginStyle(props) {
  return (
    <>
    <section className=" h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src={imgOrang}
          className="object-contain  w-5/6"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0 font text-2xl">Hellow Welcome to My App</p>
          </div>

          {/* Username input  */}
          <div className="mb-6">
            <input
              type="text"
              class="form-control  w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border-gray-500 bg-blue-50"
              placeholder="Username"
              onChange={props.onChangeUsername}
            />
          </div>

          {/* Password input */}
          <div class="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border-gray-500 bg-blue-50"
              placeholder="Password"
              onChange={props.onChangePassword}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a href="#!" className="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-64"
              onClick={props.handleSumbid}
            >
              Login
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link
                to="/Register"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</Link>
            </p>
            {props.data && <div className="text-red-500 text-center">Data is not complete, enter again</div>}

          </div>
        </form>
      </div>
    </div>
  </div>
</section>


    {/* <div className="grid grid-cols-3 ">
      <div className=" mt-40 justify-items-center">
      <h1 className="font-bold text-2xl text-center  ">Hellow, Welcome To My App</h1>

        <div className="text-center">
          <div className="pt-7">
            <label className="font-bold"> Username </label>
          </div>
          <input
            className="border-solid border-2 border-gray-400 bg-blue-100"
            type="text"
            onChange={props.onChangeUsername}
          />
          
        </div> */}

        {/* <div>
          <div className="pt-7 text-start">
            <label > Password </label>
          </div>
          <input
            className="border-solid border-2 border-gray-400 bg-blue-100"
            type="text"
            onChange={props.onChangePassword}
          />
        </div> */}
{/* 
        <button
          className="border-solid border-2 border-gray-400 bg-blue-100"
          onClick={props.handleSumbid}
        >
          Masuk
        </button>
        {props.data && <div>GAGAL</div>}
      </div>

      <div className="bg-blue-700 col-span-2">
        <img src={imgOrang} />
      </div>
    </div> */}
    </>
  );
}
