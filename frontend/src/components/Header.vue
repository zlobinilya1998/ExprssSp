<template>
    <div class="header">
        <RouterLink :to="{ name: 'main' }">
            Главная
            <v-icon>mdi-home-circle-outline</v-icon>
        </RouterLink>
        <RouterLink :to="{ name: 'products' }">
            Товары
            <v-icon>mdi-store</v-icon>
        </RouterLink>
        <RouterLink :to="{ name: 'customers' }">
            Заказчики
            <v-icon>mdi-face-agent</v-icon>
        </RouterLink>
        <RouterLink :to="{ name: 'orders' }">
            История заказов
            <v-icon>mdi-chart-timeline</v-icon>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 20px;
    
    display: flex;
    gap: 20px;
}
</style>