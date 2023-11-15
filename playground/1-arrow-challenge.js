const tasks={
    tasks: [
        {
            text: 'Grocery Shopping',
            completed: false
        },
        {
            text: 'Clean yard',
            completed: false
        },
        {
            text: 'Film course',
            completed: true
        }
    ],
    getTasksToDo(){
        const incompleted = this.tasks.filter((task)=>{
            return task.completed===false
        })
        return incompleted
    }

}

console.log(tasks.getTasksToDo())