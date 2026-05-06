export const inputConfig = [
  {
    key: 'nama',
    label: 'Nama Pemesan',
    placeholder: 'Contoh: Andi Pratama',
    type: 'text',
  },
  {
    key: 'makanan',
    label: 'Nama Obat',
    placeholder: 'Contoh: Paracetamol 500mg',
    type: 'text',
  },
  {
    key: 'jumlahPorsi',
    label: 'Jumlah Dosis',
    placeholder: 'Contoh: 2',
    type: 'text',
  },
]

export const tujuanOptions = [
  { value: '', label: 'Pilih tujuan' },
  { value: 'hemat', label: 'Terapi Ringan' },
  { value: 'sehat', label: 'Pemulihan Umum' },
  { value: 'kenyang', label: 'Terapi Intensif' },
]

export const tingkatPedasOptions = [
  { value: '', label: 'Pilih kategori obat' },
  { value: 'tidak-pedas', label: 'Obat Bebas' },
  { value: 'sedang', label: 'Obat Resep' },
  { value: 'pedas', label: 'Vitamin' },
]

export const baseKalori = {
  hemat: 350,
  sehat: 280,
  kenyang: 450,
}
