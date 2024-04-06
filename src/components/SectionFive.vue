<script setup>

import axios from "axios";
import { ref } from "vue";
import LoadingVue from "./icons/Loading.vue";

const terkirim = ref(false)
const gagalKirim = ref(false)
const loading = ref(false);
const dataForm = ref({
    access_key:'19ad5618-5bd5-4545-b942-65634e12a1ca',
    nama: '',
    email: '',
    phone: '',
    dapil: '',
    partai: '',
    pesan: ''
})
const submitForm = async () => {
  try {
    loading.value = true; // Set loading to true when submitting
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataForm.value),
    });
    const result = await response.json();
    
    if (result.success) {
      terkirim.value = true;
      console.log(result);
    } else {
      gagalKirim.value = true;
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    loading.value = false; // Set loading back to false regardless of success or error
  }
};

</script>
<template>
    <div class="min-h-screen py-20 bg-primary text-secondary">
        <div class="max-w-screen-lg mx-auto px-4 lg:px-0">
            <div class="flex flex-wrap items-center">
                <div class="lg:w-5/12 p-6">
                    <h2 id="hubungi" class="text-4xl font-bold mb-3">Dapatkan penawaran menarik dari kami</h2>
                    <div class="flex flex-col gap-2">
                        <p>Hubungi:</p>
                        <a href="https://api.whatsapp.com/send?phone=6285711112016"
                            class="flex gap-2 hover:translate-x-2 duration-200"><i
                                class="bi bi-whatsapp"></i><span>Rusli</span><span> 0281-1125-9029</span>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=6289636192223"
                            class="flex gap-2 hover:translate-x-2 duration-200"><i
                                class="bi bi-whatsapp"></i><span>Wahyudi</span><span> 0896-3619-2223</span>
                        </a>
                    </div>
                    <img src="@/assets/caleg-2.png" alt="" srcset="" class="mx-auto w-full">
                </div>
                <div class="lg:w-7/12 p-6">
                    <div class="p-6 border border-secondary rounded-lg shadow-xl">
                        <div class="">
                            <div><span class="mb-3 block"> Silakan isi form di bawah ini</span>
                                <hr class="mb-6 border-secondary">
                                <div v-if="terkirim">
                                    <div class="max-w-[300px] mx-auto p-4 text-center">
                                        <h2 class="text-2xl font-medium text-secondary" > Terimakasih, {{ dataForm.nama }} !  </h2>
                                        <p>pesan anda terkirim dan akan kami tindaklanjuti</p>
                                    </div>
                                </div>
                                <div v-else-if="gagalKirim">
                                    <div class="max-w-[300px] mx-auto p-4 text-center">
                                        <h2 class="text-2xl font-medium text-secondary" > Mohon Maaf, {{ dataForm.nama }} !  </h2>
                                        <p>Pesan anda gagal terkiirim </p>
                                    </div>
                                </div>
                                <div v-else>
                                <form @submit.prevent="submitForm">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        <div class="form-group mb-5"><label for="nama">Nama</label><input type="text"
                                                name="nama" v-model="dataForm.nama"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"
                                                required></div>
                                        <div class="form-group mb-5"><label for="email">Email</label><input type="email"
                                                name="email" v-model="dataForm.email"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"
                                                required></div>
                                    </div>
                                    <div class="form-group mb-5"><label for="phone">Hp</label><input type="phone"
                                            name="phone" v-model="dataForm.phone"
                                            class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"></div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        <div class="form-group mb-5"><label for="dapil">Dapil</label><input type="text"
                                                name="dapil" v-model="dataForm.dapil"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"></div>
                                        <div class="form-group mb-5"><label for="partai">Partai</label><input
                                                type="text" name="partai" v-model="dataForm.partai"
                                                class="p-3 rounded-lg w-full bg-light bg-opacity-10 text-white"><small
                                                class="text-light">Opsional (Boleh tidak di isi)</small></div>
                                    </div>
                                    <div class="form-group mb-5">
                                        <label for="pesan"> Pesan </label>
                                        <textarea name="pesan" v-model="dataForm.pesan" id=""
                                            cols="30" rows="6"
                                            class="rounded-lg w-full bg-light bg-opacity-10 text-white p-3"></textarea>
                                    </div>
                                    <button type="submit"
                                        class="rounded-lg py-3 px-5 bg-secondary text-primary font-semibold hover:bg-opacity-70 duration-200 flex items-center gap-4">Submit <div v-if="loading" >
                                    <LoadingVue class="text-3xl text-primary" />
                                </div></button>
                                </form>
                            </div> <!-- else form -->
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>