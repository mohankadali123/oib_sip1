const input = document.querySelector('#taskinput');
const submit = document.querySelector('#submit');
const list_el = document.querySelector('#tasks'); 
var form = document.getElementById('taskform');

form.addEventListener('submit', (e)=>{
     e.preventDefault();
})

submit.addEventListener('click',()=>{
    task = input.value;

    if(!task)
    {
        alert('Please fille the task');
    }
    else
    {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement("div");
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el= document.createElement("input");
        task_input_el.classList.add('text');
        task_input_el.type='text';
        task_input_el.value=task;
        task_input_el.setAttribute('readonly','readonly');
        task_el.appendChild(task_input_el);

         
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el= document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML='Edit';

        const task_delete_el= document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML='Delete';

        const task_mark_el= document.createElement('button');
        task_mark_el.classList.add('mark');
        task_mark_el.innerHTML='✔';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_mark_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value='';

        task_edit_el.addEventListener('click',()=>{
            if(task_edit_el.innerText.toLocaleLowerCase()=='edit')
            {
                task_input_el.removeAttribute('readonly');
               task_input_el.focus();
                task_edit_el.innerText='Save';
            }
            else
            {
                task_input_el.setAttribute('readonly','readonly');
                task_edit_el.innerText='Edit';
            }
        });


        task_delete_el.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        });

        task_mark_el.addEventListener('click',()=>{
            task_el.style.background='#06ff06';
            task_input_el.style.background='#06ff06';
        })

    }

})
