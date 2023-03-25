const addTodo = document.querySelector('#add');
const addedTodo = document.querySelector('#textTodo');
const todoList = document.querySelector('.todoList');
const inputData = document.querySelector('.textInput');
const headerData = document.querySelector('.taskHeader');

let countTodos = 0;

addTodo.addEventListener(('submit'), (e) =>{

    e.preventDefault();
    countTodos++;

    headerData.innerHTML = "Tasks";

    const todoText = addedTodo.value;
    
    if(!todoText){

        alert("Please enter Todo");
        return;
    }

    const newTodoList = document.createElement('div')
    newTodoList.classList.add('todo');

    const inputElt = document.createElement('div');
    inputElt.classList.add('todoInput');
    
    const textElt = document.createElement('input');
    textElt.classList.add('textInput');
    textElt.setAttribute("readonly", "readonly");
    textElt.value = todoText;
    

    const btnElts = document.createElement('div');
    btnElts.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = "EDIT";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = "DELETE";

    btnElts.appendChild(editBtn);
    btnElts.appendChild(deleteBtn);

    inputElt.appendChild(textElt);
    
    newTodoList.appendChild(inputElt);
    newTodoList.appendChild(btnElts);

    todoList.appendChild(newTodoList);

    addedTodo.value = "";

    editBtn.addEventListener(('click'), () => {

        

        if(editBtn.innerHTML == "EDIT"){
        
            textElt.removeAttribute("readonly");
            editBtn.innerHTML = "SAVE";

            document.querySelector('.textInput').style.color = "#50C878";
            

            editBtn.addEventListener(('mouseenter'), () =>{

                document.querySelector('.edit').style.color = "#50C878";
                document.querySelector('.edit').style.border = "2px solid #50C878";
                document.querySelector('.edit').style.boxShadow = "0 0.5rem 0.5rem -0.3rem #50C878";
            });

            editBtn.addEventListener(('mouseleave'), () =>{

                document.querySelector('.edit').style.color = "#5656EE";
                document.querySelector('.edit').style.border = "2px solid #5656EE";
                document.querySelector('.edit').style.boxShadow = "none";
            });
            //editBtn.onmouseover = this.style.boxShadow = '0 0.5rem 0.5rem -0.4rem #50C878';
        }

        else{

            textElt.setAttribute("readonly", "readonly");
            editBtn.innerHTML = "EDIT";

            document.querySelector('.textInput').style.color = "white";
           
            editBtn.addEventListener(('mouseenter'), () =>{

                document.querySelector('.edit').style.color = "#5656EE";
                document.querySelector('.edit').style.border = "2px solid #5656EE";    
                document.querySelector('.edit').style.boxShadow = "0 0.5rem 0.5rem -0.3rem #5656EE";
            });

            editBtn.addEventListener(('mouseleave'), () =>{

                document.querySelector('.edit').style.boxShadow = "none";
            });
        }
    });
    
    deleteBtn.addEventListener(('click'), () => {

       const delAnswer = confirm("Are you sure you want to delete this Todo");

        if(delAnswer == true){
        
            newTodoList.remove();
            countTodos--;
        }    

        if(countTodos == 0){

            headerData.innerHTML = "You have no Tasks";
        }

    });
     
    
});