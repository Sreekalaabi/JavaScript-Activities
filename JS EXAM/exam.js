let recipies = [];
let levels = [];

function addRecipe()
{
    const recipeInput = document.getElementById('recipe');
    const levelInput = document.getElementById('level');
    const recipeList = document.getElementById('recipeList');

    let recipe = recipeInput.value.trim();
    let level = Number(levelInput.value.trim());

    if(recipe!==''&& !isNaN(level) && level>=1 && level <=3)
    {
        recipies.push(recipe);
        levels.push(level);

        const li = document.createElement('li');
        li.textContent = recipe;
        
        switch(level)
        {
            case 1: 
                li.classList.add('level-easy');
                break;
            case 2:
                li.classList.add('level-moderate');
                break;
            case 3:
                li.classList.add('level-hard');
                break;
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';
        completeButton.onclick = function()
        {
            li.classList.toggle('completed');
        };
        li.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function()
        {
            const newRecipe = prompt('Edit Recipe: ',recipe);
            if(newRecipe!==null && newRecipe.trim()!=='')
            {
                const recipeIndex = recipies.indexOf(recipe);
                recipies[recipeIndex] = newRecipe;
                li.firstChild.textContent = newRecipe;
                recipe = newRecipe;
                
            }

            

            

            
        };
        li.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function(){
            recipeList.removeChild(li);
            const recipeIndex = recipies.indexOf(movie);
            recipies.splice(recipeIndex,1);
            levels.splice(recipeIndex,1);
        };
        li.appendChild(removeButton);


        recipeList.appendChild(li);
        recipeInput.value = '';
        levelInput.value ='';
        
    } else
    {
        alert('Please enter a valid recipe and a level between 1 and 3');
    }
    }
