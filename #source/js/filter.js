function filter(listClass) {
    const projectList = document.querySelector(`${listClass}`);
    const projectListItems = document.querySelectorAll('.project-page__filter');
    
    projectList.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;


        if(target.classList.contains('project-page__filter')) {
            projectListItems.forEach( listItem => {
                listItem.classList.remove('_active');
            });
            target.classList.add('_active');

            showId(targetId);
        }

        event.preventDefault();
    })
}


function showId(targetId) {
    const projectItems = document.querySelectorAll('.project-page__item');
    if(targetId) {
        projectItems.forEach( item => {
            if(!(item.dataset.filter.includes(targetId))){
                item.classList.add('_hide');
            } else {
                item.classList.remove('_hide');
            }
        });
    } else {
        projectItems.forEach( item => {
            item.classList.remove('_hide');
        });
    }
}

