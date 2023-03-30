<template>
    <div class="container repository-details">
      <h1>Repository Details</h1>
      <ul v-if="Object.keys(repository).length !== 0">
        <li>Name: {{ repository.name }}</li>
       <li>Forks: {{ repository.forks_count }}</li>
       <li>Description: {{ repository.description }}</li>
       <li>Language: {{ repository.language }}</li>
        <li>
        <li>Stars: {{ repository.stargazers_count }}</li>
          <a target="_blank" :href="`${repository.html_url}`"> Link to repo</a>
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <!-- Disable eslint rule for component name -->
  <!-- eslint-disable vue/multi-word-component-names -->
  <script type="text/javascript">
  export default {
    name: "Repository",
    data() {
      return {
        repository: {},
      };
    },
    created() {
      const repositoryName = this.$route.params.name;
      fetch(`https://api.github.com/repos/christlyngardiner/${repositoryName}`)
        .then((response) => response.json())
        .then((data) => {
          this.repository = data;
        });
    },
  };
  </script> 