
const nav = document.querySelector('.nav')
const navbtn = document.querySelector('.burger-btn')
const linkbtns = document.querySelectorAll('.nav__item')


//funkcja strzałkowa 
const handleNav = () => {
    nav.classList.toggle('nav--active');


    linkbtns.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.remove('nav--active');
        })
    })
    deleteAnimation();
    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    linkbtns.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.'+ delayTime + 's';
        delayTime++ 

    })
}

const deleteAnimation = () => {
	linkbtns.forEach(item => {
		item.addEventListener('click', () => {
			linkbtns.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}



navbtn.addEventListener('click', handleNav)



