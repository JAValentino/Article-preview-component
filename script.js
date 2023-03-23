const btn = document.querySelector('.share-btn');
const share_content = document.querySelector('.share-content');

btn.addEventListener('click', () =>{
	btn.classList.toggle('active');
	share_content .classList.toggle('active');
})