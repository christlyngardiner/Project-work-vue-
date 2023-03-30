<template>
    <div class="container">
      <h1 class="heading">Christlyn's GitHub Repositories</h1>
      <div class="list-container">
        <div class="pill" v-for="repo in paginatedRepos" :key="repo.id">
          <div class="inner">
            <img
              class="avatar"
              :src="
                'https://api.dicebear.com/5.x/adventurer/svg?seed=Shadow' + repo.id + '.png'
              "
              alt=""
            />
            <router-link
              :to="{ name: 'Repository', params: { name: repo.name } }"
              >{{ repo.name }}</router-link
            >
          </div>
          <span v-if="repo.language">
            {{ repo.language }}
          </span>
        </div>
      </div>
  
      <ul v-if="pageCount > 1" class="pagination">
        <li v-for="n in pageCount" :key="n">
          <router-link
            :to="{ name: 'Repositories', query: { page: n } }"
            @click="updateCurrentPage(n)"
            >{{ n }}</router-link
          >
        </li>
      </ul>
    </div>
  </template>
  
  <script type="text/javascript">
  export default {
    name: "Github-repositories",
    data() {
      return {
        repositories: [],
        pagination: {
          perPage: 4,
          currentPage: 1,
        },
      };
    },
    created() {
      this.fetchGitHubRepos();
    },
    methods: {
      fetchGitHubRepos() {
        fetch(`https://api.github.com/users/christlyngardiner/repos`)
          .then((response) => response.json())
          .then((data) => {
            this.repositories = data;
          });
      },
      updateCurrentPage(page) {
        this.pagination.currentPage = page;
      },
    },
    computed: {
      pageCount() {
        return Math.ceil(this.repositories.length / this.pagination.perPage);
      },
      paginatedRepos() {
        const startIndex =
          (this.pagination.currentPage - 1) * this.pagination.perPage;
        const endIndex = startIndex + this.pagination.perPage;
        return this.repositories.slice(startIndex, endIndex);
      },
    },
  };
  </script>
  