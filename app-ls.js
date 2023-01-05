const list = document.querySelector('#list');
const inp = document.querySelector('#inp');
const f = document.querySelector('#new-task');

const saved = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < saved.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerText = saved[i].task;
  newLi.isCompleted = saved[i].isCompleted ? true : false;
  if (newLi.isCompleted) {
    newLi.style.textDecoration = "line-through";
  }
  list.appendChild(newLi);
}

f.addEventListener('submit',function(e){
    
  e.preventDefault();

  let newLi = document.createElement('li');
  newLi.innerText = inp.value;

  list.appendChild(newLi);
  f.reset();
  
  saved.push({ task: newLi.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(saved));
});

list.addEventListener("click", function(e) {

  const t = e.target;

  if (!t.isCompleted) {
    t.isCompleted = true;
    t.style.textDecoration = "line-through";
  } else {
    t.isCompleted = false;
    t.style.textDecoration = "none";
  }

  for (let i = 0; i < saved.length; i++) {
    if (saved[i].task === t.innerText) {
      saved[i].isCompleted = !saved[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(saved));
    }
  }
});
    
   
   