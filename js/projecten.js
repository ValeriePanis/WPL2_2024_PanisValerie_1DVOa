
const allprojects = [

    {
        title: 'Procreate',
        program: 'Persoonlijke projecten',
        imgPath: 'personal_project1.jpg'
    },

    {
        title: 'Photoshop',
        program: 'Persoonlijke projecten',
        imgPath: 'logo_contact_gegevens.png'
    },
    {
        title: 'Photoshop',
        program: 'Persoonlijke projecten',
        imgPath: 'WPL1_LOGO.png'

    },
    {
        title: 'Illustrator',
        program: 'Persoonlijke projecten',
        imgPath: 'WPL1zelfreflectie.png'
    },
    {
        title: 'Photoshop',
        program: 'Persoonlijke projecten',
        imgPath: 'affice.jpg'
    },
    {
        title: 'Photoshop',
        program: 'School projecten',
        imgPath: 'BRUSSELSAIRLINES_tweede_laag.png'
    },
    {
        title: ' Photoshop',
        program: 'School projecten',
        imgPath: 'oefening_twee_achtergronden.png'
    },
    {
        title: ' Photoshop',
        program: 'School projecten',
        imgPath: 'Tekengebied_1.png',
    },
    {
        title: ' Photoshop',
        program: 'School projecten',
        imgPath: 'Tekengebied_2.png',
    }

]
let filteredProjects = allprojects;
let selectie = document.getElementById('selectie')
const h1 = document.createElement('h1');
h1.innerText = 'Project filter';
h1.style.color ='white'
h1.style.marginBottom = '1rem'
h1.style.marginLeft ='2rem'
h1.style.marginTop ='5rem'
selectie.appendChild(h1);

const label = document.createElement('label');
label.style.margin = ' 1rem 1rem 3rem';
label.style.marginLeft = '2rem'
label.innerText = 'Projecten'
label.style.color ='white'
label.style.fontSize ="1.5rem"
selectie.appendChild(label);

const programs = ['Allemaal','Persoonlijke projecten','School projecten'];
const select = document.createElement('select');

for (let i = 0; i < programs.length; i++) {
    const option = document.createElement('option');
    option.value = programs[i];
    option.innerText = programs[i];
    select.appendChild(option);

}
selectie.appendChild(select);
select.addEventListener('change', ()=>{
    filteredProjects = allprojects.filter((allprojects)=>{
        let addToResultArray;
        if (select.value === 'Allemaal'){
            addToResultArray = true;
        }else {
            addToResultArray = allprojects.program === select.value;
        }
        return addToResultArray;
    })
    renderProjectsCards(filteredProjects);
})

const projectsContainer = document.createElement('section');
projectsContainer.style.display = 'flex';
projectsContainer.style.flexWrap = 'wrap';
projectsContainer.style.justifyContent = 'center';
projectsContainer.style.padding = '1rem 3rem ';
renderProjectsCards(filteredProjects);
let container = document.getElementById('container');
container.appendChild(projectsContainer);

function renderProjectsCards(projectsToRender){
    projectsContainer.innerHTML = '';
    projectsToRender.forEach((allprojects) =>{
        const card = document.createElement('div');
        card.style.width = '30%';
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.flexDirection = 'column';
        card.style.color ='white'
        const img = document.createElement('img');
        img.alt = allprojects.title;
        img.src = '../../img/' + allprojects.imgPath;
        img.style.justifyContent = 'center'
        img.style.objectFit ='cover'
        img.style.display ='flex'
        img.style.width = '95%';
        const p = document.createElement('p');
        p.innerText = allprojects.title;
        p.style.padding = '1rem 0 2rem 0';
        p.style.color ="white"
        card.appendChild(img);
        card.appendChild(p);
        projectsContainer.appendChild(card);
    })
}