function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);
        
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass) 
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block'
        tabs[i].classList.add(activeClass);
    }

    hideTabContent(); 
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target
        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item,i) => {
                if (item == target){
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        };
    });

}

export default tabs;