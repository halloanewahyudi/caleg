<script setup>
import { onMounted, ref } from 'vue';
import SmallCard from './element/SmallCard.vue';
const cards = ref(
    [
        {
            icon: 'bi-person-fill-check',
            title: 'Profile',
            description: 'Informasi mengenai Profile anda',
        },
        {
            icon: 'bi-pencil-square',
            title: 'Program',
            description: 'Informasi mengenai Program anda',
        },
        {
            icon: 'bi-star-fill',
            title: 'Testimoni',
            description: 'Ungkapan testimoni tentang anda',
        },
        {
            icon: 'bi-star-fill',
            title: 'Berita',
            description: 'Fitur untuk memberi dinamika pengunjung',
        },
        {
            icon: 'bi-bar-chart-line-fill',
            title: 'Analytic',
            description: 'Fitur Analisa pengunjung website',
        },
        {
            icon: 'bi-people-fill',
            title: 'Member',
            description: 'Member mendapatkan notifikasi informasi ',
        },
        {
            icon: 'bi- bi-images',
            title: 'Gallery',
            description: 'Berisikan kegiatan baik foto atau video',
        },
        {
            icon: 'bi-palette-fill',
            title: 'Desain Profesional',
            description: 'Kustom desain menyesuaikan anda',
        },
        {
            icon: 'bi-headset',
            title: 'Full Support',
            description: 'Memberikan support yang setia',
        }
    ]
)
const getDelay = (index) =>{
   return index*100
}
onMounted(()=>{
    getDelay()
})
</script>
<template>
    <div class="">
        
        <div class="max-w-screen-lg mx-auto px-4 lg:px-0 py-20">
            <div class="mb-20 max-w-screen-md mx-auto text-center flex flex-col gap-3" >
                <h4 class="text-2xl font-bold text-primary" >Memiliki website yang profesional dan menarik adalah langkah penting untuk membangun reputasi dan meraih dukungan yang Anda butuhkan.</h4>
            
            </div>

            <div class="mb-20 text-center flex flex-col gap-3">
                <h4 class="text-2xl font-bold text-primary">Beberapa fitur yang kami berikan</h4>
                <p class="max-w-lg mx-auto">Namun kami bisa memberikan layanan lebih untuk kebutuhan anda, bicarakan dan kami memikirkan solusinya </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:px-4">
                <div v-for="(item, index) in cards" :key="index">
                    <SmallCard  data-aos="fade-up" :data-aos-delay="getDelay(index)" :title="item.title" :description="item.description" :icon="item.icon" />
                </div>
            </div>
        </div>
    </div>
</template>