import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            <h2 className="font-mono text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Ujian<span className="text-gray-600">Chunin</span>
            </h2>
            <h3 className="font-mono text-xl md:text-3xl mt-10">
              Gunakan cakra, dan Jutsu sebaik mungkin
            </h3>
            <p className="font-mono text-md md:text-xl mt-10">
              Web ini untuk kegiatan ujian Chunin, temen-temen power rangers,
              terus dijaga motivasi dan semangatnya, supaya kalian bisa
              menghadapi Tugas Akhir.
            </p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-6">
              <Link
                to="/weeksatu"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="font-mono mx-auto">Week 1</span>
              </Link>
            </div>
            <div className="m-6">
              <Link
                to="/weekdua"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="font-mono mx-auto">Week 2</span>
              </Link>
            </div>
            <div className="m-6">
              <Link
                to="/guide"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-green-600 hover:border-green-600 hover:bg-green-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="font-mono mx-auto">Guide</span>
              </Link>
            </div>
            <div className="m-6">
              <Link
                to="#"
                className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-gray-600 hover:border-gray-600 hover:bg-gray-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="font-mono mx-auto">Submit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
