01 function createTask() {
02 const name = { text: document.getElementById('taskName').value };
03 const parent_id = document.getElementById('parentTaskId').value;
04
05 fetch('/tasks', {
06 method: 'POST',
07 headers: {
08 'Content‑Type': 'application/json',
09 },
10 body: JSON.stringify({ name, parent_id: parent_id || null }),
11 })
12 .then(response => response.json())
13 .then(data => {
14 alert('Task Created: ' + data.name.text);
15 loadTasks();
16 })
17 .catch((error) => {
18 console.error('Error:', error);
19 });
20 }
21
22 function loadTasks() {
23 fetch('/tasks')
24 .then(response => response.json())
25 .then(tasks => {
26 const tasksElement = document.getElementById('tasks');
27 tasks Element.innerHTML = '';
28 tasks.forEach(task => {
29 const taskElement = document.createElement('div');
30 taskElement.textContent = `ID: ${task.id}, Name: ${task.name.
text}, Parent ID: ${task.parent_id || 'None'}`;
31 tasksElement.appendChild(taskElement);
32 });
33 });
34 }
35
36 document.addEventListener('DOMContentLoaded', function() {
37 loadTasks();
38 });