import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

// data Dummy
// import response_data from '../../src/data/data.json'

export default function DaftarSoal() {

    // const getDataSoal = () => {
    //     fetch({response_data})
    //     .then((res) => {
    //         console.log("data ", JSON.stringify(res));
    //     })
    // }

    // useEffect(() => {
    //     getDataSoal()
    // })

  return (
    <div className="relative min-h-screen pb-20 font-mono text-cyan-900">
      <div className="w-full bg-gray-100 flex justify-center h-20 text-cyan-900">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4 underline">
            <Link to="/">Home</Link>
          </div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline">
                <Link to="/guide">Guide</Link>
              </li>
              <li className="p-4 underline">
                <a href="#">Submit</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="container max-w-3xl p-4">
          <h1 className="py-5">List Task:</h1>
          <div className="post py-5">
            <a href="#">
              <h2 className="underline hover:text-cyan-900">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              repudiandae quae praesentium architecto tempora suscipit nesciunt
              sunt hic optio vitae.
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-100 flex justify-center h-20 text-cyan-900 absolute bottom-0">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4">© All rights reserved.</div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline">
                <a href="#">GitHub</a>
              </li>
              <li className="p-4 underline">
                <a href="#">Twitter</a>
              </li>
              <li className="p-4 underline">
                <a href="#">Email Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
