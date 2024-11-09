<template>
    <div class="header">
        <RouterLink :to="{name: 'products'}">Товары</RouterLink>
        <RouterLink :to="{name: 'customers'}">Заказчики</RouterLink>
    </div>
</template>

<script setup lang="ts"></script>


<style lang="scss" scoped>
.header {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 20px;
    & > * {
        margin-right: 5px;
    }
}
</style>