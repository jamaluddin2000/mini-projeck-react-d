import React from "react";
import imgOrang from "../asset/style/img/laundry.png";

export default function RegisterStyle(props) {
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
            <p className="text-center font-semibold mx-4 mb-0 font text-2xl">Register</p>
          </div>
          
          {/* Username */}
          <div class="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border-gray-500 bg-blue-50"
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

          <div class="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out px-64"
              onClick={props.handleSumbid}
            >
              Create
            </button>

            {props.data && <div className="text-red-500 text-center">Data is not complete, enter again</div>}

          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</>
  );
}
