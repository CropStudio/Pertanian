<template>
    <q-page padding>
        <p v-if="!id">Ini Tambah</p>
        <p v-else>Ini Edit Data : {{id}}</p>
        <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
        >
            <q-input standout="bg-teal text-white" v-model="text" label="Custom standout" :dense="dense" />
            <q-input
                    filled
                    v-model="data.ktp"
                    label="KTP"
                    hint="Kartu tanda Penduduk"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type your KTP']"
            />
            <q-input
                    filled
                    v-model="data.nama"
                    label="NAMA"
                    hint="NAMA"
            />
            <q-input
                    filled
                    v-model="data.tempat_lahir"
                    label="Tempat Lahir"
                    hint="Tempat Lahir"
            />
            <q-input
                    filled
                    v-model="data.tanggal_lahir"
                    hint="Tanggal Lahir"
                    type="datetime"
            />
            <q-input
                    filled
                    v-model="data.jenis_kelamin"
                    label="Jenis Kelamin"
                    hint="Jenis Kelamin"
            />
            <q-input
                    filled
                    v-model="data.pendidikan"
                    label="Pendidikan"
                    hint="Pendidikan"
            />
            <q-input
                    filled
                    v-model="data.status_keluarga"
                    label="Status Keluarga"
                    hint="Status Keluarga"
            />
            <q-input
                    filled
                    v-model="data.alamat"
                    label="Alamat"
                    hint="Alamat"
            />
            <q-input
                    filled
                    v-model="data.no_hp"
                    label="No Handphone"
                    hint="No Handphone"
            />
            <q-input
                    filled
                    v-model="data.nama_kelompok_petani"
                    label="Nama Kelompok Tani"
                    hint="Nama Kelompok Tani"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      data: {},
      id: this.$route.params.id
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.$axios.get('petani/' + this.$route.params.id)
        .then((response) => {
          if (response.data.status) {
            this.data = response.data.message
          } else {
            this.$q.notify({
              color: 'negative',
              message: 'Gagal mendapatkan data',
              icon: 'close'
            })
          }
        })
    }
  }
}
</script>
