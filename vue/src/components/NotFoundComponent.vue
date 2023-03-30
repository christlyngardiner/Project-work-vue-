<!-- <template>
    <div>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  </template>
   -->
<!-- Disable eslint rule for component name -->
<!-- eslint-disable vue/multi-word-component-names -->
  <!-- <script type="text/javascript" >
  export default {
    name: 'NotFoundComponent'
  }
  </script>
  
  <style>
  /* add styles for your 404 page here */
  </style> -->


  <template>
    <div class="not-found">
      <h1 class="not-found__title">404 Page Not Found</h1>
      <p class="not-found__text">The page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundComponent'
  }
  </script>
  
  <style>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    height: 100%;
    background-color: #f1f1f1;
  }
  
  .not-found__title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .not-found__text { 
    font-size: 3rem;
    text-align: left;
  }
  </style>
  