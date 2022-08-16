<template>
  <div>
    <div class="d-grid mt-4 ps-3 pe-3">
      <button class="row btn btn-light m-1 ps-1 p-3 fs-6 rounded-4" type="button">
        <div class="d-flex">
          <span>^</span>
          <div class="d-flex col-10 ms-3">Home</div>
          <div class="d-flex col-2" v-text="GetTaskTotal"></div>
        </div>
      </button>
      <button
        v-for="TodoList in TodoLists"
        :key="TodoList.name"
        class="d-flex row btn btn-light m-1 ps-1 p-3 fs-6 rounded-4"
        type="button"
      >
        <div class="d-flex col-10">
          <span class="me-2">
            {{ TodoList.icon }}
          </span>
          <span class="ms-2">
            {{ TodoList.name }}
          </span>
        </div>
        <div class="d-flex col-2 justify-content-end">
          {{ TodoList.size }}
        </div>
      </button>
      <button class="row btn btn-light m-1 ps-1 p-3 fs-6 rounded-4" type="button">
        <div class="d-flex">
          <span>+</span>
          <div class="d-flex ms-3">Create new list</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      TodoLists: [
        // {
        //   name: String,
        //   icon: String,
        //   size: Number,
        // },
        {
          name: 'New York Trip',
          icon: '#',
          size: 4,
        },
        {
          name: 'Car Stuff',
          icon: '*',
          size: 2,
        },
        {
          name: 'Work',
          icon: '@',
          size: 6,
        },
        {
          name: 'Shopping',
          icon: '!',
          size: 2,
        },
      ],
    };
  },
  computed: {
    GetTaskTotal() {
      let sum = 0;
      this.TodoLists.forEach((TodoList) => {
        sum += TodoList.size;
      });
      return sum;
    },
  },
};
</script>
