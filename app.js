//elements
const btn =document.querySelector('button');
const [elmD,,elmM,,elmY] = document.querySelectorAll('p');

//attach event listener
btn.addEventListener('click',() => {
        const day = parseInt(Math.random() * 28) + 1;
        const month = parseInt(Math.random() * 12) + 1;
        const year = parseInt(Math.random() * 3) + new Date().getFullYear()
        elmD.textContent = day;
        elmM.textContent = month;
        elmY.textContent = year;
        btn.textContent = 'refresh'; 

})