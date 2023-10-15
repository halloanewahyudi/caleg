<script setup>
import { ref } from "vue";
import emailjs from '@emailjs/browser';
import Loading from "./Loading.vue";
const myform = ref(null)
const kirim = ref(false)
const status = ref("")
const form = ref({
    nama: "",
    email: "",
    phone: "",
    dapil: "",
    partai: "",
    pesan: ""
})
const disubmit = () => {
    kirim.value = true
    emailjs.sendForm('service_krk960s', 'template_2gm8loj', myform.value, 'eFAz2Dv-jc3hsdCfb')
        .then((result) => {
            status.value = `Terimakasih ${form.value.nama} kami akan respon segera`;
            console.log('SUCCESS!', result.text);
        }, (error) => {
            status.value = "Mohon Maaf pengisian anda error";
            console.log('FAILED...', error.text);
        });
    console.log(form.value)
}
</script>
<template>
    <div>
        <div v-if="kirim">
            <div class="p-6 text-center">
                <div v-if="status" >
                    <h4 class="text-3xl">
                    {{ status }}
                </h4>
                </div>
                <div v-else>
                  <Loading />
                </div>
               
            </div>
        </div>
        <div v-else>
            <span class="mb-3 block"> Silakan isi form di bawah ini</span>
            <hr class="mb-6 border-secondary">
            <form @submit.prevent="disubmit" ref="myform">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group mb-5">
                        <label for="nama">Nama</label>
                        <input type="text" name="nama" v-model="form.nama"
                            class="p-3 rounded-lg  w-full bg-light bg-opacity-10  text-white" required>
                    </div>
                    <div class="form-group mb-5">
                        <label for="email">Email</label>
                        <input type="email" name="email" v-model="form.email"
                            class="p-3 rounded-lg  w-full bg-light bg-opacity-10 text-white" required>
                    </div>
                </div>

                <div class="form-group mb-5">
                    <label for="phone">Hp</label>
                    <input type="phone" name="phone" v-model="form.phone"
                        class="p-3 rounded-lg  w-full bg-light bg-opacity-10 text-white">
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div class="form-group mb-5">
                        <label for="dapil">Dapil</label>
                        <input type="text" name="dapil" v-model="form.dapil"
                            class="p-3 rounded-lg  w-full bg-light bg-opacity-10 text-white">
                    </div>
                    <div class="form-group mb-5">
                        <label for="partai">Partai</label>
                        <input type="text" name="partai" v-model="form.partai"
                            class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white">
                        <small class="text-light">Opsional (Boleh tidak di isi)</small>
                    </div>
                </div>
                <div class="form-group mb-5">
                    <textarea name="pesan" v-model="form.pesan" id="" cols="30" rows="6"
                        class="rounded-lg  w-full bg-light bg-opacity-10 text-white p-3"></textarea>
                </div>
                <button type="submit"
                    class="rounded-lg py-3 px-5 bg-secondary text-primary font-semibold hover:bg-opacity-70 duration-200">Submit</button>
        </form>
    </div>

</div></template>