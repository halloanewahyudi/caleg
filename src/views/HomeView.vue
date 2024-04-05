<script setup>
import SectionFive from '@/components/SectionFive.vue';
import SectionFour from '@/components/SectionFour.vue';
import SectionOne from '@/components/SectionOne.vue';
import SectionThree from '@/components/SectionThree.vue';
import SectionTwo from '@/components/SectionTwo.vue';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
onMounted(() => {
  AOS.init()
})
</script>

<template>
  <main>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
  </main>
</template>
