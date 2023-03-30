<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "App",
};
</script>

<style>
.container {
  padding: 0 50px;
}

.heading {
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 10px;
}

.pill {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
}

.pill a {
  color: black;
}

.inner {
  display: flex;
  align-items: center;
}

.list-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  @media (min-width: 350px) and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.avatar {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.pagination {
  display: flex;
  list-style: none;
  margin-left: -40px;
}

.pagination a {
  text-decoration: none;
  background: rgb(39, 39, 39);
  padding: 10px 20px;
  text-align: center;
  color: #e3e3e3;
  border-radius: 10px;
  margin-top: 10px;
  display: inline-block;
}

.pagination li:not(:last-child) a {
  margin-right: 15px;
}

.repository-details li {
  font-size: 1.3rem;
}

span {
  background: rgb(90, 90, 90);
  color: white;
  border-radius: 5px;
  font-size: 0.8rem;
  padding: 0.3rem;
  margin-top: 1.5rem;
}
</style>

