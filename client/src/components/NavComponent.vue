<template>
  <nav>
    <div class="logoname">
      <img src="../assets/TravelLogo.svg" style="height: 75px; width: 75px" />
      <H2>Travel.Talk</H2>
    </div>
    <div class="ul-container">
      <!-- <ul>
        <li>Profile name</li>
        <li>about</li>
      </ul> -->
    </div>
  </nav>
</template>

<script></script>
<style>
nav {
  border-bottom: 1px solid #adadad;
  background-color: rgb(233, 232, 232);
  color: black;
  height: 75px;
  display: flex;
  flex-direction: row;
}

.logoname {
  margin: auto;
  margin-left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

ul {
  list-style-type: none;
  display: flex;
}

li {
  margin: 10px;
}
</style>
