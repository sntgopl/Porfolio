document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#menuModal');
  const hamburger = document.querySelector('#hamburger');
  const closeButton = document.querySelector('#closeButton');
  const listOption = document.querySelector('#menuList');
  const workButton = document.querySelector('#workSeeBtn');
  const projectPup = document.querySelector('#popUp');
  const projectButton1 = document.querySelector('#projectBtn1');
  const pupClose = document.querySelector('#popUpCloseButton');

  const arrProjects = [
    {'name': 'Project one',
     'description': 'this is the project one',
     'img':'images/projects/projects16',
     'technologies':['html', 'Bootstrap', 'Ruby and Race'],
     'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
     'linkToSource': 'https://github.com/sntgopl/Porfolio'
    },
    {'name': 'Project Two',
     'description': 'this is the project Two',
     'img':'images/projects/projects16',
     'technologies':['html', 'Bootstrap', 'Ruby and Race'],
     'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
     'linkToSource': 'https://github.com/sntgopl/Porfolio'
    },
    {'name': 'Project Three',
    'description': 'this is the project Three',
    'img':'images/projects/projects16',
    'technologies':['html', 'Bootstrap', 'Ruby and Race'],
    'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
    'linkToSource': 'https://github.com/sntgopl/Porfolio'
   },
   {'name': 'Project Fourth',
    'description': 'this is the project Fourth',
    'img':'images/projects/projects16',
    'technologies':['html', 'Bootstrap', 'Ruby and Race'],
    'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
    'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Project five',
    'description': 'this is the project five',
    'img':'images/projects/projects16',
    'technologies':['html', 'Bootstrap', 'Ruby and Race'],
    'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
    'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Project six',
   'description': 'this is the project six',
   'img':'images/projects/projects16',
   'technologies':['html', 'Bootstrap', 'Ruby and Race'],
   'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
   'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Project seven',
   'description': 'this is the project seven',
   'img':'images/projects/projects16',
   'technologies':['html', 'Bootstrap', 'Ruby and Race'],
   'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
   'linkToSource': 'https://github.com/sntgopl/Porfolio'
  }    
];

  hamburger.addEventListener('click', () => {
    modal.classList.add('open-smooth');
    modal.classList.remove('close-smooth');
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('open-smooth');
    modal.classList.add('close-smooth');

    setTimeout(() => {
      modal.style.display = 'none';
    },
    500);
  });

  listOption.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  workButton.addEventListener('click', () => {
    projectPup.style.display = 'flex';
  });

  projectButton1.addEventListener('click', () => {
    projectPup.style.display = 'flex';
  });

  pupClose.addEventListener('click', () => {
    projectPup.style.display = 'none';
  });
});