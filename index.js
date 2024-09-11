function filterAndSortEvenNumbers (numbers){
  const num =  numbers.filter( s => { return s % 2 == 0}).sort((a,b) => a-b) 
  return num
}

console.log(filterAndSortEvenNumbers([1,8,12,4,5]));

function  removeDuplicates (numbers){
    const num = [...new Set(numbers)]
    return num
}

console.log(removeDuplicates([1,1,2,3,1,6,9,5]))

function  capitalizeFirstLette (str){
    const st = str.split(" ")
    const y = st.map(word => word[word.length - 1] === "."? word : word.charAt(0).toUpperCase() + word.slice(1))
      
    
    return y.join(" ")
}

console.log(capitalizeFirstLette("hello. world javascript"))

const saveTask = (arr) => {
    localStorage.setItem("tasks", JSON.stringify(arr))
}
const loadTask =  () => {
      return JSON.parse(localStorage.getItem("tasks"))
}

const addTask = (task) => {
    const tasks = loadTask() 
    if(!tasks.some(t => t.id === task.id)){
        tasks.push(task)
        saveTask(tasks)
    }
   
}
const removeTask = (task) =>{
    const tasks = loadTask() 
    const filter = tasks.filter(t => t!== task)
    saveTask(filter)
}

const updateTask = (task) =>{
    const tasks = loadTask() 
    const index = tasks.findIndex(t => t.id === task.id)
    if(index !== -1){
        tasks[index] = task
        saveTask(tasks)
    }
}
