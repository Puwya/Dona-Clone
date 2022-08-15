<template>
  <div>
    <div class="d-grid mt-4">
      <button
        v-for="TodoList in TodoLists"
        :key="TodoList.name"
        class="row btn btn-light btn-lg m-1"
        type="button"
      >
        {{ TodoList.name }}
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
          size: 1,
        },
      ],
    };
  },
};
</script>
