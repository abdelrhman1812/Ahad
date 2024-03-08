// //Containaer Games When i click play now
// let trainGame = document.getElementById("train-game");
// let enjoyGame = document.getElementById("enjoy-game");

// //btn of game paly Now

// let btnTrain = document.getElementById("btn-train");
// let btnEnjoy = document.getElementById("btn-enjoy");

// // btn Return To All Games

// let returnGames = document.querySelectorAll(".return");

// //Containaer Games

// let containerGame = document.getElementById("containerGame");

// /* Functions */

// document.addEventListener("DOMContentLoaded", function () {
//   // on click btn paly now of train diplay game and hide row contains all games
//   btnTrain.addEventListener("click", function () {
//     trainGame.classList.remove("d-none");
//     containerGame.classList.add("d-none");
//     enjoyGame.classList.add("d-none");
//   });

//   // on click btn paly now of Enjoy diplay game and hide row contains all games

//   btnEnjoy.addEventListener("click", function () {
//     enjoyGame.classList.remove("d-none");
//     trainGame.classList.add("d-none");
//     containerGame.classList.add("d-none");
//   });

//   // on click btn return in each game  diplay  all games to chosess other game

//   returnGames.forEach((element) => {
//     element.addEventListener("click", function () {
//       containerGame.classList.remove("d-none");
//       enjoyGame.classList.add("d-none");
//       trainGame.classList.add("d-none");
//     });
//   });
// });
{
  /* =================== Food =================== */
}

let foods = [
  {
    id: 1,
    title: "Healthy Fats",
    description: `Research shows consuming healthy fats is essential for boosting brain health and supporting the nervous system. This improved brain functioning may reduce symptoms of ADHD like inattention or poor focus.
      Healthy fats to include in an ADHD diet include:
      Avocado, Oily fish (mackerel, tuna, trout, salmon), Eggs, Nuts, Seeds, Olive oil, Dark chocolate.
      `,
    img: "image/Food/Healthy Fats.jpg",
  },
  {
    id: 2,
    title: "Complex Carbohydrates",
    description: `Complex carbohydrates consist of sugar molecules strung together into complex chains. Various whole grains, starchy vegetables, beans, oats, and fruits contain these specific nutrients. In some cases, eating complex carbohydrates before bed can help promote sleep, possibly reducing insomnia commonly associated with ADHD.
      Complex carbohydrates to include in an ADHD diet include:
      Oatmeal, Brown rice, Quinoa, Chickpeas, Potatoes, Beets, Peas, Apples, Bananas.
      `,
    img: "image/Food/Complex Carbohydrates.jpg",
  },
  {
    id: 3,
    title: "Protein",
    description: `Complex carbohydrates consist of sugar molecules strung together into complex chains. Various whole grains, starchy vegetables, beans, oats, and fruits contain these specific nutrients. In some cases, eating complex carbohydrates before bed can help promote sleep, possibly reducing insomnia commonly associated with ADHD.
      Complex carbohydrates to include in an ADHD diet include:
      Oatmeal, Brown rice, Quinoa, Chickpeas, Potatoes, Beets, Peas, Apples, Bananas.
      `,
    img: "image/Food/Protein.jpg",
  },
  {
    id: 4,
    title: "Fruits & Vegetables",
    description: `Complex carbohydrates consist of sugar molecules strung together into complex chains. Various whole grains, starchy vegetables, beans, oats, and fruits contain these specific nutrients. In some cases, eating complex carbohydrates before bed can help promote sleep, possibly reducing insomnia commonly associated with ADHD.
      Complex carbohydrates to include in an ADHD diet include:
      Oatmeal, Brown rice, Quinoa, Chickpeas, Potatoes, Beets, Peas, Apples, Bananas.
      `,
    img: "image/Food/Vegetables.jpg",
  },
];

function displayFoods() {
  let empty = "";
  for (let i = 0; i < foods.length; i++) {
    empty += `
          <div class="col-md-6 col-lg-4">
            <div class="item" onclick="showDetails(${foods[i].id})">
              <figure>
                <img src="${foods[i].img}" class="w-100 pointer" alt="food">
              </figure>
              <div class="info">
                <h3>${foods[i].title}</h3>
                <span>${foods[i].description
                  .split(" ")
                  .slice(0, 5)
                  .join(" ")}</span>
              </div>
            </div>
          </div>`;
  }
  let foodContainer = document.getElementById("foodContainer");
  if (foodContainer) {
    foodContainer.innerHTML = empty;
  }
}

function showDetails(id) {
  window.location.href = `foodDetails.html?id=${id}`;
}

displayFoods();

{
  /* =================== Doctots =================== */
}

let doctors = [
  {
    id: 1,
    name: "Amel Hussain ",
    titleJop: " Developmental Behavioral Pediatrician",
    description: ` Amel Hussain H Alawami , Developmental Behavioral Pediatrician with passion to help children with disabilities to reach their potentials and guide their parents through the journey.
                   Dr. Alawami has a strong background in pediatrics, with special interest in early intervention in all developmental disorders.   `,
    experience: [
      {
        title: `Developmental Behavior Pediatrician, Johns Hopkins Aramco Healthcare`,
        start: "2018",
        end: "Present",
      },
      {
        title: `General Pediatric Consultant, Saudi Aramco Medical Services, Dhahran, Saudi `,
        start: "2003",
        end: "2015",
      },
      {
        title: `General physician,  Saudi Aramco Medical Services, Dhahran, Saudi Arabia `,
        start: "1996",
        end: "2000",
      },
    ],

    education: [
      {
        title: ` Master’s in Public Administration, Suffolk university. Boston, Massachusetts`,
        start: "2016",
        end: "2018",
      },
      {
        title: `Leadership Education in Neurodevelopmental and Related Disabilities (LEND), University of Massachusetts, Worcester Massachusetts `,
        start: "2016",
        end: "2017",
      },
      {
        title: `Board Certification - Pediatrics, American Board of Pediatrics `,
        start: "2003",
        end: "Present",
      },
    ],

    residency: [
      {
        title: ` Developmental Behavior Pediatric Fellowship, Tufts Medical Center, Boston, Massachusetts, United States of America`,
        start: "2015",
        end: "2018",
      },
      {
        title: `Pediatric Residency, Baylor College of Medicine, Houston Texas, United States of America`,
        start: "2000",
        end: "2003",
      },
    ],
    medicalSchool: [
      {
        title: ` Medical school, MBBS, King Faisal University (currently Imam Abdulrahman University), Dammam, Saudi Arabia `,
        start: "1987",
        end: "1994",
      },
    ],

    img: "image/Doctors/1.jpg",
    socilMedia: "https://twitter.com/amel612",
  },
  {
    id: 2,
    name: "Ali Al-Saad",
    titleJop: "Consultant of adult psychiatry ",
    description: `Ali Al-Saad Consultant of adult psychiatry and subspecialty in the treatment of children, adolescents and their families, Board of the Royal College of Canada - I also work psychodynamic sessions, cognitive behavioral, family and marital sessions. - Interested in the diagnosis and treatment of developmental disorders such as hyperactivity, attention deficit, autism, sleep disorders, mood, anxiety and obsessive-compulsive disorder.  `,
    img: "image/Doctors/Ali.jpg",
    socilMedia: "https://www.sotwe.com/DrAlsaad1",
  },
  {
    id: 3,
    name: "Amal Alyamani",
    titleJop: "Director of Autism Center ",
    description: `Ali Al-Saad Consultant of adult psychiatry and subspecialty in the treatment of children, adolescents and their families, Board of the Royal College of Canada - I also work psychodynamic sessions, cognitive behavioral, family and marital sessions. - Interested in the diagnosis and treatment of developmental disorders such as hyperactivity, attention deficit, autism, sleep disorders, mood, anxiety and obsessive-compulsive disorder.  `,
    experience: [
      {
        title: `Director of Autism Center`,
        start: "2017",
        end: "",
      },

      {
        title: `Consultant Clinical Psychologist `,
        start: "2016",
        end: "",
      },
    ],
    img: "image/Doctors/AmalAlyamani.jpg",

    socilMedia: "https://sa.linkedin.com/in/amalalyamani",
  },

  {
    id: 4,
    name: "Afnan Almarshadi ",
    titleJop: "Consultant Psychiatrist",
    description: `Consultant Psychiatrist, Specialist in Child, Adolescent and Adult Psychiatry – University of Toronto/Canada Consultant Psychiatrist - Prince Sultan Military Medical City in Riyadh.  
    She holds a subspecialty in child and adolescent psychiatry from the University of Toronto, Canada, and a certificate in mental health leadership in the workplace from Queen’s University, Canada. 
    She holds a master’s degree in health systems management and evaluation, leadership and creativity from the University of Toronto - Canada. 
    Interested in developing mental health services provided to those in need, especially children and adolescents, and building a supportive work environment for health workers.
     `,
    img: "image/Doctors/Afnan.jpg",

    socilMedia: "https://twitter.com/dr_afnan12?lang=ar ",
  },
];

function displayDotors() {
  let doctorsContainer = document.getElementById("doctorsContainer");
  let empty = "";
  for (let i = 0; i < doctors.length; i++) {
    empty += `
    <div class="col-md-6 col-lg-4">
    <div class=" doctor-item">
        <!-- Title In tag Figure -->
        <figure class="pointer" onclick="doctorDetails(${doctors[i].id})">
            <img src=${doctors[i].img} alt=${doctors[i].name}>
        </figure>
        <!-- Title In tag figcaption -->
        <figcaption>
            <h4>
               ${doctors[i].name}
            </h4>
        </figcaption>
        <p>${doctors[i].titleJop}</p>


      
    </div>
</div>`;
  }

  if (doctorsContainer) {
    doctorsContainer.innerHTML = empty;
  }
}

displayDotors();

function doctorDetails(idDoctor) {
  window.location.href = `doctorDetails.html?id=${idDoctor}`;
}
