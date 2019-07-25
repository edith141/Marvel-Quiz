//Hard coded correct ans
VANTA.WAVES({
    el: '.intro',
    color: 0xacadaf,
  waveHeight: 5.00,
  waveSpeed: 0.70,
  zoom: 1.72
  });
  
const ans = ['A', 'C', 'C', 'B'];
qs = 4

const form = document.querySelector('.quizForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const uans = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];
    uans.forEach((answer, index) => {
        if (answer === ans[index])
        {
            score = score + 1;
        }  
    })
    score = Math.trunc((score/qs)*100)
    scrollTo(0,0);
    const result = document.querySelector('.result');
    
    result.classList.remove('d-none');
    
    let op = 0;
    const timer = setInterval(() => {
        result.querySelector('span.res').textContent = `${op}%`;
        if(op == score)
        {
            clearInterval(timer);
        }
        else 
        {
            op+=1;
        }
        
    },25);
    
    //console.log();
    
})

//TODO-
//Get the questions-ans from an APIs