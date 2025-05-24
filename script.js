// NAVIGATION


const hamburger = document.querySelector('.hamburger');
const navLeft = document.querySelector('.left');
const navRight = document.querySelector('.right');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
});



// Fermer le menu quand on clique sur un lien
document.querySelectorAll('#heading a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLeft.classList.remove('active');
        navRight.classList.remove('active');
    });
}); 


// const toggle = document.getElementById('menu-toggle');
// const menu1 = document.getElementById('menu1');
// const heading = document.getElementById('heading');
// const menu2 = document.getElementById('menu2');

// // const menu2 = document.getElementById('menu2');


// toggle.addEventListener('click', () => {
//       menu1.classList.toggle('show');
//       menu2.classList.toggle('show');
//       // heading.classList.toggle('taille')
//       // 
//     });


// function myFunction() {
//     var x = document.getElementById("navigation");
//     if (x.className === "topnav") {
//       x.className += " active";
//     } else {
//       x.className = "topnav";
//     }
//   }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "left") {
//     x.className += " responsive";
//   } else {
//     x.className = "left";
//   }
// }





// COMPTE A REBOURS

// Definir la date de fin du compte à rebours (ex. 31 décembre 2024 à minuit)
let countdownDate = new Date("Dec 23, 2025 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
let countdownFunction = setInterval(function() {

    // Obtenir la date et l'heure actuelles
    let now = new Date().getTime();

    // Calculer la distance entre maintenant et la date cible
    let distance = countdownDate - now;

    // Calculer les jours, heures, minutes et secondes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans l'élément HTML
    // document.getElementById("countdown").innerHTML = days + "j " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    document.getElementById("countdown").innerHTML = `
        <div class="timer">
            <span class="value">${days}</span>
            <span class="label">Jours</span>
        </div>

        <div class="timer">
            <span class="value">${hours}</span>
            <span class="label">Heures</span>
        </div>

        <div class="timer">
            <span class="value">${minutes}</span>
            <span class="label">Minutes</span>
        </div>

        <div class="timer">
            <span class="value">${seconds}</span>
            <span class="label">Secondes</span>
        </div>
    
    `;


    // Si le compte à rebours est terminé, afficher un message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "C'est le jour J";
    }
}, 1000);



// // Paiement

// // Initialiser Stripe avec votre clé publique
// const stripe = Stripe('votre_clé_publique');

// // Créer une instance de Stripe Elements
// const elements = stripe.elements();
// const cardElement = elements.create('card');
// cardElement.mount('#card-element');

// // Gérer les erreurs
// cardElement.on('change', (event) => {
//    const displayError = document.getElementById('payment-message');
//    if (event.error) {
//        displayError.textContent = event.error.message;
//    } else {
//        displayError.textContent = '';
//    }
// });


// // Gérer la soumission du formulaire
// const form = document.getElementById('payment-form');
// form.addEventListener('submit', async (event) => {
//    event.preventDefault();

//    const {token, error} = await stripe.createToken(cardElement);
//    if (error) {
//        // Afficher l'erreur dans l'interface utilisateur
//        const errorElement = document.getElementById('payment-message');
//        errorElement.textContent = error.message;
//    } else {
//        // Envoyer le token à votre serveur pour traiter le paiement
//        stripeTokenHandler(token);
//    }
// });

// // Envoyer le token au serveur
// function stripeTokenHandler(token) {
//    // Ajouter le token au formulaire et soumettre
//    const form = document.getElementById('payment-form');
//    const hiddenInput = document.createElement('input');
//    hiddenInput.setAttribute('type', 'hidden');
//    hiddenInput.setAttribute('name', 'stripeToken');
//    hiddenInput.setAttribute('value', token.id);
//    form.appendChild(hiddenInput);

//    form.submit();
// }


// // CONNEXION

// // script.js
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche l'envoi du formulaire

//     // Récupérer les valeurs des champs
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('error-message');

//     // Vérifier que les champs ne sont pas vides
//     if (username === "" || password === "") {
//         errorMessage.textContent = "Tous les champs doivent être remplis.";
//         errorMessage.style.display = "block";
//     } else {
//         // Si tout est correct, vous pouvez simuler la connexion ici
//         errorMessage.style.display = "none";
//         alert("Connexion réussie !");

//         // Envoyer le formulaire ou effectuer une redirection
//         // Par exemple : window.location.href = "dashboard.html";
//     }
// });



// // script.js
// function showPaymentForm(formId) {
//     // Cache tous les formulaires
//     document.getElementById("cardForm").classList.add("hidden");
//     document.getElementById("paypalForm").classList.add("hidden");
//     document.getElementById("applePayForm").classList.add("hidden");
    
//     // Affiche le formulaire sélectionné
//     document.getElementById(formId).classList.remove("hidden");
// }

// function paypalPayment() {
//     alert("Redirection vers PayPal...");
//     // Ici vous pourriez implémenter la redirection vers PayPal
// }

// function applePayPayment() {
//     alert("Traitement du paiement Apple Pay...");
//     // Ici vous pourriez implémenter Apple Pay via une API comme Apple Pay JS
// }




// const text = "Ceci est un effet d'écriture en direct, comme si quelqu'un écrivait chaque caractère à la machine.";
//     const typingContainer = document.getElementById("typingContainer");
//     let index = 0;

//     function typeCharacter() {
//         if (index < text.length) {
//             typingContainer.textContent += text.charAt(index);
//             index++;
//             setTimeout(typeCharacter, 100); // Ajustez la vitesse d'apparition ici
//         }
//     }

//     typeCharacter();




    // function typeEffect(element, speed) {
    //     var text = element.innerHTML;
    //     element.innerHTML = "";
        
    //     var i = 0;
    //     var timer = setInterval(function() {
    //     if (i < text.length) {
    //       element.append(text.charAt(i));
    //       i++;
    //     } else {
    //       clearInterval(timer);
    //     }
    //   }, speed);
    // }
    
    
    // // application
    // var speed = 75;
    // var h1 = document.querySelector('h1');
    // var p = document.querySelector('p');
    // var delay = h1.innerHTML.length * speed + speed;
    // console.log(delay)
    
    // // type affect to header
    // typeEffect(h1, speed);
    
    
    // // type affect to body
    // setTimeout(function(){
    //   p.style.display = "inline-block";
    //   typeEffect(p, speed);
    // }, delay);


    // FAQS
//     var acc = document.getElementsByClassName("accordion");
//     var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
    
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }



// for (i = 0; i < acc.length; i++) {
    
//     acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;

//     console.log(panel.style.maxHeight);
//     console.log(panel.scrollHeight);

//     if (panel.style.maxHeight){
//         panel.style.maxHeight = null;
//     } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//     });
// }



const boxes = document.querySelectorAll('.box');

const handleScroll = () => {
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // pour les éléments déjà visibles au chargement




const imageStory = document.querySelectorAll('.imageStory');


const handleScroller = () => {
    imageStory.forEach(imgStory => {
    const rect = imgStory.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        imgStory.classList.add('montrer');
    }
  });
};

window.addEventListener('scroll', handleScroller);
window.addEventListener('load', handleScroller); // pour les éléments déjà visibles au chargement


const details = document.querySelectorAll('.details');

const handleScrolling = () => {
    details.forEach(det => {
    const rect = det.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      det.classList.add('visibles');
    }
  });
};

window.addEventListener('scroll', handleScrolling);
window.addEventListener('load', handleScrolling); // pour les éléments déjà visibles au chargement
