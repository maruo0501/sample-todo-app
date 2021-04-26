<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/fun">Fun</NuxtLink>
      <!-- <NuxtLink to="/users/list">User List</NuxtLink> -->
      <NuxtLink :to="{name: 'users-list'}">Users</NuxtLink>
    </nav>
  </div>
</template>