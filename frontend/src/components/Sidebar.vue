<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer location="right" theme="dark">
                <template v-slot:prepend>
                    <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                       title="Customer">
                    </v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home" title="Главная" :to="{ name: 'products' }" />
                    <v-list-item prepend-icon="mdi-account" title="Заказчики" :to="{ name: 'customers' }"></v-list-item>
                    <v-list-item prepend-icon="mdi-chart-timeline" title="История заказов"
                        :to="{ name: 'orders' }"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>