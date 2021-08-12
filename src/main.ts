import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/apollo";

createApp(App).provide(DefaultApolloClient, apolloClient).use(router).mount("#app");
