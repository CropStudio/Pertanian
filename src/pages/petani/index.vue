<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="q-pa-md">
        <q-table
                title="Petani" :data="data" :columns="columns" row-key="ktp" :loading="loading" selection="multiple" :selected.sync="selected"
        >
            <template v-slot:top="props">
                <div class="col-4 q-table__title">Data Petani</div>
                <q-space/>
                <q-input outlined dense debounce="300" color="primary" v-model.trim="filter">
                    <template v-slot:append>
                        <q-icon name="search"/>
                    </template>
                </q-input>
                <q-btn
                        icon="add"
                        unelevated
                        label="Tambah"
                        size="sm"
                        class="q-ml-xs q-mr-xs q-pa-sm bg-green-5 text-white"
                        dense
                        @click="basic = true"
                />
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td class="bg-grey-3" auto-width>
                        <q-toggle dense v-model="props.selected"/>
                    </q-td>
                    <q-td key="ktp" :props="props">
                        {{ props.row.ktp }}
                        <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" />
                    </q-td>
                    <q-td key="nama" :props="props">{{ props.row.nama }}</q-td>
                    <q-td key="tempat_lahir" :props="props">{{ props.row.tempat_lahir }}</q-td>
                    <q-td key="tanggal_lahir" :props="props">{{ props.row.tanggal_lahir }}</q-td>
                    <q-td key="jenis_kelamin" :props="props">{{ props.row.jenis_kelamin }}</q-td>
                    <q-td key="pendidikan" :props="props">{{ props.row.pendidikan }}</q-td>
                    <q-td key="status_keluarga" :props="props">{{ props.row.status_keluarga }}</q-td>
                    <q-td key="alamat" :props="props">{{ props.row.alamat }}</q-td>
                    <q-td key="no_hp" :props="props">{{ props.row.no_hp }}</q-td>
                    <q-td key="nama_kelompok_petani" :props="props">{{ props.row.nama_kelompok_petani }}</q-td>
                </q-tr>
                <q-tr v-show="props.expand" :props="props">
                    <q-td colspan="100%">
                        <div class="text-center q-gutter-sm">
                            <q-btn
                                    dense
                                    size="sm"
                                    class="bg-red text-white q-pl-sm q-pr-sm"
                                    icon="ion-trash"
                                    @click="delet(props.row._id)"
                            >&nbsp;delete</q-btn>
                            <q-btn
                                    dense
                                    size="sm"
                                    class="bg-light-blue text-white q-pl-sm q-pr-sm"
                                    icon="ion-create"
                                    :to="'petani/edit/' + props.row._id"
                            >&nbsp;edit</q-btn>
                        </div>
                    </q-td>
                </q-tr>
            </template>

        </q-table>
        <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate" >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">Terms of Agreement</div>
                </q-card-section>

                <q-card-section>
                    <q-form
                            @submit="onSubmit"
                            @reset="onReset"
                            class="q-gutter-md"
                    >
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

                        <div>
                            <q-btn label="Submit" type="submit" color="primary"/>
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </q-card-section>

            </q-card>
        </q-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      basic: false,
      fixed: false,
      id: this.$route.params.id,
      selected: [],
      columns: [
        {
          name: 'ktp',
          required: true,
          label: 'Kartu Tanda Penduduk',
          align: 'left',
          field: row => row.ktp,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nama', align: 'center', label: 'Nama Petani', field: 'nama', sortable: true },
        { name: 'tempat_lahir', label: 'Tempat Lahir', field: 'tempatlahir', sortable: true, style: 'width: 10px' },
        { name: 'tanggal_lahir', label: 'Tanggal Lahir', field: 'tanggallahir' },
        { name: 'jenis_kelamin', label: 'Jenis Kelamin', field: 'jeniskelamin' },
        { name: 'pendidikan', label: 'Pendidikan', field: 'pendidikan' },
        { name: 'status_keluarga', label: 'Status keluarga', field: 'statuskeluarga', sortable: true },
        { name: 'alamat', label: 'Alamat', field: 'alamat', sortable: true },
        { name: 'no_hp', label: 'No HP', field: 'nohp', sortable: true },
        { name: 'nama_kelompok_petani', label: 'Nama Kelompok Tani', field: 'nama_kelompok_petani', sortable: true }
      ],
      data: [],
      loading: false,
      filter: ''
    }
  },
  methods: {
    closeDialog () {
      this.basic = false
    },
    delet (_id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Yakin mau dihapus?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show()
        this.$store.dispatch({
          type: 'petani/delet',
          _id: _id
        })
          .then((response) => {
            this.$q.loading.hide()
            if (response.status) {
              this.loadData()
              this.$q.notify({
                message: 'Berhasil dihapus',
                color: 'positive',
                icon: 'checkmark'
              })
            } else {
              this.$q.notify({
                message: 'Gagal hapus',
                color: 'negative',
                icon: 'close'
              })
            }
          })
      })
    },
    loadData () {
      this.loading = true
      this.$axios.get('petani').then(({ data }) => {
        this.loading = false
        if (data.status) {
          this.data = data.message
          console.log(data)
        } else {
          this.$q.notify({
            message: 'Gagal load data/tidak ada data!',
            color: 'negative',
            icon: 'close'
          })
        }
      })
    },
    onSubmit () {
      if (this.$route.params.id) {
        // ini fungsi simpan edit
        this.$q.loading.show()
        this.$store.dispatch({
          type: 'petani/editsimpan',
          _id: this.data._id,
          ktp: this.data.ktp,
          nama: this.data.nama,
          tempat_lahir: this.data.tempat_lahir,
          tanggal_lahir: this.data.tanggal_lahir,
          jenis_kelamin: this.data.jenis_kelamin,
          pendidikan: this.data.pendidikan,
          status_keluarga: this.data.status_keluarga,
          alamat: this.data.alamat,
          no_hp: this.data.no_hp,
          nama_kelompok_petani: this.data.nama_kelompok_petani
        })
          .then((response) => {
            this.$q.loading.hide()
            if (response.status) {
              this.$q.notify({
                message: 'Berhasil simpan',
                color: 'positive',
                icon: 'checkmark'
              })
            } else {
              this.$q.notify({
                message: 'Gagal simpan',
                color: 'negative',
                icon: 'close'
              })
            }
          })
      } else {
        // ini fungsi simpan
        this.$q.loading.show()
        this.$store.dispatch({
          type: 'petani/simpan',
          ktp: this.data.ktp,
          nama: this.data.nama,
          tempat_lahir: this.data.tempat_lahir,
          tanggal_lahir: this.data.tanggal_lahir,
          jenis_kelamin: this.data.jenis_kelamin,
          pendidikan: this.data.pendidikan,
          status_keluarga: this.data.status_keluarga,
          alamat: this.data.alamat,
          no_hp: this.data.no_hp,
          nama_kelompok_petani: this.data.nama_kelompok_petani
        })
          .then((response) => {
            this.$q.loading.hide()
            if (response.status) {
              this.closeDialog()
              this.loadData()
              this.$q.notify({
                message: 'Berhasil simpan',
                color: 'positive',
                icon: 'checkmark'
              })
            } else {
              this.$q.notify({
                message: 'Gagal simpan',
                color: 'negative',
                icon: 'close'
              })
            }
          })
      }
    }
  },
  mounted () {
    this.loadData()
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
