// Define Global Variables
const htmlTag = document.documentElement;
const bodyTag = document.getElementsByTagName('body')[0];
const headerTag = document.getElementsByClassName("page__header")[0];
const mainTag = document.getElementsByTagName("main")[0];
const ulTag = document.getElementsByClassName('navbar__menu')[0];
const allLiTag = document.getElementsByTagName('li');
const allAnchorTag = document.querySelectorAll('.menu__link');
const allSectionsTagArray = [...document.getElementsByTagName('section')];

let counter = 1;

// Smooth Scroll Behavior
htmlTag.style.scrollBehavior = 'smooth';

const CreateNavLink = ()=> {
  // Create a Global Variable inside a function
  window.incrementedSectionLink = `section${counter++}`;
  // Create The List Tag
  const customLiTag = document.createElement('li');
  // Create The Anchor Tag
  window.customAnchorTag = document.createElement('a');
  // Anchor Attr. and Functionality
  customAnchorTag.classList.add('menu__link')
  customAnchorTag.href= `#${incrementedSectionLink}`;
  customAnchorTag.textContent = incrementedSectionLink;
  // Append Anchor Tag to The List Tag
  customLiTag.appendChild(customAnchorTag);
  // Append List Tag to the Ul Tag
  ulTag.appendChild(customLiTag);
}

// Create Nav List Link Element for found sections
  allSectionsTagArray.forEach(() => {
    CreateNavLink();
})

// Create **NEW** Nav List Link Element
const createNewNavLink = () => {
  CreateNavLink();

  // Create additional section if not found
  if(allSectionsTagArray.length < allLiTag.length) {
    const section = document.createElement('section');
    section.id = window.incrementedSectionLink;
    section.setAttribute('data-nav', incrementedSectionLink);
  
    const div = `
    <div class="landing__container">
      <h2>Section ${incrementedSectionLink.substr(7)}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidun. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;
  
    section.innerHTML = div;
    mainTag.appendChild(section);
  }
}

// Create BTN to Add Section
const addSectionBtn = document.createElement('button');
addSectionBtn.textContent = "Add new Section";
addSectionBtn.style.cssText = 'padding: 10px; color: white; background: brown; outline: none; border: none; border-radius: 5px; cursor: pointer;'
addSectionBtn.onclick= function() {createNewNavLink()}
// Add addSectionBtn BTN to header
headerTag.appendChild(addSectionBtn);

// Create ScrollTOTOP BTN
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = 'TOP';
scrollToTopBtn.style.cssText = 'color: white; background: green; outline: none; border: 1px solid transparent; border-radius: 5px; position: fixed; top: 90vh; cursor: pointer; padding: 10px; transition: .3s; right: -100px'

scrollToTopBtn.onclick = function(){
  bodyTag.scrollTop = 0
}

// Scroll To Top Functionality
window.addEventListener("scroll", () => {
  if(scrollY >= 1040) {
    scrollToTopBtn.style.right = '10px';
  }
  else {
    scrollToTopBtn.style.right = '-100px';
  }
  const dataNavAttr = document.querySelectorAll('[data-nav]');
  dataNavAttr.forEach(el => {
    const position = el.getBoundingClientRect();
    if(position.top >= -350 && position.bottom <= window.innerHeight + 200) {
      el.classList.add('your-active-class');
    } else {
      el.classList.remove('your-active-class');
    }
  })
})
bodyTag.appendChild(scrollToTopBtn);

/* 
  ProJect FiniShed! Thank you
*/