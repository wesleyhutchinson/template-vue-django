<template>
    <div>
        <b-navbar id="mainNav" toggleable="sm" type="light" style="height: 74px;">
            <router-link :to="{ name: 'home'}">

                <img alt="GPbenchmark" id="main_logo" src="@/assets/img/vue.png"/>
                <b-navbar-brand class="logo">Vue Django Template</b-navbar-brand>
            </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><fa icon="user"></fa></template>
                        <b-dropdown-item>Profile</b-dropdown-item>
                        <b-dropdown-item>Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>

                        <b-nav-item-dropdown no-caret right>
                             <template slot="button-content"><fa icon="copy" class="grey"></fa></template>
                            <b-dropdown-item @click="toAbout">About Me</b-dropdown-item>
                            <b-dropdown-item >Another page</b-dropdown-item>
                            <b-dropdown-item >Usage Rules</b-dropdown-item>
                        </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toAbout: function () {
      return;
    },
  },
};
</script>

<style scoped>
#main_logo {
  height: 40px;
  margin-right: 5px;
}
a {
  color: #6c757d;
}
</style>