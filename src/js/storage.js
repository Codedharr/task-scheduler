export const STORAGE_KEY = 'tasks';
export const STORAGE_KEY_PROJECTS = 'projects'
const STORAGE_KEY_COUNT = 'count'



export function saveTasks(arr) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

export function loadTasks() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch{
        return []
    }
}

export function saveProjects(arr) {
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(arr))
}

export function loadProjects() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY_PROJECTS)) || []
    } catch{
        return []
    }
} 


let counter = JSON.parse(localStorage.getItem(STORAGE_KEY_COUNT)) || 0;

export function incrementCounter() {
    counter++;
    localStorage.setItem(STORAGE_KEY_COUNT, JSON.stringify(counter));
    return counter;
}

export let STORAGE_TASK = loadTasks();
export let STORAGE_PROJECTS = loadProjects();