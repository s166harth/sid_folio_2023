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
    },
    {
      title: "spotify-UI-clone",
      tags: "#html #css #JS",
      description: "I tried to make a spotify clone for my coding ninja's project",
      link:"https://github.com/s166harth/CN_Major_1",
      gif: "https://user-images.githubusercontent.com/56957437/211206402-22a17b29-ea61-4faf-aa98-803479648f52.png",
    },
    {
      title: "IMDb Clone",
      tags:"#html #css #JS",
      description: "A complete IMDb clone using OMDb API for search functionality and Wishlist making",
      gif: "https://user-images.githubusercontent.com/56957437/211206827-3fd1dbc4-110a-4296-91f9-84efe2a495b4.png",
      link: "https://github.com/s166harth/CN_SKILLTEST_FRONTEND_2",
    },
    {
      title: "Stock-Screener",
      tags: "#Python #streamlit",
      description:"A terminal to check stock prices with various indicators on charts",
      gif:"https://user-images.githubusercontent.com/56957437/158430160-a58ee196-5303-445a-a0af-b0f38856c025.gif",
      link:"https://github.com/s166harth/stock-screener",
    },
    {
      title:"Folio",
      tags:"#reactJS #html #css",
      description:"This is my old portfolio website, it's still online, feel free to check it out ;)",
      gif:"https://user-images.githubusercontent.com/56957437/211207168-537caba5-038d-4808-8731-a162a5a6cff5.png",
      link:"https://siddharth2022.netlify.app/",
    },
    {
      title:"Quant Trading Terminal",
      tags:"#ReactJS #Python #MaterialUI #NodeJS",
      description:"Our B.Tech project which makes quant trading simple for normal people by providing them pre-made scripts",
      gif:"https://user-images.githubusercontent.com/56957437/211207417-5f39daf9-e1c1-40ea-ae49-01552d67b2f2.png",
      link:"https://github.com/s166harth/Quant-trading-terminal",
    },
    {
      title:"Blogging Site",
      tags:"#django #MySQL",
      description:"A very simple blogging site made using Django framework",
      gif:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tvabjwNjlbY0mkD9OQbLZAHaE8%26pid%3DApi&f=1&ipt=617e2c38dfc44673a1daf3fc5631a6b4de7b2799e23febce045f2be6d0091fc9&ipo=images",
      link:"https://github.com/s166harth/sidblog"
    },
    {
      title:"Crypto-currency price analysis",
      tags:"#python #machinelearning",
      description:"My 4th sem project which is a bunch of ML algorithms to predict prices of cryptocurrencies",
      gif:"https://assets.entrepreneur.com/content/3x2/2000/20181220164101-GettyImages-930264238.jpeg",
      link:"https://github.com/s166harth/finance-project"
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




// redering blogs
fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@siddharthsagar2019')
  .then((response) => response.json())
  .then((data) => console.log(data));
