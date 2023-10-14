<script setup>
defineProps({
    title: String,
    description: String,
    icon: 'bi-check2-circle'
})
</script>
<template>
    <div class=" flex gap-5">
        <div class="">
            <i class="bi bi-check2-circle text-2xl text-secondary" ></i>
        </div>
        <div>
            <h4 class="text-xl font-semibold text-primary">{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>