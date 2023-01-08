// glitch effect

let rightside = document.getElementsByClassName("glitch")[0]
let count =30;
for(let i=0;i<count;i++)
{
    let glitchbox = document.createElement('div');
    glitchbox.className = 'glitchbox';
    
    rightside.appendChild(glitchbox);
}
let glitchbox = document.getElementsByClassName('glitchbox');
setInterval(() => {
 for(let i=0;i<glitchbox.length;i++)
{
    glitchbox[i].style.top = Math.floor(Math.random()*50) + 'vh';
    glitchbox[i].style.left = Math.floor(Math.random()*50) + 'vw';
    glitchbox[i].style.width = Math.floor(Math.random()*400) + 'px';
    glitchbox[i].style.height = Math.floor(Math.random()*50) + 'px';

}   
}, 200);


// text scramble


class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Front-end Developer',
  'Writer',
  'Java developer',
  'React developer'
]

const el = document.querySelector('.scrambledtext')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next()



// the parralax
const observer = new IntersectionObserver((entries => {

    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
}));

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el)=>observer.observe(el));

// realtime rendring projects

const projects = [
    {
        title: "sid-share",
        tags: "#MongoDB #GraphQL",
        gif: "https://user-images.githubusercontent.com/56957437/159137865-e903e1f5-687c-412a-86b4-05791173b57a.gif",
        description: "This is my attemp to make a text based social media application using MongoDB for database",
        link: "https://github.com/s166harth/sid-share"
    }
]


var renderpros = () =>{
    var projectdiv = document.getElementsByClassName('projects')[0];
    for(let i=0;i<projects.length;i++)
    {
        let project = document.createElement('div');
        project.className = 'project';
        
        project.innerHTML = `
        
         <h3>${projects[i].title}</h3>
                <img src="${projects[i].gif}" alt="Oops! I guess there's an issue with github" srcset="">
                <span>${projects[i].tags}</span>
                <p>${projects[i].description}</p>
                <a href="${projects[i].link}">Go To the project!!</a>
        
        `
        projectdiv.appendChild(project);

    }

}
renderpros();