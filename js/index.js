document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#menuModal');
  const hamburger = document.querySelector('#hamburger');
  const closeButton = document.querySelector('#closeButton');
  const listOption = document.querySelector('#menuList');
  const projectPup = document.querySelector('#popUp');
  const workButton = document.querySelector('#workSeeBtn');
  const projectButton1 = document.querySelector('#projectBtn1');
  const projectButton2 = document.querySelector('#projectBtn2');
  const projectButton3 = document.querySelector('#projectBtn3');
  const projectButton4 = document.querySelector('#projectBtn4');
  const projectButton5 = document.querySelector('#projectBtn5');
  const projectButton6 = document.querySelector('#projectBtn6');
  const popClose = document.querySelector('#popUpCloseButton');
  const pTitle = document.querySelector('#popUpTitle');
  const pImg = document.querySelector('#popUpImg');
  const pTxt = document.querySelector('#popUpDesc');
  const pBtnLive = document.querySelector('#popUpLive');
  const pBtnSource = document.querySelector('#popUpSource');
  const pList = document.querySelector('#popUpList');

  const arrProjects = [
    {
      name: 'Multi-Post Stories',
      description: 'This is Project Number 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/introimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails', 'css'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Professional Art Printing Data',
      description: 'This is Project Number 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/workimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Data Dashboard Healthcare',
      description: 'This is Project Number 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/introimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Website Protfolio',
      description: 'This is Project Number 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/workimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails', 'python'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Profesional Art Printing Data More',
      description: 'This is Project Number 5: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/introimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Data Dashboard Healthcare',
      description: 'This is Project Number 6: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/workimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails', 'css'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
    {
      name: 'Website Protfolio',
      description: 'This is Project Number 7: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
      img: 'images/intro/introimg.png',
      technologies: ['html', 'Bootstrap', 'Ruby on rails'],
      linkToLive: 'https://sntgopl.github.io/',
      linkToSource: 'https://github.com/sntgopl/Porfolio',
    },
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

  function popUpFiller(num, arr) {
    const project = arr[num];
    pTitle.innerHTML = project.name;
    pTxt.innerHTML = project.description;
    pImg.src = project.img;
    pBtnLive.attributes.href.nodeValue = project.linkToLive;
    pBtnSource.attributes.href.nodeValue = project.linkToSource;
    pList.innerHTML = '';
    project.technologies.forEach((item) => {
      const pLiPlus = document.createElement('li');
      pLiPlus.innerHTML = item;
      pLiPlus.classList.add('pLiOp1');
      pList.append(pLiPlus);
    });
  }

  workButton.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(0, arrProjects);
  });

  projectButton1.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(1, arrProjects);
  });

  projectButton2.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(2, arrProjects);
  });

  projectButton3.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(3, arrProjects);
  });

  projectButton4.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(4, arrProjects);
  });

  projectButton5.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(5, arrProjects);
  });

  projectButton6.addEventListener('click', () => {
    projectPup.style.display = 'flex';
    popUpFiller(6, arrProjects);
  });

  popClose.addEventListener('click', () => {
    projectPup.style.display = 'none';
  });

  // Mail-Validation
  // define variables
  const form = document.querySelector('#formV');
  const email = document.querySelector('#email');
  const emailError = document.querySelector('.error');

  // function displaying message of succes of fail validation
  function showError(input) {
    const lower = input.toLowerCase();
    const pattern = /@+./;
    // conditional fail or success
    // fail change text and class
    if (lower !== input) {
      emailError.innerText = 'Email input should be in lower case';
      emailError.className = 'alert error';
      return false;
    }
    if (!pattern.test(input)) {
      emailError.innerText = 'Email input should have @ and .';
      emailError.className = 'alert error';
      return false;
    }
    // true change text and remove class --> submit
    if (lower === input) {
      emailError.innerText = 'Thank you for your submit';
      emailError.className = 'alert success';
      setTimeout(() => {
        form.submit();
      },
      1000);
    }
    return true;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showError(email.value);
  });

  const firstName = document.querySelector('#firstname');
  const lastName = document.querySelector('#lastname');
  const comment = document.querySelector('#msg');
  // Local-Storage
  // declaring new variables
  const storage = {
    fname: '',
    lname: '',
    mail: '',
    msg: '',
  };

  // Form information storing function
  function populateStorage() {
    storage.fname = firstName.value;
    storage.lname = lastName.value;
    storage.mail = email.value;
    storage.msg = comment.value;
    localStorage.setItem('data', JSON.stringify(storage));
  }
  // Form completing with storage information
  function getFromStorage() {
    const retrieve = JSON.parse(localStorage.getItem('data'));
    firstName.value = retrieve.fname;
    lastName.value = retrieve.lname;
    email.value = retrieve.mail;
    comment.value = retrieve.msg;
  }

  function setDataFirstTime() {
    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify(storage));
    }
  }

  setDataFirstTime();
  getFromStorage();

  firstName.addEventListener('input', () => {
    populateStorage();
  });

  lastName.addEventListener('input', () => {
    populateStorage();
  });

  comment.addEventListener('input', () => {
    populateStorage();
  });

  email.addEventListener('input', () => {
    populateStorage();
  });
});