<script setup>
import { ref } from "vue";
import listIcon from "./element/ListIcon.vue"
const lists = ref([
    {
        title: 'Desain Khusus untuk Caleg',
        description: 'Kami memahami bahwa setiap caleg memiliki kebutuhan dan visi yang unik. Kami akan bekerja sama dengan Anda untuk menciptakan desain website yang ',
    },
    {
        title: 'Kemudahan Penggunaan',
        description: 'Kami tahu bahwa tidak semua caleg memiliki latar belakang teknis. Oleh karena itu, website yang kami buat sangat mudah dioperasikan dan dikelola, bahkan bagi pemula ',
    },
    {
        title: 'Optimisasi SEO',
        description: 'Agar website Anda ditemukan oleh warga di daerah pemilih Anda, kami akan mengoptimalkan situs Anda untuk mesin pencari (SEO). Ini akan meningkatkan visibilitas Anda secara online.',
    },
    {
        title: 'Konten yang Relevan',
        description: 'Tim  kami akan membantu Anda dalam menyiapkan dan mempublikasikan konten yang relevan, termasuk artikel, berita terkini, dan informasi terkait caleg.',
    },
    {
        title: 'Dukungan Pelanggan Terbaik',
        description: 'Kami sangat peduli dengan kepuasan Anda. Kami menawarkan dukungan pelanggan terbaik untuk menjawab pertanyaan Anda dan memberikan bantuan teknis yang diperlukan.',
    },
])
</script>
<template>
    <div class="bg-white">
        <div class="max-w-screen-lg mx-auto px-4 lg:px-0 py-20">
            <div class="mb-6 lg:mb-20 text-center flex flex-col gap-3">
                <p>Kami Berdedikasi untuk Keberhasilan Anda</p>
                <h4 class="text-2xl font-bold text-primary">Mengapa Memilih Kami?</h4>
            </div>
            <div class="flex flex-wrap ">
                <div class="lg:w-5/12 p-6 flex flex-col gap-5">
                    <img src="../assets/vote-2.png" alt="" srcset="" class="mx-auto w-full">

                </div>
                <div class="lg:w-7/12 p-6">
                    <div class="flex flex-col gap-6">
                        <div v-for="(item, index) in lists" :key="index">
                            <list-icon data-aos="fade-up" :title="item.title" :description="item.description"></list-icon>
                        </div>
                    </div>

                </div>
            </div>
        </div>

</div></template>