import React from "react";

const AdminResto = () => {
  return (
    <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/50 sm:p-10">
      <section className="rounded-[1.5rem] bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Ringkasan Hari Ini</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Sekilas data transaksi, pendapatan, dan pasien akan ditampilkan di sini.
        </p>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[1.5rem] bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Transaksi Terbaru</h3>
          <p className="mt-2 text-sm text-slate-600">Lihat dan kelola transaksi masuk dengan mudah.</p>
        </article>
        <article className="rounded-[1.5rem] bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Data Pasien</h3>
          <p className="mt-2 text-sm text-slate-600">Kelola daftar pasien dan histori transaksi.</p>
        </article>
      </section>
    </div>
  );
};

export default AdminResto;
