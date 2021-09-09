// 
    // class TaskQueue {
    //   constructor(limit = 1) {
    //       this.limit = limit
    //       this.tasks = []
    //       this.runningCount = 0

    //       this.startNewTask = () => {
    //           if (this.tasks.length) {
    //               var task = this.tasks.shift()
    //               task(this.startNewTask)
    //           } else {
    //               this.runningCount--
    //           }
    //       }
    //   }

    //   addTask(task) {
    //       if (this.runningCount >= this.limit) {
    //           this.tasks.push(task)
    //       } else {
    //           this.runningCount++
    //           task(this.startNewTask)
    //       }
    //       return this
    //   }
    // }

class TaskQueue1{  // promise方式
    constructor () {
        this.promise = Promise.resolve()
    }
    addTask(task) {  // 事件处理器（task 、任务）
        this.promise = this.promise.then(() => {
            return new Promise(task)
            // return new Promise(resolve => {  // resolve 是下一个then的传递的函数
            //     task(resolve)
            // })
        })
    }
}