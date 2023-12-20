function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priority = document.getElementById('priority').value;
    const deadline = document.getElementById('deadline').value;
    const taskList = document.getElementById('taskList');
    const progressBar = document.getElementById('progressBar');
  
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <div>
          <input type="checkbox" onchange="updateProgress()" />
          <span>${taskInput.value}</span>
          <span class="priority-label ${priority}">${priority.toUpperCase()}</span>
          <span class="deadline-label">Deadline: ${deadline}</span>
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
      updateProgress();
    } else {
      alert('Please enter a task!');
    }
  }
  
  function deleteTask(task) {
    const li = task.parentElement;
    li.remove();
    updateProgress();
  }
  
  function updateProgress() {
    const totalTasks = document.querySelectorAll('#taskList li').length;
    const completedTasks = document.querySelectorAll('#taskList input:checked').length;
    const progress = (completedTasks / totalTasks) * 100 || 0; // Prevent division by zero
    
    const progressBar = document.getElementById('progressBar');
    progressBar.value = progress;
  }
  