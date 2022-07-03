import { defineStore } from "pinia";
import { getDate } from "@/api/date";
import fetchGithubStars from "@/api/star";
import { getBookByParams, getBookByQuery } from "@/api/book";

export const useBookStore = defineStore({
  id: "book",
  state: () => ({
    actionsIndex: 0,
    name: "Eduardo",
    date: "",
    repo: null,
    bookByQuery: null,
    bookByParams: null,
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
    async loadInitData() {
      getDate().then((res) => (this.date = res));
      fetchGithubStars("midwayjs/midway").then((res) => (this.repo = res));
      getBookByParams({ params: { id: "1" } }).then(
        (res) => (this.bookByParams = res)
      );
      getBookByQuery({ query: { id: "2" } }).then(
        (res) => (this.bookByQuery = res)
      );
    },
  },
});
