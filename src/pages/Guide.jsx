import React from "react";

export default function Guide() {
  return (
    <article className="py-12 px-4">
      <h1 className="font-mono text-4xl text-center mb-4 font-semibold font-heading font-semibold">
        Arahan untuk menjawab soal
      </h1>

      <div className="max-w-3xl mx-auto">
        <p className="font-mono mb-10">
        Dengan segala hormat, adik adikku tolong diperhatikan tata cara menjawab soal yang udah saya berikan, kalian punya waktu kurang lebih satu minggu dari sekarang untuk menyelesaikan semua soal yang sudah ada, adapun tata cara yang harus di patuhi dalam menjawab soal yaitu
        </p>
       
        <ul className="font-mono mb-4 list-inside list-disc">
          <li>Buat Repo untuk mengumpulkan semua jawaban yang sudah kalian jawab</li>
          <li>Buat 1 folder tiap soal yang berisi 1 file pengerjaan (source-code) 1 file Readme.md untuk menjelaskan langkah langkah me,ecahkan soal tsb</li>
          <li>Gunakan juga <a className="text-blue-800" href="https://playcode.io/">Playcode</a> untuk menjawab dan cantumkan link jawaban di file Readme.md sebagai rujukan penyelesaian.</li>
          <li>Buat serapih mungkin, dan usahakan semaksimal mungkin.</li>
        </ul>
       
        <blockquote className="text-center mb-10 mt-20">
          <p className="text-lg font-semibold mb-2">
            "The mistakes people make are usually labeled as experience. But with a true mistake, there will be no experience gained."
          </p>
          <footer className="text-gray-400">Dhiyo7</footer>
        </blockquote>
      </div>
    </article>
  );
}
