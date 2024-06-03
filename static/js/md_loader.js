// Function to load HTML content into the body
function loadHTMLContent(file, el) {
    if (!file || !el) return
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
        // Configure it: GET-request for the URL /static/mdHTML/filename.html
    xhr.open('GET', '/static/mdHTML/' + file, true);

    // Set the callback function
    xhr.onreadystatechange = function () {
        // If the request is completed and was successful
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Insert the HTML content into the body
            el.classList.toggle("markdown-body", true)
            el.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}

// List of HTML files to load (one at a time or based on some condition)
const htmlFiles = [
    "Maquetter_une_application.html",
    "Développer_une_interface_utilisateur_de_type_desktop.html",
    "Développer_des_composants_d'accès_aux_données.html",
    "Développer_la_partie_front-end_d'une_interface_utilisateur_web.html",
    "Développer_la_partie_back-end_d'une_interface_utilisateur_web.html",
    "Concevoir_une_base_de_données.html",
    "Mettre_en_place_une_base_de_données.html",
    "Développer_des_composants_dans_le_langage_d'une_base_de_données.html",
    "Collaborer_à_la_gestion_d'un_projet_informatique_et_à_l'organisation_de_l'environnement_de_développement.html",
    "Concevoir_une_application.html",
    "Développer_des_composants_métier.html",
    "Construire_une_application_organisée_en_couches.html",
    "Développer_une_application_mobile.html",
    "Préparer_et_exécuter_les_plans_de_tests_d'une_application.html",
    "Préparer_et_exécuter_le_déploiement_d'une_application.html"
];

// htmlFiles.forEach(el => {
//     loadHTMLContent(el, document.body)
// });