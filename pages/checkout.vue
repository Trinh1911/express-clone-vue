<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>
            <div v-if="true">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <Icon name="mdi:plus" size="18" class="mr-2" />
                Update Address
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact name:</div>
                    <div class="font-bold">TEST</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">TEST</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Zip Code:</div>
                    <div class="font-bold">TEST</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Country:</div>
                    <div class="font-bold">TEST</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>City:</div>
                    <div class="font-bold">TEST</div>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />
              Add New Address
            </NuxtLink>
          </div>
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4"></div>
        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div class="">Total Shipping</div>
              <div class="">Free</div>
            </div>

            <div class="border-t"></div>

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ total / 100 }}</span>
              </div>
            </div>
            <form @submit.prevent="pay()">
              <div
                class="border border-gray-500 p-2 rounded-sm"
                id="card-element"
              >
                <p
                  id="card-error"
                  role="alert"
                  class="text-red-700 text-center font-semibold"
                ></p>

                <button
                  :disabled="isProcessing"
                  type="submit"
                  class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                  :class="isProcessing ? 'opacity-70' : 'opacity-100'"
                >
                  <Icon v-if="isProcessing" name="eos-icons:loading" />
                  <div v-else>Place order</div>
                </button>
              </div>
            </form>
          </div>
          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
            <p class="my-2">
              AliExpress keeps your information and payment safe
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
const route = useRoute();

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

onMounted(async () => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      // thanh toán trực tuyến của stripe
      stripeInit();
    }
  }
);
const stripeInit = async () => {};
const pay = async () => {};
const createOder = async () => {};
const showError = (errorMsgText) => {};
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 100,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4",
    url: "https://i.pinimg.com/originals/37/2b/ea/372beacf683f0062fa749d2fbc94184f.jpg",
    price: 400,
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