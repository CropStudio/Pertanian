/*
export function someAction (context) {
}
*/
import { axiosInstance } from 'boot/axios'
const qs = require('qs')
export function simpan ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('petani', qs.stringify({
      ktp: payload.ktp,
      nama: payload.nama,
      tempat_lahir: payload.tempat_lahir,
      tanggal_lahir: payload.tanggal_lahir,
      jenis_kelamin: payload.jenis_kelamin,
      pendidikan: payload.pendidikan,
      status_keluarga: payload.status_keluarga,
      alamat: payload.alamat,
      no_hp: payload.no_hp,
      namakelopoktani: payload.nama_kelompok_petani
    }))
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
export function editsimpan ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.put('petani/' + payload._id, qs.stringify({
      ktp: payload.ktp,
      nama: payload.nama,
      tempat_lahir: payload.tempat_lahir,
      tanggal_lahir: payload.tanggal_lahir,
      jenis_kelamin: payload.jenis_kelamin,
      pendidikan: payload.pendidikan,
      status_keluarga: payload.status_keluarga,
      alamat: payload.alamat,
      no_hp: payload.no_hp,
      namakelopoktani: payload.nama_kelompok_petani
    }))
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
export function delet ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete('petani/' + payload._id)
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
