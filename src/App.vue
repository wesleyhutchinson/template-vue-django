<!-- Base entry into Vue App. This page provides foundation to identify if user logged in - if not logged in and
Django session has ended, user is asked via Modal if they would like to log in again 

Imports main css styles used by entire app-->

<template>
    <div>

        <BaseNavBar></BaseNavBar>

        <router-view/>


    </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
