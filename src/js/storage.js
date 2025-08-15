export const STORAGE_KEY = 'tasks';

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

export let STORAGE_TASK = loadTasks();