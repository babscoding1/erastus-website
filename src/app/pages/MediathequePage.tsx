import { motion } from 'motion/react';
import {
  Image as ImageIcon,
  Calendar,
  Users,
  Handshake,
  X,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { images } from '@/assets/images';
import { video } from '@/assets/video';
import { fichiers } from "../../assets/fichiers"

type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

export function MediathequePage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const categories = ['Tous', 'Formations', 'Événements', 'Enfants', 'Partenariats'];

const albums = [
    {
      id: 1,
      title: 'Autonomisation socio-économique des femmes',
      category: 'Formations',
      date: '22-24 Avril 2026',
      description: `Dans le cadre du projet "Autonomisation socio-économique des femmes rurales dans les communes de Diacounda,Boutoupa Camaracounda et Enampore" , Erastus Group SAS a eu à accompagner 31 femmes entrepreneures en entrepreneuriat digital et marketing numérique du 22 au 24 avril 2026 à USOFORAL.
                    Cette activité visait à outiller ces braves dames à l'ère du numérique afin qu'elles puissent rendre plus visible leurs activités et d'attirer plus de clients.
                    Un grand merci à USOFORAL pour la confiance.
                    Erastus Group SAS nous vous accompagnons partout.`,
      cover: images.Autonomisation_femmes1,
      media: [
        { type: 'image', url: images.Autonomisation_femmes1 },
        { type: 'image', url: images.Autonomisation_femmes2 },
        { type: 'image', url: images.Autonomisation_femmes3 },
        { type: 'image', url: images.Autonomisation_femmes4 },
        { type: 'image', url: images.Autonomisation_femmes5 },
      ]
    },
    {
      id: 2,
      title: '1er Pique-Nique à Brin',
      category: 'Enfants',
      date: '18 Avril 2026',
      description: `l'équipe Erastus Group SAS s'est rendu à Brin pour un pique-nique avec les enfants du village de Brin.`,
      cover: images.pique_nique,
      media: [
        {
          type: 'video',
          url: video.premier_pique_nique_Brin
        },
      ]
    },
    {
      id: 3,
      title: 'Partenariat entre Erastus Group SAS et Senegel',
      category: 'Partenariats',
      date: '18 Avril 2026',
      description: `l'équipe Erastus Group SAS a reçu à keur innovation l'équipe de Senegel et de Wyze Academy dans le cadre du projet de campus numérique à Ziguinchor.
                    Cette visite entre dans le cadre du partenariat entre Erastus Group SAS et Senegel structure d'accompagnement digitale basée à Dakar qui vise à renforcer ces prestations à l'intérieur du pays.
                    Cette rencontre était l'occasion de discuter des modalités dans la mise en place du campus numérique à keur innovation avec une double certification sénégalaise et française avec le partenaire Wyze Academy.
                    Erastus Académie se former devient un plaisir.`,
      cover: images.senegel1,
      media: [
        { type: 'image', url: images.senegel1 },
        { type: 'image', url: images.senegel2 },
        { type: 'image', url: images.senegel3 },
        { type: 'image', url: images.senegel4 }
      ]
    },
    {
      id: 4,
      title: 'Diner de Gala d\'Anniversaire Agrosotech Senegal / Erastus Group SAS',
      category: 'Événements',
      date: '11 Avril 2026',
      description: `Dîner de Gala d'anniversaire des 7 ans d'Agrosotech Sénégal et d'Erastus Group SAS ✨
                    Une soirée exceptionnelle, remplie d’émotions, de fierté et de reconnaissance…
                    Le dîner de gala célébrant les 7 ans d’existence d’Agrosotech Sénégal et d’Erastus Group SAS restera gravé dans nos mémoires.
                    À travers ces images, nous revivons des moments forts : des échanges inspirants, des sourires sincères, et surtout la célébration d’un parcours marqué par le travail, l’engagement et la vision.
                    Ces 7 années sont le fruit d’un rêve devenu réalité, porté par une équipe déterminée et soutenu par des personnes extraordinaires.
                    🙏 Nous adressons nos sincères remerciements à tous nos partenaires, collaborateurs et soutiens qui ont cru en nous depuis le début. Votre confiance et votre accompagnement ont été essentiels dans cette belle aventure.
                    🚀 L’histoire continue… et le meilleur reste à venir !`,
      cover: images.gala1,
      media: [
        { type: 'image', url: images.gala1 },
        { type: 'image', url: images.gala2 },
        { type: 'image', url: images.gala3 },
        { type: 'image', url: images.gala4 },
        { type: 'image', url: images.gala5 },
        { type: 'image', url: images.gala6 },
      ]
    },
    {
      id: 5,
      title: 'Pique-Nique à la ferme pédagogique de Niaguis',
      category: 'Enfants',
      date: '07 Avril 2026',
      description: `Cette activité de partage, de découverte de la nature , de networking a permis d'immersion de nos participants pour la plupart des enfants du village d'enfants SOS de Ziguinchor de mieux connaître le métier d'agripreneurs.
                    Pour une première expérience se fut une réussite totale. Merci à nos partenaires surtout à M.Moustapha DIATTA agripreneur et directeur de la ferme pédagogique de Niaguis.`,
      cover: images.niaguis1,
      media: [
        { type: 'image', url: images.niaguis1 },
        { type: 'image', url: images.niaguis2 },
        { type: 'image', url: images.niaguis3 },
        { type: 'image', url: images.niaguis4 },
        { type: 'image', url: images.niaguis5 },
        { type: 'image', url: images.niaguis6 },
        { type: 'image', url: images.niaguis7 },
        { type: 'image', url: images.niaguis8 },
        { type: 'image', url: images.niaguis9 },
      ]
    },
    {
      id: 6,
      title: 'Semaine nationale de la jeunesse édition 2026 à Thies',
      category: 'Événements',
      date: '29 Mars - 03 Avril 2026',
      description: `Dans le cadre de la semaine nationale de la jeunesse édition 2026 à Thies, Erastus Group SAS acteur majeur de la promotion du numérique à Ziguinchor a été choisi pour accompagner et coacher l'équipe numérique régionale dans la compétition innovation numérique.
                    Sous le thème : La semaine nationale de la jeunesse au rythme de l'Olympisme, les représentants de la région à savoir Youssouf DIEDHIOU et Dado TAMEGA ont su démontré d'une expertise remarquable permettant à la région de se classer deuxième.
                    Avec la solution Ayo Dakar 2026 qui permet d'avoir des informations précises sur les JOJ avec l'intégration d'une assistante en wolof ,français et anglais,cette solution pourra être un guide pratique pour une inclusion de tous pour la réussite de cet événement.
                    Un grand merci au gouverneur de la région et mention spéciale à l'inspecteur régional de la Jeunesse M.DIBA pour la confiance.
                    Avec Erastus Group SAS la promotion du numérique notre crédo.`,
      cover: images.couverture,
      media: [
        /*{
          type: 'video',
          url: video.formation
        },*/
        { type: 'image', url: images.semaine_jeunesse1 },
        { type: 'image', url: images.couverture },
        { type: 'image', url: images.semaine_jeunesse2 },
        { type: 'image', url: images.semaine_jeunesse3 },
        
      ]
    },
    {
      id: 7,
      title: 'Formation d\'initiation au webmaster',
      category: 'Formations',
      date: '28 Mars 2026',
      description: `Dans le cadre du projet village digital du village d'enfants SOS de Dakar en partenariat avec Fondation Orange, l'équipe Erastus Group SAS à formé 21 jeunes au métier de webmaster le samedi 28 mars a l'université Tamaro TOURE.
                    Cette formation d'initiation au webmaster a permis de faire découvrir comment développer un site en no-code avec Google Site, Canva et Wix.
                    Un grand merci pour la confiance.
                    Erastus Group SAS nous vous accompagnons partout.`,
      cover: images.webmaster1,
      media: [
        { type: 'image', url: images.webmaster1 },
        { type: 'image', url: images.webmaster2 },
        { type: 'image', url: images.webmaster3 },
        { type: 'image', url: images.webmaster4 }
      ]
    },
    {
      id: 8,
      title: 'Projet Élève Entrepreneur',
      category: 'Formations',
      date: '04 Mars 2026',
      description: `Lancement du projet Élève Entrepreneur le mercredi 04 mars 2026 à keur innovation. Pour cette deuxième cohorte plus de 20 élèves ont répondu à l'appel à candidatures pour développer leurs idées de projets.
                    Durant 3 mois, ces élèves seront accompagnés par des mentors pour mieux développer leurs idées pour en faire en projet rentable.
                    Restez connecté pour la suite.`,
      cover: images.eleve_entrepreneur1,
      media: [
        { type: 'image', url: images.eleve_entrepreneur1 },
        { type: 'image', url: images.eleve_entrepreneur2 },
        { type: 'image', url: images.eleve_entrepreneur3 },
        { type: 'image', url: images.eleve_entrepreneur4 }
      ]
    },
    {
      id: 9,
      title: 'CRD de la région de Ziguinchor',
      category: 'Evenements',
      date: '03 Mars 2026',
      description: `Dans le cadre des préparatifs du défilé du 04 avril et de la semaine nationale de la jeunesse prévue à thies, Erastus Group SAS a été convié à participer au CRD de la région de Ziguinchor présidée par le gouverneur, les autorités militaires et administratives de la localité le mardi 03 mars 2026 au complexe Aubert.
                    Erastus en tant que structure numérique accompagnera le comité régional dans l'encadrement des jeunes de la délégation.`,
      cover: images.CRD_Ziguinchor1,
      media: [
        { type: 'image', url: images.CRD_Ziguinchor1 },
        { type: 'image', url: images.CRD_Ziguinchor2 },
        { type: 'image', url: images.CRD_Ziguinchor3 }
      ]
    },
    {
      id: 10,
      title: 'Projet Digital Village du village d\'enfants SOS de Dakar',
      category: 'Formations',
      date: '28 Février - 01 Mars 2026',
      description: `Dans le cadre du projet Digital Village du village d'enfants SOS de Dakar en collaboration avec la formation Orange, l'équipe de Erastus Group SAS a formé du 28 février au 01 mars 2026 15 jeunes leaders dans le domaine du numérique à savoir sur le community manager et sur la gestion de projet numérique.
                    Ces formations hautement importantes surtout à un moment où le numérique est au cœur des activités à permis d'initier pour la plupart dans ces domaines avec des outils adaptés pour leur permettre de lancer leurs activités.
                    Une très belle opportunité d'accompagner la jeunesse.`,
      cover: images.Digital_Village1,
      media: [
        { type: 'image', url: images.Digital_Village1 },
        { type: 'image', url: images.Digital_Village2 },
        { type: 'image', url: images.Digital_Village3 },
      ]
    },
    {
      id: 11,
      title: 'Accompagnement sur une meilleure utilisation de l\'intelligence artificielle',
      category: 'Formations',
      date: '21 Février 2026',
      description: `Dans le cadre de l'accompagnement sur une meilleure utilisation de l'intelligence artificielle, la jeunesse étudiante catholique de la fédération de Ziguinchor section de la Cathédrale a bénéficié d' une formation sur comment mieux utiliser l'IA pour réussir ces études.
                    Cette formation pratique a permis de faire découvrir aux jecistes les outils comme Chatgpt, Gamma et Gemini.
                    Le projet Samal sa bop vous accompagne a une meilleure utilisation du numérique.`,
      cover: images.ia1,
      media: [
        { type: 'image', url: images.ia1 },
        { type: 'image', url: images.ia2 },
        { type: 'image', url: images.ia3 },
      ]
    },
    {
      id: 12,
      title: 'Journée portes ouvertes',
      category: 'Formations',
      date: '07 Février 2026',
      description: `Le samedi 07 février 2026, la team Agrosotech Sénégal en collaboration avec Erastus Group SAS ont organisé une journée portes ouvertes à Keur Innovation siège des startups.
                    Cette activité a été l'occasion de présenter les activités et offres de services de la structure.
                    Un grand moment de communion. Un grand merci à nos invités et à bientôt pour la  prochaine édition.`,
      cover: images.journee_07_fev_1,
      media: [
        { type: 'image', url: images.journee_07_fev_1 },
        { type: 'image', url: images.journee_07_fev_2 },
        { type: 'image', url: images.journee_07_fev_3 },
        { type: 'image', url: images.journee_07_fev_4 },
        { type: 'image', url: images.journee_07_fev_5 },
        { type: 'image', url: images.journee_07_fev_6 }
      ]
    },
    {
      id: 13,
      title: 'L\'utilisation des réseaux sociaux précisément avec l\'utilisation de l\'intelligence artificielle',
      category: 'Formations',
      date: '24 Janvier 2026',
      description: `Dans le cadre du projet "Samal Sa Bop", l'équipe de projet a formé les membres de la Jeunesse Etudiante Catholique Fédération de Ziguinchor,section de Tilène sur l'utilisation des réseaux sociaux précisément avec l'utilisation de l'intelligence artificielle avec comme thème " L'IA éthique ".
                    Cette formation qui marque le début du projet a suscité l'intérêt des jécistes et constitut le premier pas d'une série de renforcement de capacités sur une utilisation rationnelle de la technologie et d'internet pour une E-réputation plus responsable.`,
      cover: images.jeunesse_catholique1,
      media: [
        { type: 'image', url: images.jeunesse_catholique1 },
        { type: 'image', url: images.jeunesse_catholique2 },
        { type: 'image', url: images.jeunesse_catholique3 },
        { type: 'image', url: images.jeunesse_catholique4 },
        { type: 'image', url: images.jeunesse_catholique5 }
      ]
    },
    {
      id: 14,
      title: '1er Samedi numérique de l\'année',
      category: 'Formations',
      date: '17 Janvier 2026',
      description: `Le samedi 17 janvier 2026 , marque le 1er Samedi numérique de l'année.Au  programme nos participants ont découvert l'outil Capcut pour la réalisation de vidéos.
                    Une belle expérience pour eux désormais ils sont à mesure de concevoir des contenus attrayants.
                    RV en février pour deux séances.`,
      cover: images.samedi_numerique1,
      media: [
        { type: 'image', url: images.samedi_numerique1 },
        { type: 'image', url: images.samedi_numerique2 },
        { type: 'image', url: images.samedi_numerique3 },
        { type: 'image', url: images.samedi_numerique4 },
      ]
    },
    {
      id: 15,
      title: 'Bonne et Heureuse Année 2026',
      category: 'Evenements',
      date: '24 Decembre 2026',
      description: `La team Erastus Group vous souhaite une bonne et heureuse année 2026.`,
      cover: images.image_anne_2026,
      media: [
        {
          type: 'video',
          url: video.bonne_annee_2026
        },
      ]
    },
    {
      id: 16,
      title: 'Joyeux Noël',
      category: 'Evenements',
      date: '24 Decembre 2025',
      description: `Joyeux Noël à tous avec la team Erastus Group `,
      cover: images.erastus,
      media: [
        { type: 'image', url: images.jeunesse_catholique1 },
        {
          type: 'video',
          url: video.joyeux_noel
        },
      ]
    },
    {
      id: 17,
      title: 'Visite de courtoisie des élèves de l\'école Prosper Doss de tilene',
      category: 'Partenariats',
      date: '12 Novembre 2025',
      description: `Visite de courtoisie des élèves de l'école Prosper Doss de tilene à keur innovation.
                    Cette visite est l'occasion de présenter nos startups Erastus Group et Agrosotech Sénégal avec nos offres de services et notre fablab.
                    le travail continue bientôt avec le projet Tech for childs et les clubs codes.`,
      cover: images.prosper_doss1,
      media: [
        { type: 'image', url: images.prosper_doss1 },
        { type: 'image', url: images.prosper_doss2 },
        { type: 'image', url: images.prosper_doss3 },
        { type: 'image', url: images.prosper_doss4 },
        { type: 'image', url: images.prosper_doss5 },
        { type: 'image', url: images.prosper_doss6 },
      ]
    },
    {
      id: 18,
      title: 'Initiation en Scratch',
      category: 'Formations',
      date: '25-26 Octobre 2025',
      description: `En collaboration avec le Bureau Conseil des ados d'oussouye, l'équipe de Erastus Group a initié 26 filles du département du 25 au 26 octobre 2025 en scratch.
                    Cette formation pratique entrant dans le cadre de renforcer la capacité des jeunes dans les sciences a permis de mettre les bases en programmation.
                    un grand merci à la directrice du CDEPS d'oussouye et surtout à l'inspecteur de la jeunesse venu présider la cérémonie de clôture.
                    Erastus Group le service avant tout.`,
      cover: images.scratch1,
      media: [
        { type: 'image', url: images.scratch1 },
        { type: 'image', url: images.scratch2 },
        { type: 'image', url: images.scratch3 },
        { type: 'image', url: images.scratch4 },
        { type: 'image', url: images.scratch5 },
        { type: 'image', url: images.scratch6 },
      ]
    },
    {
      id: 19,
      title: 'Les outils du marketing digital - Oussouye',
      category: 'Formations',
      date: '23-24 Octobre 2025',
      description: `Erastus Group a accompagné le CDEPS d'oussouye à travers le Centre ADO en formant 20 jeunes du département du 23 au 24 octobre sur les outils du marketing digital.
                    Durant 2 jours, nos apprenants sont initiés sur l'outil Canva et Chatgpt avec la confection de logos et d'affiches et avec Inshot pour la réalisation de vidéos.
                    Cette formation a permis de faire découvrir à ces jeunes les opportunités qu'offrent le digital dans la création d'emploi et de richesse dans leurs localités.
                    Erastus Group le service avant tout.`,
      cover: images.marketing_digital_oussouye1,
      media: [
        { type: 'image', url: images.marketing_digital_oussouye1 },
        { type: 'image', url: images.marketing_digital_oussouye2 },
        { type: 'image', url: images.marketing_digital_oussouye3 },
        { type: 'image', url: images.marketing_digital_oussouye4 },
      ]
    },
    {
      id: 20,
      title: 'Journée portes ouvertes 17 Septembre 2025',
      category: 'Evenemwents',
      date: '17 Septembre 2025',
      description: `Le mercredi 17 septembre 2025, Erastus Group a organisé une journée portes ouvertes pour présenter ces différentes offres de formations et d'accompagnement pour les jeunes,femmes et structures.
                    Cette journée de partages et d'échanges a permis aux participants de mieux connaître la structure et les opportunités.
                    Un grand merci à tous.
                    Les inscriptions pour la nouvelle cohorte du programme kaay tagatou sont en cours.`,
      cover: images.journee_17_sept_1,
      media: [
        { type: 'image', url: images.journee_17_sept_1 },
        { type: 'image', url: images.journee_17_sept_2 },
        { type: 'image', url: images.journee_17_sept_3 },
        { type: 'image', url: images.journee_17_sept_4 },
          { type: 'image', url: images.journee_17_sept_5 },
          { type: 'image', url: images.journee_17_sept_6 },
      ]
    },
    {
      id: 21,
      title: 'Formation du personnel en planification et sur  l\'archivage',
      category: 'Formations',
      date: '10 Septembre 2025',
      description: `Pour être efficace dans le cadre opérationnel , la formation du personnel est obligatoire pour atteindre les objectifs dans une entreprise.
                    C'est dans ce cadre qu'une formation en planification et sur  l'archivage est organisé le mercredi 10 septembre 2025 afin d'outiller l'équipe sur les meilleures pratiques.
                    Une équipe bien formée est la clé du succès.`,
      cover: images.formation_personnel1,
      media: [
        { type: 'image', url: images.formation_personnel1 },
        { type: 'image', url: images.formation_personnel2 },
        { type: 'image', url: images.formation_personnel3 },
        { type: 'image', url: images.formation_personnel4 },
      ]
    },
    {
      id: 22,
      title: 'Groupement de femmes entrepreneures catholiques',
      category: 'Formations',
      date: '25-27 Août 2025',
      description: `L'équipe de Erastus Group a forme un groupement de femmes entrepreneures catholiques sur les outils digitaux ( Facebook, whatsapp business, inshot, linkedlin).
                    Cette formation fait suite à celle organisée lors du forum de l'entrepreneuriat catholique afin d'accompagner les groupements de femmes à mieux rendre visible leurs activités.
                    Un grand merci pour la confiance.
                    Vous êtes une structure d'accompagnement faites confiance à Erastus Group pour une meilleure formation.`,
      cover: images.groupement_femme1,
      media: [
        { type: 'image', url: images.groupement_femme1 },
        { type: 'image', url: images.groupement_femme2 },
        { type: 'image', url: images.groupement_femme3 },
        { type: 'image', url: images.groupement_femme4 },
      ]
    },
    {
      id: 23,
      title: 'Formation en e-commerce sur Alibaba',
      category: 'Formations',
      date: '04-12 Août 2025',
      description: `Formation en e-commerce sur Alibaba le lundi 04 au 12 août 2025 à keur innovation avec M.DJIBA formateur en e-commerce.
                    Durant 8 jours nos apprenants sont outillés sur comment acheter sur cette plateforme leader dans le e-commerce mondial.
                    Un grand merci à notre formateur et à nos apprenants pour la confiance.
                    RV pour la prochaine session.`,
      cover: images.formation_alibaba1,
      media: [
        { type: 'image', url: images.formation_alibaba1 },
        { type: 'image', url: images.formation_alibaba2 },
        { type: 'image', url: images.formation_alibaba3 },
        { type: 'image', url: images.formation_alibaba4 },
        { type: 'image', url: images.formation_alibaba5 },
      ]
    },
    {
      id: 24,
      title: '1ere édition du forum de l\'entrepreneuriat',
      category: 'Evenements',
      date: '18-20 Juillet 2025',
      description: `1ere édition du forum de l'entrepreneuriat du 18 au 20 juillet 2025 à la Cathédrale de Ziguinchor sous le haut patronage de son Excellence Monseigneur Jean Baptiste Valter MANGA.
                    Cette activité de promotion de l'entrepreneuriat dans le diocèse avait comme objectif de mettre en exergue les potentialités entrepreneuriales de la localité.
                    Erastus Group comme co-organisateur de cette activité à montrer ces offres de services au profits de la population Casamançaise.
                    A bientôt pour la prochaine édition.`,
      cover: images.forum_entreprenariat25_1,
      media: [
        { type: 'image', url: images.forum_entreprenariat25_1 },
        { type: 'image', url: images.forum_entreprenariat25_2 },
        { type: 'image', url: images.forum_entreprenariat25_3 },
        { type: 'image', url: images.forum_entreprenariat25_4 },
        { type: 'image', url: images.forum_entreprenariat25_5 },
        { type: 'image', url: images.forum_entreprenariat25_6 },
        { type: 'image', url: images.forum_entreprenariat25_7 },
        { type: 'image', url: images.forum_entreprenariat25_8 },
        { type: 'image', url: images.forum_entreprenariat25_9 },
        { type: 'image', url: images.forum_entreprenariat25_10 },
      ]
    },
    {
      id: 25,
      title: 'Impact social avec le Business Model Social',
      category: 'Formations',
      date: '26 Mai 2025',
      description: `Dans le cadre de la divulgation de l'entrepreneuriat social au Sénégal, Enactus Sénégal a organisé une formation le lundi 26 mai à Ziguinchor en collaboration avec Erastus Group.
                    Cette formation riche a porté sur la présentation de l'organisation qui accompagne les étudiants dans le domaine de l'impact social avec le Business Model Social selon le modèle d'Enactus.
                    Un grand merci à Anna de l'équipe d'Enactus Sénégal et Thiara la grande coache pour la mise en relation.`,
      cover: images.formation_impact_social1,
      media: [
        { type: 'image', url: images.formation_impact_social1 },
        { type: 'image', url: images.formation_impact_social2 },
        { type: 'image', url: images.formation_impact_social3 },
        { type: 'image', url: images.formation_impact_social4 },
      ]
    },
    {
      id: 26,
      title: 'Séance de Coaching avec Madame Thiara LOUM',
      category: 'Formations',
      date: '24 Mai 2025',
      description: `Un plaisir d'avoir reçu madame thiara LOUM entrepreneure et coach en entrepreneuriat venu en Ziguinchor dans le cadre de ces activités professionnelles à profiter pour participer à notre séance de coaching du samedi 24 mai avec nos élèves entrepreneurs.
                    Avec son parcours riche et très inspirant, Mme Loum a su motiver nos jeunes entrepreneurs à ne rien lâcher mais surtout d'aller dans l'innovation.
                    Nos remerciements à cette grande dame qui ne cesse d'accompagner la l'entrepreneuriat en Casamance a travers  Group.
                    Eleve entrepreneur " accompagner une nouvelle génération d'entrepreneurs en Casamance ".`,
      cover: images.coaching_Mme_Loum_1,
      media: [
        { type: 'image', url: images.coaching_Mme_Loum_1 },
        { type: 'image', url: images.coaching_Mme_Loum_2 },
        { type: 'image', url: images.coaching_Mme_Loum_3 },
      ]
    },
    {
      id: 27,
      title: 'Formation sur le design',
      category: 'Formations',
      date: '05-06 Mai 2025',
      description: `Erastus Group en partenariat avec le bureau des étudiants de l'eno de Ziguinchor avec la filière communication digitale a organisé une formation sur le design les 5 et 6 mai à keur innovation.
                    Ces formations s'inscrivent dans le cadre du partenariat entre les deux structures qui visent à accompagner les étudiants de le filière dans la formation et l'accompagnement dans l'insertion et entrepreneurial.
                    Durant deux jours les étudiants sont formés par nos brillants formateurs à savoir Louis Sagna en Canvas et Gérard Wilfried Mendes en photoshop.
                    Un grand merci au président de la filiere William Manga pour la collaboration.
                    La prochaine session du programme kaay tagatou démarre le 12 mai les inscriptions sont en cours.`,
      cover: images.formation_design_eno_comm_1,
      media: [
        { type: 'image', url: images.formation_design_eno_comm_1 },
        { type: 'image', url: images.formation_design_eno_comm_2 },
        { type: 'image', url: images.formation_design_eno_comm_3 },
        { type: 'image', url: images.formation_design_eno_comm_4 },
        { type: 'image', url: images.formation_design_eno_comm_5 },
        { type: 'image', url: images.formation_design_eno_comm_6 },
        { type: 'image', url: images.formation_design_eno_comm_7 },
        { type: 'image', url: images.formation_design_eno_comm_8 },
      ]
    },
    {
      id: 28,
      title: 'Session Link Up Africa',
      category: 'Evenements',
      date: '28-30 Avril 2025',
      description: `Erastus Group a participé à la Session Link Up Africa,organisée par L'L'Union européenne au Sénégal, AMCI( Agence marocaine de Coopération Internationale)et Enabel en partenariat avec CTIC Dakar/ Incubateur des TICS du 28 au 30 avril 2025.
                    Durant trois jours de formations  intenses en  renforcement de capacités, d'échanges de bonnes pratiques et de collaboration entre les structures d'accompagnement et les experts du Maroc et du Sénégal dans le domaine de l'incubation de startups et des TPME.
                    Cette session animée par M. Naoufal CHAMA CEO de Digimind Maroc et fondateur et Président de Startup Maroc.
                    Un grand merci aux organisateurs pour cette opportunité qui permettra à notre incubateur d'être plus apte à accompagner les porteurs de projets de la zone sud et partout au Sénégal.`,
      cover: images.link_up_africa_1,
      media: [
        { type: 'image', url: images.link_up_africa_1 },
        { type: 'image', url: images.link_up_africa_2 },
        { type: 'image', url: images.link_up_africa_3 },
        { type: 'image', url: images.link_up_africa_4 },
        { type: 'image', url: images.link_up_africa_5 },
        { type: 'image', url: images.link_up_africa_6 },
        { type: 'image', url: images.link_up_africa_7 },
      ]
    },
    {
      id: 29,
      title: 'Lancement du premier club code de la commune de Ziguinchor',
      category: 'Evenements',
      date: '28 Avril 2025',
      description: `Dans le cadre du projet tech for childs en partenariat avec Ktech Solutions, nous avons lancé le premier club code de la commune de Ziguinchor.
                    Ce club est destiné à accompagner les élèves du collège et lycée de Ziguinchor dans les domaines de scratch, robotique et IA.`,
      cover: images.club_code_1,
      media: [
        { type: 'image', url: images.club_code_1 },
        { type: 'image', url: images.club_code_2 },
        { type: 'image', url: images.club_code_3 },
        { type: 'image', url: images.club_code_4 },
        { type: 'image', url: images.club_code_5 },
        { type: 'image', url: images.club_code_6 },
        { type: 'image', url: images.club_code_7 },
      ]
    },
    {
      id: 30,
      title: 'Projet "éleve entrepreneur"',
      category: 'Fromations',
      date: '24 Avril 2025',
      description: `Nos élèvepreneurs poursuivent leurs formations en entrepreneuriat , lancé depuis le mois d'avril ils travaillent dur  sur leurs idées afin de mieux comprendre leurs environnements.
                    Restez connecté pour la présentation de nos élèvespreneurs.`,
      cover: images.eleve_entrepreneur_2025_1,
      media: [
        { type: 'image', url: images.eleve_entrepreneur_2025_1 },
        { type: 'image', url: images.eleve_entrepreneur_2025_2 },
        { type: 'image', url: images.eleve_entrepreneur_2025_3 },
        { type: 'image', url: images.eleve_entrepreneur_2025_4 },
      ]
    },
    {
      id: 31,
      title: 'Workshop Numérique',
      category: 'Fromations',
      date: '16-17 Avril 2025',
      description: `Erastus Group en partenariat avec Ktech solutions ont organisé un workshop numérique au profit des jeunes de Ziguinchor sur python mais aussi l'intégration de l'intelligence artificielle dans une application web ou mobile.
                    Cette formation constitue le premier pas du partenariat entre Erastus et Ktech Solutions pour accompagner la population de Ziguinchor dans le domaine du numérique.
                    Merci aux participants et à bientôt pour d'autres activités.`,
      cover: images.worshop_numerique_1,
      media: [
        { type: 'image', url: images.worshop_numerique_1 },
        { type: 'image', url: images.worshop_numerique_2 },
        { type: 'image', url: images.worshop_numerique_3 },
        { type: 'image', url: images.worshop_numerique_4 },
        { type: 'image', url: images.worshop_numerique_5 },
        { type: 'image', url: images.worshop_numerique_6 },
        { type: 'image', url: images.worshop_numerique_7 },
      ]
    },
    {
      id: 32,
      title: 'Visite de la GIZ',
      category: 'Partenariats',
      date: '15 Avril 2025',
      description: `Dans le cadre des préparatifs de Casamance innovation tech 2025, Erastus Group a reçu le mardi 15 avril 2025 une équipe de la GIZ en visite à Ziguinchor pour voir les possibilités de partenariat mais aussi une synergie d'actions pour une orientation professionnelle des jeunes de Ziguinchor.`,
      cover: images.visite_giz_1,
      media: [
        { type: 'image', url: images.visite_giz_1 },
        { type: 'image', url: images.visite_giz_2 },
        { type: 'image', url: images.visite_giz_3 },
        { type: 'image', url: images.visite_giz_4 },
      ]
    },
    {
      id: 33,
      title: 'Projet tech for childs - Initiation à la bande dessinée et en Pilotage de drone',
      category: 'Enfants',
      date: '15 Avril 2025',
      description: `Dans le cadre du projet tech for childs , l'équipe de Erastus Group a formé les enfants du village d'enfants SOS de Ziguinchor durant 5 jours sur l'initiation à la bande dessinée mais aussi en pilotage de drone.
                    Ce projet vise à former une nouvelle génération de jeunes centrée sur l'innovation. Un grand merci à notre partenaire le village d'enfants SOS pour la confiance. Le projet continue avec d'autres programmes dans le département de ziguinchor.`,
      cover: images.bd_drone_child_1,
      media: [
        { type: 'image', url: images.bd_drone_child_1 },
        { type: 'image', url: images.bd_drone_child_2 },
        { type: 'image', url: images.bd_drone_child_3 },
        { type: 'image', url: images.bd_drone_child_4 },
        { type: 'image', url: images.bd_drone_child_5 },
        { type: 'image', url: images.bd_drone_child_6 },
        { type: 'image', url: images.bd_drone_child_7 },
      ]
    },
    {
      id: 34,
      title: 'Le début du projet "éleve entrepreneur"',
      category: 'Formations',
      date: '02 Avril 2025',
      description: `Le mercredi 02 avril 2025 marque le début du projet "éleve entrepreneur" avec des candidats prêts à l'action pour développer des projets innovants et très créatifs.
                    Au programme du premier jour initiation à l'entrepreneuriat.
                    Durant 3 mois nous apprentis entrepreneurs seront formés dans les domaines de la gestion, du marketing, commerciale entre autres pour mieux assoir leurs idées de projets.
                    Eleve entrepreneur " préparons les entrepreneurs de demain"`,
      cover: images.debut_eleve_entrep_1,
      media: [
        { type: 'image', url: images.debut_eleve_entrep_1 },
        { type: 'image', url: images.debut_eleve_entrep_2 },
        { type: 'image', url: images.debut_eleve_entrep_3 },
      ]
    },
    {
      id: 35,
      title: 'Reception des candidats du projet "élève entrepreneur "',
      category: 'Formations',
      date: '26 Mars 2025',
      description: `Le mercredi 26 mars, l'équipe de @Erastus Group a reçu les candidats du projet "élève entrepreneur " des élèves qui avec des idées brillantes et innovantes souhaitent participer au développement local.
                    Cette étape de sélection constitue la première phase du projet avant le début des activités en Avril pour une durée de 3 mois. 
                    Restez connecté.`,
      cover: images.reception_eleve_entrep_1,
      media: [
        { type: 'image', url: images.reception_eleve_entrep_1 },
        { type: 'image', url: images.reception_eleve_entrep_2 },
        { type: 'image', url: images.reception_eleve_entrep_3 },
        { type: 'image', url: images.reception_eleve_entrep_4 },
        { type: 'image', url: images.reception_eleve_entrep_5 },
        { type: 'image', url: images.reception_eleve_entrep_6 },
        { type: 'image', url: images.reception_eleve_entrep_7 },
      ]
    },
    {
      id: 36,
      title: 'Projet tech for childs - Technique de Plaidoirie',
      category: 'Enfants',
      date: '16 Mars 2025',
      description: `Le samedi 16 mars 2025, deuxième session de formation pour les enfants du village SOS de Ziguinchor sur le technique de plaidoirie. 
                    Cette formation est la suite logique de la première sur la " Participation active des enfants" une formation co-animee avec M.Simon GOMIS consultant indépendant.
                    Un grand merci au village d'enfants SOS pour la confiance.`,
      cover: images.plaidoirie_enfants_1,
      media: [
        { type: 'image', url: images.plaidoirie_enfants_1 },
        { type: 'image', url: images.plaidoirie_enfants_2 },
        { type: 'image', url: images.plaidoirie_enfants_3 },
        { type: 'image', url: images.plaidoirie_enfants_4 },
        { type: 'image', url: images.plaidoirie_enfants_5 },
        { type: 'image', url: images.plaidoirie_enfants_6 },
        { type: 'image', url: images.plaidoirie_enfants_7 },
      ]
    },
    {
      id: 37,
      title: 'Projet tech for childs - Participation active des enfants',
      category: 'Enfants',
      date: '08 Mars 2025',
      description: `Le samedi 08 mars Erastus Group a formé 20 enfants et accompagnatrices des enfants SOS de Ziguinchor sur la " Participation active des enfants" une formation co-animee avec M.Simon GOMIS consultant indépendant avec comme finalité de permettre à ces enfants d'être plus apte à s'imposer dans la vie avec le développement personnel.`,
      cover: images.participation_active_1,
      media: [
        { type: 'image', url: images.participation_active_1 },
        { type: 'image', url: images.participation_active_2 },
        { type: 'image', url: images.participation_active_3 },
        { type: 'image', url: images.participation_active_4 },
        { type: 'image', url: images.participation_active_5 },
        { type: 'image', url: images.participation_active_6 },
      ]
    },
    {
      id: 38,
      title: 'Masterclass',
      category: 'Formations',
      date: '22 Février 2025',
      description: `Le samedi 22 février 2025 à l'hôtel kadiandoumagne de Ziguinchor, l'association AZIC et Erastus Group ont organisé le premier masterclass sur le thème "
                    Réfléchissez et devenez riche "  les 10 secrets de la réussite selon les principes Napoléon Hill.
                    Cette formation de haute facture animée par M.Bachir DIEDHIOU président de l'association AZIC, formateur et consultant en IT avait pour but d'accompagner les entrepreneurs et aspirants sur l'esprit d'entreprendre selon Napeleon Hill un des grands penseurs de l'entrepreneuriat.
                    Plus de 50 entrepreneurs ont répondu présents pour cette première acte et rendez vous est pris pour la deuxième.`,
      cover: images.matserclass1,
      media: [
        { type: 'image', url: images.matserclass1 },
        { type: 'image', url: images.matserclass2 },
        { type: 'image', url: images.matserclass3 },
        { type: 'image', url: images.matserclass4 },
        { type: 'image', url: images.matserclass5 },
        { type: 'image', url: images.matserclass6 },
        { type: 'image', url: images.matserclass7 },
        { type: 'image', url: images.matserclass8 },
      ]
    },
    {
      id: 39,
      title: 'Week-end Numérique du 22 février',
      category: 'Formations',
      date: '22 Février 2025',
      description: `🎨✨ Retour sur le Week-end Numérique du 22 février : à la découverte d’Illustrator ! ✨🎨
                    Un week-end dédié à la créativité ! Entre initiation, perfectionnement et astuces de pros, les participants ont pu explorer tout le potentiel de cet outil incontournable du design graphique. 🖌️💻
                    Merci à tous pour votre énergie et votre engagement ! 🚀 Continuez à pratiquer, à expérimenter et à repousser vos limites créatives.`,
      cover: images.week_end_num_22_fev_1,
      media: [
        { type: 'image', url: images.week_end_num_22_fev_1 },
        { type: 'image', url: images.week_end_num_22_fev_2 },
        { type: 'image', url: images.week_end_num_22_fev_3 },
        { type: 'image', url: images.week_end_num_22_fev_4 },
        { type: 'video', url: video.week_end_num_22_fev },
      ]
    },
    {
      id: 40,
      title: 'Journée porte ouverte Janvier 2025',
      category: 'Formations',
      date: '31 Janvier 2025',
      description: `Ce fut une journée mémorable lors de notre porte ouverte, où nous avons eu le plaisir de rencontrer de futurs étudiants et de partager nos programmes de formation 🎓. Un moment fort a été la remise des attestations de formation à nos étudiants, symbolisant leur engagement et leurs réussites 🏅. Nous sommes fiers de les accompagner dans leur parcours et de les voir progresser avec enthousiasme 💪. Merci à tous ceux qui ont participé et contribué à la réussite de cet événement 🙏.`,
      cover: images.journee_31_jan_1,
      media: [
        { type: 'image', url: images.journee_31_jan_1 },
        { type: 'image', url: images.journee_31_jan_2 },
        { type: 'image', url: images.journee_31_jan_3 },
        { type: 'image', url: images.journee_31_jan_4 },
        { type: 'image', url: images.journee_31_jan_5 },
        { type: 'image', url: images.journee_31_jan_6 },
      ]
    },
    {
      id: 41,
      title: 'Visite à Univers Casa Bio et à Expresso',
      category: 'Formations',
      date: '27-28 Janvier 2025',
      description: `Retour en images sur nos visites d’entreprises ! 📸
                    Dans le cadre du programme de formation Kaay Tagatu, Erastus a organisé deux visites enrichissantes pour nos étudiants :
                    📍 Le 27 janvier 2025 à Univers Casa Bio – Une immersion au cœur de la transformation du charbon écologique, où nous avons découvert des techniques innovantes et durables pour une énergie plus respectueuse de l’environnement.
                    📍 Le 28 janvier 2025 à Expresso – Une exploration du secteur des télécommunications, avec des échanges passionnants sur les métiers, les défis technologiques et les opportunités du domaine.
                    Ces visites ont permis aux étudiants d’élargir leurs perspectives professionnelles, de poser leurs questions directement aux experts et de mieux comprendre les réalités du monde du travail.
                    Merci à Casa Bio et Expresso pour leur accueil, et bravo à tous les participants pour leur engagement ! 🎓🚀`,
      cover: images.visite_casa_bio_expresso_1,
      media: [
        { type: 'image', url: images.visite_casa_bio_expresso_1 },
        { type: 'image', url: images.visite_casa_bio_expresso_2 },
        { type: 'image', url: images.visite_casa_bio_expresso_3 },
        { type: 'image', url: images.visite_casa_bio_expresso_4 },
        { type: 'image', url: images.visite_casa_bio_expresso_5 },
        { type: 'image', url: images.visite_casa_bio_expresso_6 },
        { type: 'image', url: images.visite_casa_bio_expresso_7 },
        { type: 'image', url: images.visite_casa_bio_expresso_8 },
      ]
    },
    {
      id: 42,
      title: 'Week-End Numerique du 25 janvier 2025',
      category: 'Formations',
      date: '25 janvier 2025',
      description: `Le samedi 25 janvier 2025,  nous avons organisé le premier samedi numérique sur le thème : développer ces compétences avec canvas.
                    Outil indispensable de nos jours, nos participants ont appris comment faire des affiches, montage vidéo, CV, rapports, bannières ... 
                    Un grand merci à nos participants.
                    RV en février pour la prochaine édition.`,
      cover: images.week_end_num_25_janv_1,
      media: [
        { type: 'image', url: images.week_end_num_25_janv_1 },
        { type: 'image', url: images.week_end_num_25_janv_2 },
        { type: 'image', url: images.week_end_num_25_janv_3 },
        { type: 'image', url: images.week_end_num_25_janv_4 },
        { type: 'image', url: images.week_end_num_25_janv_5 },
        { type: 'image', url: images.week_end_num_25_janv_6 },
      ]
    },
    {
      id: 43,
      title: 'Visite de l\'équipe de Orange Corners Senegal',
      category: 'Partenariats',
      date: '17 Décembre 2024',
      description: `Dans le cadre de leur tournée dans la zone pour le lancement prochain d'un programme d'incubation à Ziguinchor, nous avons reçu le mardi 17 décembre  à keur innovation, l'équipe de Orange Corners Senegal. 
                    Cette visite s'inscrit dans le cadre de rencontrer les acteurs de l'écosystème entrepreneurial du sud afin de voir les opportunités et niches pour les  champions locaux.
                    Des échanges riches qui ont permis de présenter les différents programmes des deux entités en faveur des jeunes et femmes.`,
      cover: images.O_corner_sen_1,
      media: [
        { type: 'image', url: images.O_corner_sen_1 },
        { type: 'image', url: images.O_corner_sen_2 },
        { type: 'image', url: images.O_corner_sen_3 },
        { type: 'image', url: images.O_corner_sen_4 },
      ]
    },
  ];
  const filteredAlbums =
    activeCategory === 'Tous'
      ? albums
      : albums.filter((a) => a.category === activeCategory);

  const stats = [
    { icon: ImageIcon, value: '100+', label: 'Photos' },
    { icon: Calendar, value: '50+', label: 'Événements' },
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Handshake, value: '10+', label: 'Partenaires' }
  ];

  const nextMedia = () => {
    if (!selectedAlbum) return;
    setSelectedIndex((prev) =>
      prev === selectedAlbum.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    if (!selectedAlbum) return;
    setSelectedIndex((prev) =>
      prev === 0 ? selectedAlbum.media.length - 1 : prev - 1
    );
  };

  const currentMedia = selectedAlbum?.media?.[selectedIndex];

  // swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) nextMedia();
    if (distance < -minSwipeDistance) prevMedia();
  };

  // clavier ← →
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedAlbum) return;
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
      if (e.key === 'Escape') setSelectedAlbum(null);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedAlbum]);

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="py-20 text-center bg-gradient-to-br from-[#0A2540] to-[#1e3a5f] text-white">
        <h1 className="text-5xl font-bold mb-4">Médiathèque</h1>
        <p className="text-gray-300">Photos & vidéos de nos activités</p>
      </section>

      {/* STATS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <s.icon className="mx-auto text-[#F59E0B]" />
              <p className="font-bold text-xl">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER */}
      <div className="flex justify-center gap-3 my-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === cat
                ? 'bg-[#F59E0B] text-white'
                : 'bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => {
                setSelectedAlbum(album);
                setSelectedIndex(0);
              }}
              className="cursor-pointer group relative overflow-hidden rounded-xl"
            >
              <img
                src={album.cover}
                className="w-full h-64 object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold">{album.title}</p>
                  <p className="text-sm">{album.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between py-6">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedAlbum(null)}
            className="absolute top-5 right-5 text-white z-50"
          >
            <X size={30} />
          </button>

          {/* TOP */}
          <div className="text-center text-white">
            <h3 className="text-xl font-bold">
              {selectedAlbum.title} 
            </h3>
            <p className="text-sm text-gray-400">
              {selectedAlbum.date} - {selectedIndex + 1} / {selectedAlbum.media.length}
            </p>
          </div>

          {/* MEDIA */}
          <div
            className="w-full max-w-5xl mx-auto flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {currentMedia?.type === 'image' ? (
              <img
                src={currentMedia.url}
                className="w-full max-h-[50vh] object-contain rounded-xl"
              />
            ) : (
              <video
                key={currentMedia.url}
                src={currentMedia.url}
                controls
                autoPlay
                muted
                playsInline
                className="w-full max-h-[50vh] object-contain rounded-xl"
              />
            )}

            <button onClick={prevMedia} className="absolute left-5 text-white">
              <ChevronLeft size={40} />
            </button>

            <button onClick={nextMedia} className="absolute right-5 text-white">
              <ChevronRight size={40} />
            </button>
          </div>

          {/* BOTTOM */}
          <div className="text-center text-white px-4 max-w-9xl mx-auto">
            <p className="text-gray-300">{selectedAlbum.description}</p>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto mt-6 justify-center">
              {selectedAlbum.media.map((item: MediaItem, i: number) => (
                <div
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-20 h-14 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    i === selectedIndex
                      ? 'border-[#F59E0B]'
                      : 'border-transparent'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img className="w-full h-full object-cover" src={item.url} />
                  ) : (
                    <div className="relative w-full h-full bg-black">
                      <video className="w-full h-full object-cover" src={item.url} />
                      <Play className="absolute inset-0 m-auto text-white" size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NEWSLETTERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Newsletters
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Newsletter Janvier 2025', file: fichiers.newsletter_janvier_2025 },
              { title: 'Newsletter Fevrier et Mars 2025', file: fichiers.newsletter_fevrier_mars_2025 },
              { title: 'Newsletter Avril, Mai et Juin 2025', file: fichiers.newsletter_avril_mai_juin_2025 },
              { title: 'Newsletter Juillet 2025', file: fichiers.newsletter_juillet_2025 }
            ].map((doc, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold">{doc.title}</h3>
                <a
                  href={doc.file}
                  target="_blank"
                  className="mt-4 block bg-[#F59E0B] text-white px-4 py-2 rounded text-center"
                >
                  Ouvrir PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}