<template>
    <div class="header">
        <RouterLink :to="{ name: 'main' }">Главная</RouterLink>
        <RouterLink :to="{ name: 'products' }">Товары</RouterLink>
        <RouterLink :to="{ name: 'customers' }">Заказчики</RouterLink>
        <RouterLink :to="{ name: 'orders' }">История заказов</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 20px;

    &>* {
        margin-right: 5px;
    }
}
</style>