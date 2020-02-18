import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        { chore: "Tidy", isCompleted: false, priority: 0},
        { chore: "Food Shop", isCompleted: true, priority: 2},
        { chore: "pay bills", isCompleted: false, priority: 7},
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function() {
        this.tasks.push({
          chore: this.newTask,
          isCompleted: false,
        });
        this.newTask = "";
      },
      doTask: function(index) {
        this.tasks[index].isCompleted = true;
      }
    }
  });
});
