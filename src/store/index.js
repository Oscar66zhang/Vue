import { defineStore } from 'pinia';

export const useStore = defineStore('storeId', {
  state: () => ({
    users: []
  }),
  actions: {
    setUsers(users) {
      this.users = users;
    },
    addUser(user) {
      this.users.push(user);
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user-store',
        storage: localStorage,
      }
    ]
  }
});
