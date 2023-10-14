<script setup>
defineProps({
    title: String,
    description: String,
    icon: String
})
</script>
<template>
    <div class="p-5 bg-white rounded-lg flex gap-5 border">
        <div class="">
            <i class="bi text-3xl text-secondary" :class="icon"></i>
        </div>
        <div>
            <h4 class="text-xl font-semibold text-primary">{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>