<script setup>
import Logo from './element/Logo.vue';
</script>
<template>
    <div class="hero min-h-screen">
        <div class="max-w-screen-lg mx-auto px-6">
            <nav class="flex flex-wrap gap-3 justify-between items-center pt-3">
                <div class="flex gap-2 items-center">
                    <Logo class="w-20" />
                </div>
                <a href="#hubungi"
                    class="py-3 px-5 inline-block shrink-0 rounded-full bg-primary text-light font-semibold w-max hover:bg-opacity-80  duration-200">Hubungi
                    Kami </a>
            </nav>
            <div
                class="flex flex-wrap justify-center items-center text-center lg:text-left lg:justify-between min-h-screen">
                <div class="lg:w-7/12 flex flex-col gap-6 ">
                    <h1 class="text-5xl lg:text-[80px] font-bold text-primary font-Jakarta" data-aos="zoom-out"
                        data-aos-easing="linear">
                        Kenalkan
                        diri anda ke calon pemilih
                    </h1>
                    <p class="text-xl leading-8">
                        Apakah Anda seorang legislator yang sedang mencari
                        cara untuk membangun kehadiran online yang kuat dan efektif?
                        <span class="lg:bg-secondary lg:bg-opacity-30 lg:px-2"> Kami di sini untuk membantu Anda mencapai
                            tujuan tersebut. </span>
                    </p>
                </div>
                <div class="lg:w-5/12 text-center font-medium">
                    <img src="../assets/bule.png" alt="" srcset="" class="mx-auto w-full">
                </div>
            </div>
        </div>
    </div>
</template>