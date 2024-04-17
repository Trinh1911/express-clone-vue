<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img
            src="./../public/images/cart-empty.png"
            class="mx-auto"
            width="250"
          />
          <div class="text-xl text-center mt-4">No items yet?</div>
          <div v-if="false" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
          </div>

          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
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
</script>
