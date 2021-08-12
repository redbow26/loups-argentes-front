<template>
  <div class="hello">Hello</div>
  <button v-if="!data" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script lang="ts">
import { auth } from "@/api/auth";
import { useQuery, useResult } from "@vue/apollo-composable";
import meQuery from "@/api/query/user/me.query.gql";

export default {
  setup() {
    const { login, logout } = auth();

    const { result } = useQuery(meQuery);
    const me = useResult(result, null, (data) => data.me);

    return { login, logout, me };
  },
};
</script>

<style scoped lang="scss" />
