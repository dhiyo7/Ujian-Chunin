import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// data Dummy
// import response_data from '../../src/data/data.json'

const BASE_URL = process.env.REACT_APP_URL;

export default function DaftarSoal() {
  const [soalMain, setSoalMain] = useState([]);

  const getDataSoal = async () => {
    await axios.get(BASE_URL).then((res) => {
      const soal = res.data.data;
      setSoalMain(soal);
    });
  };

  useEffect(() => {
    getDataSoal();
  }, []);

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
          {soalMain.map(({ id, name, descriptoin, soal }) => {
            return (
              <div className="post py-5" key={id}>
                <h2 className="underline hover:text-cyan-900 text-xl text-bold">
                  {name}
                </h2>
                <p>{descriptoin}</p>
                <div className="border-dotted mt-5">
                  {soal.map(({ id_soal, soalnya }) => {
                    return (
                      <ul className="px-3 list-disc mt-2" key={id_soal}>
                        <li>{soalnya}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="w-full bg-gray-100 flex justify-center h-20 text-cyan-900 absolute bottom-0">
        <div className="container max-w-3xl flex justify-between h-20 items-center">
          <div className="p-4">© All rights reserved.</div>
          <nav>
            <ul className="flex justify-start">
              <li className="p-4 underline">
                <a href="https://github.com/dhiyo7">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
