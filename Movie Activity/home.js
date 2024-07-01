let movies = [];
let priorities = [];

function addMovie(){
    const movieInput = document.getElementById('movie');
    const priorityInput = document.getElementById('priority');
    const movieList = document.getElementById('movieList');

    let movie = movieInput.value.trim();
    let priority = Number(priorityInput.value.trim());

    if(movie!==''&& !isNaN(priority) && priority>=1 && priority <=3){
        movies.push(movie);
        priorities.push(priority);

        const li = document.createElement('li');
        li.textContent = movie;
        
        switch(priority){
            case 1: 
                li.classList.add('priority-high');
                break;
            case 2:
                li.classList.add('priority-medium');
                break;
            case 3:
                li.classList.add('priority-low');
                break;
        }

        const watchButton = document.createElement('button');
        watchButton.textContent = 'Watched';
        watchButton.onclick = function(){
            li.classList.toggle('watched');
        };
        li.appendChild(watchButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function(){
            const newMovie = prompt('Edit Movie: ',movie);
            if(newMovie!==null && newMovie.trim()!==''){
                const movieIndex = movies.indexOf(movie);
                movies[movieIndex] = newMovie; //update the tasks array
                li.firstChild.textContent = newMovie; // update the text node in DOM
                movie = newMovie; //update task variable to new task
            }

            const newPriority = prompt('Edit Priority: ',priority);
            if(newPriority!==null && newPriority.trim()!==''){
                const priorityIndex = priorities.indexOf(priority);
                priorities[priorityIndex] = newPriority; //update the tasks array
                // li.firstChild.textContent = newPriority; // update the text node in DOM
                priority = newPriority; //update task variable to new task

                li.classList.remove('priority-high', 'priority-medium', 'priority-low');


                switch(parseInt(newPriority)){
                    case 1: 
                        li.classList.add('priority-high');
                        break;
                    case 2:
                        li.classList.add('priority-medium');
                        break;
                    case 3:
                        li.classList.add('priority-low');
                        break;
                }
            }

            
        };
        li.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function(){
            movieList.removeChild(li);
            const movieIndex = movies.indexOf(movie);
            movies.splice(movieIndex,1);
            priorities.splice(movieIndex,1);
        };
        li.appendChild(removeButton);


        movieList.appendChild(li);
        movieInput.value = '';
        priorityInput.value ='';
        
    } else{
        alert('Please enter a valid movie and a priority between 1 and 3');
    }
}