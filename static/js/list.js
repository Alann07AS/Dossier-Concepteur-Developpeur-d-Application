const list = document.getElementById("list")
const md = document.getElementById("md")

// List of HTML files to load (one at a time or based on some condition)
const htmlFiles = [
    "Maquetter_une_application",
    "Développer_des_composants_d'accès_aux_données",
    "Développer_la_partie_front-end_d'une_interface_utilisateur_web",
    "Développer_la_partie_back-end_d'une_interface_utilisateur_web",
    "Concevoir_une_base_de_données",
    "Mettre_en_place_une_base_de_données",
    "Développer_des_composants_dans_le_langage_d'une_base_de_données",
    "Collaborer_à_la_gestion_d'un_projet_informatique_et_à_l'organisation_de_l'environnement_de_développement",
    "Concevoir_une_application",
    "Développer_des_composants_métier",
    "Construire_une_application_organisée_en_couches",
    "Développer_une_application_mobile",
    "Préparer_et_exécuter_les_plans_de_tests_d'une_application",
    "Préparer_et_exécuter_le_déploiement_d'une_application"
];

htmlFiles.forEach(f=>{
    const el = document.createElement("div")
    el.innerText = f.replaceAll("_", " ")
    el.classList.add("buble")
    el.classList.add("file")
    el.onclick = (e)=>{
        loadHTMLContent(f+".html", md, false)
        ShowMD()
        // window.location.href = "#list"
    }
    list.appendChild(el)
})

const mode = document.getElementById("mode")
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {mode.classList.add("dark")}
mode.onclick = ()=>mode.classList.toggle("dark")