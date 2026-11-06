/*
 * LISTE DES APPLICATIONS DU LANCEUR — seul fichier à modifier pour ajouter, retirer ou renommer une application.
 *
 *  id          : mot court sans espace ni accent (sert à l'adresse  ...?app=id  et au choix « au démarrage »)
 *  nom         : nom affiché sur la tuile
 *  detail      : une ligne d'explication sous le nom
 *  sigle       : 2 à 4 lettres affichées dans la pastille
 *  url         : adresse /exec du déploiement Apps Script (Déployer > Gérer les déploiements > URL de l'application Web)
 *  cadre       : true  = l'application s'ouvre dans le lanceur (son Code.gs accepte ?cadre=1)
 *                false = l'application s'ouvre dans Chrome (code non modifié ou non disponible)
 *  alerte      : true  = le lanceur vérifie chaque minute s'il y a du travail en attente (adresse ...?alerte=1)
 *                et l'affiche : pastille rouge sur la tuile, bandeau, cloche, son (Programme d'essais seulement)
 *
 *  Une application sans adresse (url: '') n'est pas affichée : utile tant qu'elle n'est pas encore déployée.
 *
 * Après une modification : enregistrer le fichier sur GitHub, puis fermer et rouvrir le lanceur sur les tablettes
 * (deux fois si l'ancienne liste s'affiche encore).
 */
var GEOTEC_APPLICATIONS = [
  { id: 'programmes', nom: 'Programme d’essais (ingénierie)', sigle: 'PE', cadre: true, alerte: true,
    detail: 'Fiches des ingénieurs : essais à programmer et feuilles de travail',
    url: 'https://script.google.com/macros/s/AKfycbyKxBjZ1OG7-KC6iHsMkg6SnmK3ozZ5tid_rXD4SfQmim-83OPUpo-QXWU2dF9weY-L/exec' },
  { id: 'icgtr', nom: 'IC GTR et granulats', sigle: 'GTR', cadre: true,
    detail: 'Identification et classification des sols, essais sur granulats',
    url: 'https://script.google.com/macros/s/AKfycbzU7RVKCy8BEsjmXJ0Gi7bZdz6RHWWwfWbsMtVh4HLig7X_xkD4u9PVmiJCLbPB0vIMzA/exec' },
  { id: 'mecaniques', nom: 'Essais mécaniques', sigle: 'MÉC', cadre: true,
    detail: 'Essais mécaniques, PV et récapitulatifs',
    url: 'https://script.google.com/macros/s/AKfycbyBjHghD-uYHrQcFtyUHq_8hZgRl7ElcmTcMdZBZ4sNoLUDekIgL39awbC_5ZbUR_8Paw/exec' },
  { id: 'insitu', nom: 'Essais in situ', sigle: 'ISI', cadre: true,
    detail: 'Essais sur le terrain',
    url: 'https://script.google.com/macros/s/AKfycbz6jr_Y1pV9ucecL9W45Mg4ZEM2B0Y6d7Mbv7Ckzvrt_yIvpl436eHscYHEG--OrUQFhA/exec' },
  { id: 'rc', nom: 'Résistance à la compression', sigle: 'RC', cadre: true,
    detail: 'Module RC : écrasement des éprouvettes',
    url: 'https://script.google.com/macros/s/AKfycbywG3WyWhl9gpOxLYV2p57v5hZo3EQNX01McB2Q5_cPOaYHZ-JvEheEnzzIU7zieJ7f/exec' },
  { id: 'registrebeton', nom: 'Registre compression béton', sigle: 'RCB', cadre: true,
    detail: 'Registre des PV béton',
    url: 'https://script.google.com/macros/s/AKfycbzti1vRF_MgbdHTWVQsGTFfbvHAMhzZbxQ7J19NdZlt1DOA0JszeUFnuMnXva74G6tj/exec' },
  { id: 'suivibeton', nom: 'Suivi béton', sigle: 'SB', cadre: true,
    detail: 'Suivi des prélèvements et des écrasements',
    url: 'https://script.google.com/macros/s/AKfycbyq0X9sygWTGe4SjgsS63VqnBGW8WaqqJOoOti5SNLiezrUMFilk9u92smcCqyNxH4l/exec' },
  { id: 'reception', nom: 'Réception des échantillons', sigle: 'L22', cadre: true,
    detail: 'Registre de réception EN-LAB-22',
    url: 'https://script.google.com/macros/s/AKfycbz4W0lCxWFN61ik63F84SzNzqy86FdT9U_bgHNmGe2T5bIWV0GK0x3IqQFRbJgzgOvbLQ/exec' },
  { id: 'suiviessais', nom: 'Suivi des essais', sigle: 'SE', cadre: true,
    detail: 'Avancement des essais par dossier',
    url: 'https://script.google.com/macros/s/AKfycbyOplE7mCzpaUv-F2QtXBd1mU2IZHo_akDYfAoz5tRFTTL2G_hTUhRFFGM7rH_nPyQaEg/exec' },
  { id: 'materiel', nom: 'Gestion du matériel', sigle: 'L09', cadre: true,
    detail: 'Sorties et retours du matériel EN-LAB-09',
    url: 'https://script.google.com/macros/s/AKfycbwUZEe1VlrAt_hdo5Sc8kK7DnCydZDdmpl3E-gCQbEfgiOc5km4Ai0-O6rGtYV_D6zv/exec' },
  { id: 'metrologie', nom: 'Métrologie', sigle: 'MET', cadre: true,
    detail: 'Étalonnages et vérifications EN-LAB-MET',
    url: 'https://script.google.com/macros/s/AKfycbxEv3l_HuEMTwwelUManT3T9D6bYarVi2RMWaDtfD96p1dUpkd2VrSRRIoSoQaVfa8fKA/exec' },
  { id: 'facturation', nom: 'Affaires et facturation', sigle: 'FAC', cadre: true,
    detail: 'Suivi des affaires du laboratoire',
    url: 'https://script.google.com/macros/s/AKfycbz7HXAp2hbIsJTJyb8KK_yPFQR8SYlV7BKNKlmoSzJKiXvPMiwFQzP9r6ViuIJAsnMy/exec' }
];
