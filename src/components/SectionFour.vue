<script setup>
import ContactForm from './element/ContactForm.vue';
</script>
<template>
    <div class="min-h-screen py-20 bg-primary text-secondary ">
        <div class="max-w-screen-lg mx-auto px-4 lg:px-0">
            <div class="flex flex-wrap items-center ">
                <div class="lg:w-5/12 p-6 ">
<h2 id="hubungi" class="text-4xl font-bold mb-3">Dapatkan penawaran menarik dari kami</h2>
<div  class="flex flex-col gap-2">
    <p>Hubungi:</p>
    <a href="https://api.whatsapp.com/send?phone=6289636192223" class="flex gap-2 hover:translate-x-2 duration-200">
        <i class="bi bi-whatsapp"></i>
        <span>Wahyudi</span>
        <span> 0896-3619-2223</span>
    </a>
    <a href="https://api.whatsapp.com/send?phone=6285711112016" class="flex gap-2 hover:translate-x-2 duration-200">
        <i class="bi bi-whatsapp"></i>
        <span>Galih</span>
        <span> 0857-1111-2016</span>
    </a>
    <a href="https://api.whatsapp.com/send?phone=6285891397606" class="flex gap-2 hover:translate-x-2 duration-200">
        <i class="bi bi-whatsapp"></i>
        <span>Robert</span>
        <span> 0858-9139-7606</span>
    </a>
</div>
<img src="../assets/img-penawaran.png" alt="" srcset="" class="mx-auto w-full">
                </div>
                <div class="lg:w-7/12 p-6 ">
                    <div class="p-6  border border-secondary rounded-lg shadow-xl">
                       
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>