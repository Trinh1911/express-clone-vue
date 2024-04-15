<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 200,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 300,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 400,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for product 5",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 500,
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for product 6",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 600,
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for product 7",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 700,
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for product 8",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 800,
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description for product 9",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 900,
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description for product 10",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 1000,
  },
];
console.log(products)
</script>
