<template>
    <div class="content">
        <h1>Dashboard</h1>
    </div>
</template>

<script>
import { useAdmin } from "@/store/admin";
export default {
    name: "dashboard-wrapper",
    setup() {
        const adminStore = useAdmin();

        return { adminStore };
    },
};
</script>

<style lang="scss" scoped>
.content {
    flex: 1;
}
</style>
