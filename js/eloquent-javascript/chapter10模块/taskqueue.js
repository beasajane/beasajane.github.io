class TaskQueue {
  constructor(limit = 1) {
      this.limit = limit
      this.tasks = []
      this.runningCount = 0

      this.startNewTask = () => {
          if (this.tasks.length) {
              var task = this.tasks.shift()
              task(this.startNewTask)
          } else {
              this.runningCount--
          }
      }
  }

  addTask(task) {
      if (this.runningCount >= this.limit) {
          this.tasks.push(task)
      } else {
          this.runningCount++
          task(this.startNewTask)
      }
      return this
  }
}