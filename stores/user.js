// pinia thư viện quản lí trạng thái cho Vue
// defineStore định nghĩa 1 store
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    // trạng thái overlay menu
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  //   true thì dữ liệu sẽ được lưu trữ trong localStorage thì khi refresh trang vẫn còn dữ liệu
  persist: true,
});
