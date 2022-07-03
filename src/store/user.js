import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    actionsIndex: 0,
    name: "Eduardo",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    logout() {
      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user, password) {},
    async loadUserInfo() {},
    async loadInitData() {},
  },
});
