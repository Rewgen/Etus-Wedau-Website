/* =========================================================================
   ETuS Wedau 1929 e.V. – zentrale Inhaltsdaten
   Alle Abteilungen, Trainingszeiten, Ansprechpartner, News und Downloads
   werden hier gepflegt und von allen Seiten (Trainingsfinder, Suche,
   Abfahrtstafel, Abteilungsseiten) gemeinsam genutzt.
   Inhalte übernommen von etus-wedau.de (Stand November 2026).
   ========================================================================= */

const UP = 'https://etus-wedau.de/wp-content/uploads/';

const CLUB = {
  name: 'ETuS Wedau 1929 e.V.',
  longName: 'Eisenbahner Turn- und Sportverein Wedau 1929 e.V.',
  street: 'Untere Masurenallee 331',
  city: '47279 Duisburg-Wedau',
  phone: '0203 72 09 86',
  phoneHref: 'tel:+49203720986',
  email: 'info@etus-wedau.de',
  instagram: 'https://www.instagram.com/explore/locations/277823266308450/eisenbahn-sportverein-wedau/',
  youtube: 'DAPF5qZjDuE',
  register: 'Amtsgericht Duisburg, VR 1345',
  bank: { name: 'Sparda-Bank West', iban: 'DE52 3606 0591 0000 5042 25', bic: 'GENODED1SPE' },
  mapQuery: 'Untere Masurenallee 331, 47279 Duisburg',
};

/* ---------- Sportstätten ---------- */
const VENUES = {
  anlage: { name: 'Vereinsanlage ETuS Wedau', address: 'Untere Masurenallee 331, 47279 Duisburg', note: 'Halle, Rasenplatz, Tennisplätze, Schießstand, Bogenplatz' },
  halle: { name: 'ETuS-Halle (Vereinsanlage)', address: 'Untere Masurenallee 331, 47279 Duisburg' },
  b3: { name: 'B3 · Sekundarschule am Biegerpark', address: 'Am Ziegelkamp 7, 47259 Duisburg' },
  b4: { name: 'B4 · Berthold-Brecht-Berufskolleg', address: 'Am Ziegelkamp 28, 47259 Duisburg' },
  gesamtschule: { name: 'Gesamtschule Duisburg Süd', address: 'Großenbaumer Allee 168, 47269 Duisburg' },
  ggs: { name: 'GGS Am See', address: 'Am See 22, 47279 Duisburg' },
  ziegelkamp: { name: 'Sportanlage Am Ziegelkamp 13 (Bungalow)', address: 'Am Ziegelkamp 13, 47259 Duisburg' },
  steg: { name: 'Steganlage am Masurensee (Ostufer)', address: 'Masurensee, 47279 Duisburg' },
  wechselnd: { name: 'Wechselnde Halle / Kunstrasen', address: 'wird in der WhatsApp-Gruppe bekanntgegeben' },
};

/* ---------- Abteilungen ----------
   training.sessions: day 1=Mo … 7=So · season: 'sommer' (Apr–Sep/Okt) | 'winter'
   age: kinder | jugend | erwachsene | senioren | alle                     */
const DEPARTMENTS = [
  {
    id: 'handball',
    gleis: 1,
    name: 'Handball',
    icon: 'handball',
    tagline: 'Vom Minispiel bis zur Regionsliga',
    short: 'Sieben Teams im Spielbetrieb, Ballspielgruppe ab 3 Jahren und Minis – Handball ist unsere größte Abteilung.',
    image: UP + '2025/09/1.Herrne-min-scaled.jpg',
    email: 'handball@etus-wedau.de',
    social: { instagram: 'https://www.instagram.com/etuswedauhandball/', facebook: 'https://www.facebook.com/etuswedauhandball/' },
    intro: [
      'Hier findet ihr aktuelle Informationen sowie alle Spiele und Spielberichte der laufenden Saison. Egal ob Anfänger oder erfahrener Spieler – bei uns findet jeder sein Team.',
      'Wir freuen uns auf alle neu interessierten Handballerinnen und Handballer. Ihr könnt jederzeit unverbindlich und kostenlos beim Training mitmachen.',
    ],
    facts: [
      { v: '10', l: 'Trainingsgruppen' },
      { v: '3–99', l: 'Jahre' },
      { v: 'Regionsliga', l: 'Höchste Spielklasse' },
    ],
    teams: [
      { name: '1. Männer', league: 'Regionsliga', link: 'https://www.handball.net/team/75858?fed_id=149&season_id=2627', img: UP + '2025/09/1.Herrne-min-scaled.jpg' },
      { name: '2. Männer', league: 'Regionsklasse', link: 'https://www.handball.net/team/76151?fed_id=149&season_id=2627', img: UP + '2025/09/2.-Herren-scaled.jpg' },
      { name: '1. Frauen', league: 'Regionsliga', link: 'https://www.handball.net/team/75075?fed_id=149&season_id=2627', img: UP + '2025/09/Frauen-scaled.jpg' },
      { name: 'Gemischte Jugend D', league: 'Regionsoberliga Quali', link: 'https://www.handball.net/team/94265?fed_id=149&season_id=2627', img: UP + '2025/09/gem.-D-neu.jpg' },
      { name: 'Gemischte Jugend E', league: 'Regionsoberliga Quali', link: 'https://www.handball.net/team/94170?fed_id=149&season_id=2627', img: UP + '2025/09/maenl.E-scaled.jpg' },
      { name: 'Weibliche Jugend E', league: 'Regionsoberliga', link: 'https://www.handball.net/team/94142?fed_id=149&season_id=2627', img: UP + '2025/10/weibl.-E-neu-1-scaled.jpg' },
      { name: 'Gemischte Jugend F', league: 'Turniersystem', link: '', img: UP + '2025/09/F-Jugend-scaled.jpg' },
    ],
    training: [
      { group: '1. Männer', age: 'erwachsene', coaches: [{ name: 'Franco Drömer', phone: '01590 6227751' }, { name: 'Jan Annutsch', phone: '0172 4895917' }], sessions: [{ day: 2, from: '20:30', to: '22:00', venue: 'b3' }, { day: 4, from: '20:30', to: '22:00', venue: 'b3' }] },
      { group: '2. Männer', age: 'erwachsene', coaches: [{ name: 'Kai Häser', phone: '0176 82169658' }, { name: 'Waldemar Jendrysik', phone: '0160 7773551' }], sessions: [{ day: 3, from: '20:30', to: '22:00', venue: 'b3' }] },
      { group: '1. Frauen', age: 'erwachsene', coaches: [{ name: 'Sabine Zeuner', phone: '0175 1836479' }], sessions: [{ day: 2, from: '19:00', to: '20:30', venue: 'b3' }, { day: 4, from: '19:00', to: '20:30', venue: 'b3' }] },
      { group: 'Gemischte Jugend D', age: 'jugend', coaches: [{ name: 'Lana Monheim', phone: '01522 4842034' }, { name: 'Daniel Dunkelmann', phone: '0178 9828716' }], sessions: [{ day: 2, from: '17:30', to: '19:00', venue: 'b3' }, { day: 4, from: '17:30', to: '19:00', venue: 'b3' }] },
      { group: 'Gemischte Jugend E', age: 'kinder', coaches: [{ name: 'Joachim Waldbach', phone: '01520 1441103' }], sessions: [{ day: 2, from: '17:30', to: '19:00', venue: 'b3' }, { day: 4, from: '17:30', to: '19:00', venue: 'b3' }] },
      { group: 'Weibliche Jugend E', age: 'kinder', coaches: [{ name: 'Svenja Wiczorek', phone: '01515 7903574' }, { name: 'Denise Quardon', phone: '0163 6140042' }, { name: 'Christiane Koch', phone: '01516 2653477' }], sessions: [{ day: 3, from: '17:30', to: '19:00', venue: 'b3' }, { day: 5, from: '16:00', to: '17:30', venue: 'b4' }] },
      { group: 'Gemischte Jugend F', age: 'kinder', coaches: [{ name: 'Daniel Waldbach', phone: '0174 2102654' }, { name: 'Jenny Waldbach', phone: '01525 6254871' }], sessions: [{ day: 3, from: '17:30', to: '19:00', venue: 'b3' }, { day: 5, from: '16:00', to: '17:30', venue: 'b3' }] },
      { group: 'Ballspielgruppe (3–5 Jahre)', age: 'kinder', coaches: [{ name: 'Stefanie Meyer', phone: '01514 4640004' }, { name: 'Claudia Waldbach', phone: '01573 1664869' }, { name: 'Maria Ament', phone: '01575 5916235' }], sessions: [{ day: 1, from: '16:00', to: '17:00', venue: 'ggs' }] },
      { group: 'Minis Mädchen Jg. 2020', age: 'kinder', coaches: [{ name: 'Benny Daser', phone: '0172 6959182' }], sessions: [{ day: 7, from: '09:45', to: '10:30', venue: 'b3' }] },
      { group: 'Minis Mädchen Jg. 2023', age: 'kinder', coaches: [{ name: 'Benny Daser', phone: '0172 6959182' }], sessions: [{ day: 7, from: '10:30', to: '11:30', venue: 'b3' }] },
    ],
    contacts: [
      { name: 'Astrid Hofmann', role: 'Abteilungsleiterin', phone: '0173 2162484', phone2: '0203 7185177' },
      { name: 'Sascha Uhlmann', role: 'Stellv. Abteilungsleiter', phone: '0162 1373805' },
      { name: 'Sabrina Vosen', role: 'Kassiererin', phone: '01515 7886683' },
      { name: 'Joachim Waldbach', role: 'Jugendwart', phone: '01520 1441103' },
      { name: 'Susanne Schmitz-Hansmeier', role: 'Stellv. Jugendwartin', phone: '01578 8682842' },
      { name: 'Sebastian Schanzenbach', role: 'Männerwart', phone: '0176 38777743' },
      { name: 'Daniel Dunkelmann', role: 'Frauenwart', phone: '0178 9828716' },
      { name: 'Thomas Fischer-Moore', role: 'Schiedsrichterwart', phone: '0160 90744983' },
    ],
    venues: ['b3', 'b4', 'gesamtschule', 'ggs'],
    faq: [
      { q: 'Ab welchem Alter kann mein Kind Handball spielen?', a: 'Schon ab 3 Jahren in unserer Ballspielgruppe (montags, GGS Am See). Danach geht es über die Minis und die F-Jugend Schritt für Schritt in den Spielbetrieb.' },
      { q: 'Wo finde ich Spielpläne und Ergebnisse?', a: 'Alle Spielpläne und Tabellen unserer Teams sind direkt bei handball.net verlinkt – siehe „Teams & Spielbetrieb“.' },
    ],
  },
  {
    id: 'leichtathletik',
    gleis: 2,
    name: 'Leichtathletik',
    icon: 'run',
    tagline: 'Laufen, springen, werfen – und das Sportabzeichen',
    short: 'Breiten- und Leistungssport für Kinder, Jugendliche und Senioren. Seit Jahrzehnten Ausrichter des Deutschen Sportabzeichens.',
    image: UP + '2026/06/20260601_220509-576x1024.jpg',
    imagePos: 'center 0%',
    email: 'la@etus-wedau.de',
    intro: [
      'Die Leichtathletik mit ihren jugendlichen Mitgliedern als auch den Seniorinnen und Senioren fördert und betreibt neben dem Breitensport auch den Leistungssport – mit erfolgreicher Teilnahme an Veranstaltungen wie dem Biegerparklauf und der Winterlaufserie des ASV Duisburg.',
      'Daneben richtet die Abteilung schon seit Jahrzehnten den Sportabzeichenwettbewerb aus – für das seit 2013 leistungsorientierte Deutsche Sportabzeichen in Gold, Silber und Bronze.',
    ],
    facts: [
      { v: 'U10 & Ü10', l: 'Trainingsgruppen' },
      { v: 'Gold · Silber · Bronze', l: 'Sportabzeichen' },
      { v: 'Ab 6', l: 'Jahren' },
    ],
    training: [
      { group: 'Kinder U10', age: 'kinder', sessions: [{ day: 1, from: '16:00', to: '17:00', venue: 'ziegelkamp' }] },
      { group: 'Kinder & Jugend Ü10', age: 'jugend', sessions: [{ day: 1, from: '17:00', to: '18:00', venue: 'ziegelkamp' }] },
      { group: 'Sportabzeichen (Mai–Oktober)', age: 'alle', season: 'sommer', note: 'Termine siehe unten', coaches: [{ name: 'Birgit Bokel', email: 'birgitbokel@arcor.de' }], sessions: [{ day: 1, from: '17:00', to: '19:00', venue: 'anlage', monthly: true }] },
    ],
    contacts: [
      { name: 'Christian Michels', role: 'Abteilungsleiter', email: 'michels.ch@t-online.de' },
      { name: 'Birgit Bokel', role: 'Stellv. Abteilungsleiterin · Sportabzeichen', email: 'birgitbokel@arcor.de' },
    ],
    venues: ['ziegelkamp', 'anlage'],
    extra: 'sportabzeichen',
    faq: [
      { q: 'Was brauche ich für das Sportabzeichen?', a: 'Aus den vier Disziplingruppen Ausdauer, Kraft, Schnelligkeit und Koordination muss je eine Bedingung erfüllt werden – plus der Nachweis der Schwimmfertigkeit (für Kinder/Jugendliche das Schwimmabzeichen, für Erwachsene in jedem Schwimmbad abnehmbar).' },
      { q: 'Was kostet das Sportabzeichen?', a: 'Kinder und Jugendliche (6–17 Jahre): 1,50 € für Urkunde und Nadel. Erwachsene: Urkunde 3,50 €, Nadel 5,00 €.' },
    ],
  },
  {
    id: 'tennis',
    gleis: 3,
    name: 'Tennis',
    icon: 'tennis',
    tagline: 'Vier Plätze im Grünen',
    short: 'Vier gepflegte Sandplätze, Mannschaften von Damen 40 bis Herren 70 und eine Jugend im Aufwind.',
    image: UP + '2026/04/PHOTO-2026-04-10-21-26-10-1-1024x768.jpg',
    email: 'tennis@etus-wedau.de',
    intro: [
      'Egal ob Hobbyspieler oder ernsthafter Wettkämpfer – auf unseren vier Plätzen an der Vereinsanlage findet ihr Möglichkeiten zum Spielen und Trainieren.',
      'Unsere Jugendabteilung ist im Aufwind und findet viel Zuspruch: Sommercamp, Kinder-Eltern-Turnier und Wintertraining in der Halle mit Jugendtrainer Werner Gedigk.',
    ],
    facts: [
      { v: '4', l: 'Plätze' },
      { v: '5', l: 'Mannschaften' },
      { v: 'Ganzjährig', l: 'Jugendtraining' },
    ],
    teams: [
      { name: 'Damen 40', league: 'Mannschaftsführerin: Bettina Lingelbach', link: 'https://www.tennis.de/spielen/spielbetrieb/vereinsspielplan.html#TVN/2079/0' },
      { name: 'Herren 40', league: 'Mannschaftsführer: Marcus Helling', link: 'https://www.tennis.de/spielen/spielbetrieb/vereinsspielplan.html#TVN/2079/0' },
      { name: 'Herren 65', league: 'Mannschaftsführer: Thomas Höke', link: 'https://www.tennis.de/spielen/spielbetrieb/vereinsspielplan.html#TVN/2079/0' },
      { name: 'Herren 70', league: 'Medenspiele', link: 'https://www.tennis.de/spielen/spielbetrieb/vereinsspielplan.html#TVN/2079/0' },
      { name: 'Mühlenrunde', league: 'Hobbyrunde', link: '' },
      { name: 'Tennis-Jugend', league: 'Jugendtrainer Werner Gedigk', link: '' },
    ],
    training: [
      { group: 'Herren 65', age: 'senioren', note: 'Uhrzeit nach Absprache', coaches: [{ name: 'Thomas Höke', phone: '0173 2772828' }], sessions: [{ day: 1, from: '', to: '', venue: 'anlage' }] },
      { group: 'Herren 40', age: 'erwachsene', note: 'Uhrzeit nach Absprache', coaches: [{ name: 'Marcus Helling', phone: '01520 1884116' }], sessions: [{ day: 2, from: '', to: '', venue: 'anlage' }] },
      { group: 'Damen 40', age: 'erwachsene', note: 'Uhrzeit nach Absprache', coaches: [{ name: 'Bettina Lingelbach', phone: '0176 51130930' }], sessions: [{ day: 3, from: '', to: '', venue: 'anlage' }] },
      { group: 'Jugendtraining', age: 'jugend', note: 'Zeiten beim Jugendtrainer erfragen, im Winter in der Halle', coaches: [{ name: 'Werner Gedigk', phone: '0179 2256458' }], sessions: [] },
    ],
    contacts: [
      { name: 'Markus Helling', role: 'Abteilungsleiter', email: 'markus_margo_helling@web.de' },
      { name: 'Peter Ziegert', role: 'Stellvertreter', email: 'peter_ziegert@web.de' },
      { name: 'Robert Wermke', role: 'Schatzmeister', email: 'robertwermke@gmx.de' },
      { name: 'Holger', role: 'Schriftführer', email: 'holger186a@ymail.com' },
      { name: 'Sarah Mola', role: 'Pressewartin', email: 'sarah.mola@web.de' },
      { name: 'Werner Gedigk', role: 'Sport- & Jugendwart, Trainer', email: 'w.j.gedigk@gmx.de', phone: '0179 2256458' },
    ],
    venues: ['anlage'],
    gallery: ['2026/04/PHOTO-2026-04-10-21-26-10-9-1024x768.jpg', '2026/04/PHOTO-2026-04-10-21-26-10-7-1024x768.jpg', '2026/04/PHOTO-2026-04-10-21-26-10-5-1024x768.jpg', '2026/04/PHOTO-2026-04-10-21-26-10-4-1024x768.jpg', '2026/09/TMMA-1024x768.jpg', '2026/03/IMG-20260318-WA0003-1024x725.jpg'],
    faq: [
      { q: 'Kann ich Tennis erst einmal ausprobieren?', a: 'Ja! Meldet euch beim Abteilungsleiter oder beim Jugendtrainer – ein Schnuppertraining ist kostenlos und unverbindlich.' },
    ],
  },
  {
    id: 'tischtennis',
    gleis: 4,
    name: 'Tischtennis',
    icon: 'tabletennis',
    tagline: 'Klein, familiär – mit Damenteam',
    short: 'Die familiärste Abteilung des Vereins: Training und Meisterschaftsspiele direkt in unserer Halle. Plus Speed-Badminton.',
    image: UP + '2025/08/etus-wedau-team-tischtennis.jpg',
    email: 'tt@etus-wedau.de',
    intro: [
      'Die Tischtennisabteilung des ETuS Wedau ist mit rund 25 Mitgliedern die wohl kleinste und damit familiärste Abteilung des Vereins. Für den Mannschaftsspielbetrieb ist eine Damenmannschaft gemeldet – ein Aushängeschild des ETuS Wedau.',
      'Training und Meisterschaftsspiele finden in der Sporthalle auf unserem Vereinsgelände statt. Dadurch hat die Abteilung einen engen Bezug zum gesamten Vereinsleben. Für jung und alt!',
    ],
    facts: [
      { v: '~25', l: 'Mitglieder' },
      { v: 'Damen', l: 'Mannschaft' },
      { v: 'Do', l: 'Speed-Badminton' },
    ],
    teams: [
      { name: 'Damen-Team', league: 'Meisterschaftsspielbetrieb', link: '' },
      { name: 'Speed-Badminton', league: 'Freizeitgruppe', link: '' },
    ],
    training: [
      { group: 'Tischtennis', age: 'alle', note: 'Trainingszeiten bitte bei der Abteilung erfragen', sessions: [] },
      { group: 'Speed-Badminton', age: 'erwachsene', coaches: [{ name: 'Holger Lahtz', email: 'etus-speeder@gmx.de' }], sessions: [{ day: 4, from: '20:00', to: '22:00', venue: 'halle' }] },
    ],
    contacts: [
      { name: 'Thomas Klein', role: 'Abteilungsleiter', phone: '0203 729606', email: 'tt@etus-wedau.de' },
      { name: 'Holger Lahtz', role: 'Speed-Badminton', email: 'etus-speeder@gmx.de' },
    ],
    venues: ['halle'],
  },
  {
    id: 'turnen',
    gleis: 5,
    name: 'Turnen & Gesundheit',
    icon: 'gym',
    tagline: 'Kinderturnen, Seniorengymnastik, Sitz-Yoga',
    short: 'Bewegung für jedes Alter: Kinderturnen ab 3 Jahren, präventive Seniorengymnastik und sanftes Sitz-Yoga.',
    image: UP + '2025/09/turnteam.jpg',
    email: 'turnen@etus-wedau.de',
    intro: [
      'Mit unseren ausgebildeten Übungsleitern trainieren wir den Bewegungsapparat mit Lockerungs-, Dehn- und Gleichgewichtsübungen. Koordinations-, Reaktions-, Geh- und Gleichgewichtsübungen erhalten die Sicherheit der Motorik – dazu Übungen für Flexibilität und das Gehirn in jeder Stunde.',
      'Die Seniorengymnastik ist keine Krankengymnastik, sondern eine Maßnahme zur Vorbeugung (Prävention). Beim Kinderturnen entdecken die Kleinsten spielerisch, was ihr Körper alles kann.',
    ],
    facts: [
      { v: 'Ab 3', l: 'Jahren' },
      { v: 'Prävention', l: 'Seniorensport' },
      { v: 'Sitz-Yoga', l: 'sanft & gelenkschonend' },
    ],
    training: [
      { group: 'Kinderturnen (ab 3 Jahren)', age: 'kinder', coaches: [{ name: 'Thomas Schräer', phone: '01575 4182469', email: 'thomas.schraeer@t-online.de' }], sessions: [{ day: 1, from: '17:00', to: '19:00', venue: 'ggs' }, { day: 3, from: '16:00', to: '18:00', venue: 'ggs' }] },
      { group: 'Seniorengymnastik', age: 'senioren', note: 'Zeiten bitte telefonisch erfragen', sessions: [] },
      { group: 'Sitz-Yoga für Senioren', age: 'senioren', note: 'Zeiten bitte telefonisch erfragen', sessions: [] },
    ],
    contacts: [
      { name: 'Christa von Gersum', role: 'Abteilungsleiterin', phone: '0160 7821978', email: 'vongersumck@arcor.de' },
      { name: 'Maria Ewers', role: 'Stellv. Abteilungsleiterin', phone: '0203 774651' },
      { name: 'Thomas Schräer', role: 'Kinderturnen', phone: '01575 4182469', email: 'thomas.schraeer@t-online.de' },
    ],
    venues: ['ggs', 'halle'],
  },
  {
    id: 'sportschiessen',
    gleis: 6,
    name: 'Sportschießen & Bogen',
    icon: 'target',
    tagline: 'Präzision. Konzentration. Gemeinschaft.',
    short: 'Luftdruck, Klein- und Großkaliber, Schwarzpulver und Bogenschießen – auf eigener Anlage, vom Hobby bis zur Deutschen Meisterschaft.',
    image: '',
    email: '',
    intro: [
      'Erlebe die Faszination aus Präzision, Technik und mentaler Stärke. Egal ob Einsteiger oder erfahrener Schütze: Bei uns steht die Freude am Sport und die Gemeinschaft im Mittelpunkt. Ziel im Blick. Treffer im Herzen.',
      'Als Mitglied im Rheinischen Schützenbund (RSB) und damit im Deutschen Schützenbund (DSB) betreiben wir unseren Sport ausschließlich nach den anerkannten Regeln der DSB-Sportordnung. Und auch wenn „Eisenbahner“ in unserem Namen steht: Bei uns sind alle willkommen.',
    ],
    facts: [
      { v: '5 × 25 m', l: 'Schießbahnen' },
      { v: '90 m', l: 'Bogenplatz' },
      { v: 'RSB / DSB', l: 'Verband' },
    ],
    disciplines: [
      { icon: 'target', title: 'Luftdruck', sub: 'Luftgewehr & Luftpistole', text: 'Der perfekte Einstieg in den Schießsport. Technik, Körperbeherrschung und Konzentration stehen im Mittelpunkt.' },
      { icon: 'target', title: 'Klein- & Großkaliber', sub: 'Sportlich. Präzise. Anspruchsvoll.', text: 'Für alle, die ihre Fähigkeiten weiterentwickeln und sich sportlich messen möchten.' },
      { icon: 'target', title: 'Schwarzpulver', sub: 'Tradition trifft Sportschießen', text: 'Perkussions- und Steinschlosspistolen/-revolver – eine Disziplin mit historischem Flair.' },
      { icon: 'bow', title: 'Bogenschießen', sub: 'Sommer draußen · Winter in der Halle', text: 'Bogenplatz bis 90 m unter freiem Himmel, im Winter Halle bis 18 m. Präzision kennt keine Winterpause.' },
    ],
    training: [
      { group: 'Bogensport – offenes Training', age: 'alle', coaches: [{ name: 'Sascha Sommer', email: 'Sascha.Sommer@ETuS-Wedau.de' }, { name: 'Gerd Wintjes', email: 'Gerd.Wintjes@ETuS-Wedau.de' }], sessions: [{ day: 1, from: '17:00', to: '', venue: 'anlage' }, { day: 4, from: '17:00', to: '', venue: 'anlage' }] },
      { group: 'Sportpistole (KK/GK)', age: 'erwachsene', coaches: [{ name: 'Karsten Ramroth', email: 'Karsten.Ramroth@ETuS-Wedau.de' }], sessions: [{ day: 2, from: '17:00', to: '19:00', venue: 'anlage' }] },
      { group: 'Luftpistole / Luftgewehr', age: 'alle', coaches: [{ name: 'Karsten Ramroth', email: 'Karsten.Ramroth@ETuS-Wedau.de' }], sessions: [{ day: 3, from: '17:00', to: '19:00', venue: 'anlage' }] },
      { group: 'Bogensport – Jugendgruppe', age: 'jugend', note: 'Okt–März in der Turnhalle, Apr–Sep auf der Bogenanlage', coaches: [{ name: 'Thomas Engel', email: 'thomas.engel@etus-wedau.de' }], sessions: [{ day: 3, from: '17:00', to: '19:00', venue: 'anlage' }, { day: 5, from: '17:00', to: '19:00', venue: 'anlage' }] },
      { group: 'Großkaliber', age: 'erwachsene', coaches: [{ name: 'Karsten Ramroth', email: 'Karsten.Ramroth@ETuS-Wedau.de' }], sessions: [{ day: 5, from: '17:00', to: '20:00', venue: 'anlage' }] },
      { group: 'Schwarzpulver', age: 'erwachsene', coaches: [{ name: 'Karsten Ramroth', email: 'Karsten.Ramroth@ETuS-Wedau.de' }], sessions: [{ day: 5, from: '18:00', to: '22:00', venue: 'anlage' }] },
    ],
    contacts: [
      { name: 'Rainer Oxen', role: 'Abteilungsleitung', email: 'Rainer.Oxen@ETuS-Wedau.de' },
      { name: 'Andreas Heidemeyer', role: 'Abteilungsleitung', email: 'Andreas.Heidemeyer@ETuS-Wedau.de' },
      { name: 'Karsten Ramroth', role: 'Sportleiter Kugel', email: 'Karsten.Ramroth@ETuS-Wedau.de' },
      { name: 'Thomas Engel', role: 'Jugendtrainer Bogen', email: 'thomas.engel@etus-wedau.de' },
    ],
    venues: ['anlage'],
    facilities: [
      { t: '25-m-Schießstand', d: '5 Bahnen mit 25 m, mit wenigen Handgriffen auf 10-m-Disziplinen umrüstbar. Alle Pistolendisziplinen nach DSB-Sportordnung, Luftdruck sowie Klein- und Großkaliber.' },
      { t: 'Schwarzpulver-Stand', d: '2 Bahnen mit 25 m für Perkussions- und Steinschlosspistolen/-revolver.' },
      { t: 'Bogenplatz', d: 'Außenanlage für das Bogenschießen bis 90 m.' },
      { t: 'Bogenhalle', d: 'Wintertraining bis 18 m mit verschiedenen Bögen.' },
    ],
    extra: 'schuetzen',
    faq: [
      { q: 'Brauche ich eine eigene Ausrüstung?', a: 'Nein. Für nahezu alle Disziplinen stehen vereinseigene Sportgeräte zur Verfügung. Leihbögen und Leihwaffen nach vorheriger Absprache.' },
      { q: 'Wie starte ich als Anfänger?', a: 'In der Regel mit Druckluftwaffen – Schritt für Schritt lernt ihr die Grundlagen und den sicheren Umgang. Je nach Alter und Erfahrung kommen später weitere Disziplinen dazu. Beim Bogenschießen geht es direkt mit Pfeil und Bogen los.' },
      { q: 'Gibt es Arbeitsstunden?', a: 'Ja – damit unsere Anlage in Schuss bleibt, leisten alle Mitglieder fünf Arbeitsstunden pro Jahr für die Abteilung, ganz nach Fähigkeiten und Möglichkeiten.' },
    ],
  },
  {
    id: 'hobbykicker',
    gleis: 7,
    name: 'Hobbyfußball',
    icon: 'football',
    tagline: 'Montags 19 Uhr – faires Spiel auf Naturrasen',
    short: 'Reine Hobbytruppe zwischen 30 und 60 Jahren. Im Sommer auf unserem gepflegten Rasenplatz, danach gemütlich in der Gaststätte.',
    image: UP + '2025/08/hobbykicker-foto1-768x512-1.jpg',
    email: 'hoki@etus-wedau.de',
    intro: [
      'Wir sind eine reine Hobbytruppe im Alter zwischen 30 und 60 Jahren. Wir „trainieren“ jeden Montag um 19 Uhr, wenn die Mindestteilnehmerzahl von 10 Spielern erreicht ist – über eine WhatsApp-Gruppe wird an jedem Spieltag abgefragt, wer dabei ist.',
      'Unter „Training“ verstehen wir: Jeder spult ein individuelles Aufwärmprogramm ab (in der Regel eine Viertelstunde Rumgebolze). Danach werden zwei Mannschaften gebildet und es gibt ein ordentliches, faires Fußballspiel.',
    ],
    facts: [
      { v: '30–60', l: 'Jahre' },
      { v: 'Mo 19 Uhr', l: 'Anstoß' },
      { v: 'Naturrasen', l: 'April–Oktober' },
    ],
    training: [
      { group: 'Hobbykicker – Sommersaison', age: 'erwachsene', season: 'sommer', note: 'Mind. 10 Spieler, Abfrage per WhatsApp', sessions: [{ day: 1, from: '19:00', to: '21:00', venue: 'anlage' }] },
      { group: 'Hobbykicker – Wintersaison', age: 'erwachsene', season: 'winter', note: 'Ort & Zeit werden frühzeitig bekanntgegeben (Halle Sportschule, Kunstrasen, Ballkontakt)', sessions: [{ day: 1, from: '', to: '', venue: 'wechselnd' }] },
    ],
    contacts: [
      { name: 'Bianca Stephan', role: 'Abteilungsleiterin', email: 'hoki@etus-wedau.de' },
      { name: 'Yannick Pastoor', role: 'Ansprechpartner & Inhalte', email: 'yannickpastoor@gmail.com' },
    ],
    venues: ['anlage'],
    faq: [
      { q: 'Warum spielt ihr im Winter woanders?', a: 'Auf unserer Platzanlage gibt es leider kein Flutlicht. Von Oktober bis März weichen wir daher auf Hallen oder Kunstrasenplätze in der Nähe aus.' },
    ],
  },
  {
    id: 'segeln',
    gleis: 8,
    name: 'Segeln',
    icon: 'sail',
    tagline: 'Club am Masurensee seit 1975',
    short: 'Eigener Steg am Ostufer des Masurensees. Revier: Masuren-, Wolf- und Wildförstersee. Bei uns stimmt die Chemie.',
    image: '',
    email: 'segeln@etus-wedau.de',
    intro: [
      'Mit rund 50 Mitgliedern ist der Club am Masurensee der kleinste Segelverein an der Sechs-Seen-Platte. Unser Segelrevier bilden die miteinander verbundenen Gewässer Masuren-, Wolf- und Wildförstersee. Beheimatet sind wir mit Steg und Vereinsgelände am Ostufer des Masurensees.',
      'Die Mitglieder unternehmen viel zusammen. Man kann sagen: „Bei uns stimmt die Chemie“ – und jeder hilft jedem.',
    ],
    facts: [
      { v: '~50', l: 'Mitglieder' },
      { v: '1975', l: 'gegründet' },
      { v: '3 Seen', l: 'Segelrevier' },
    ],
    training: [{ group: 'Segeln', age: 'alle', season: 'sommer', note: 'Termine und Ausfahrten bitte bei der Abteilung erfragen', sessions: [] }],
    contacts: [
      { name: 'Nicole Bednarz', role: 'Abteilungsleiterin' },
      { name: 'Andrea Löwe', role: 'Stellv. Abteilungsleiterin' },
      { name: 'Bodo Löwe', role: 'Stegwart' },
      { name: 'Rainer Bednarz', role: 'Stegwart' },
      { name: 'Klemens Gülden', role: 'Sportwart' },
    ],
    venues: ['steg'],
    history: [
      { y: '1975', t: 'Am 26. September heben 16 Mitglieder des ETuS Wedau eine Segelabteilung aus der Taufe.' },
      { y: '1978', t: 'Bau der Steganlage in Eigenregie – rund 2.800 Arbeitsstunden inkl. Uferbefestigung. Einweihung am 4. Juni 1978.' },
      { y: '1980', t: 'Beitritt zum Deutschen Segler-Verband und zum Landesseglerverband NRW.' },
      { y: '1981', t: 'Stromanschluss am Ufer. Das ehemalige Rottengebäude des Bahnhofs Wedau wird in 3.000 Stunden Eigenleistung zum Winterlager umgebaut.' },
      { y: '1982', t: 'Gründung der Jugendabteilung mit 20 Jugendlichen. Eine Regattajolle 420er wird angeschafft.' },
      { y: '1996', t: 'Die Regattaserie „Blaues Band der Sechs-Seen-Platte“ wird wiederbelebt.' },
      { y: '1999', t: 'Ein Sommersturm (5./6. Juli) zerstört die Steganlage – der Wiederaufbau gelingt unverzüglich.' },
    ],
  },
];

/* ---------- Offene Angebote ---------- */
const OPEN_OFFERS = [
  { id: 'ninja', title: 'Ninja Parcours', badge: 'Öffentlich & kostenlos', text: 'Unser Ninja Parcours auf der Sportanlage ist für jeden frei zugänglich. Klettern, hangeln, balancieren – für Kids und Junggebliebene.', img: UP + '2025/09/etus-wedau-ninja-parcour.jpg', link: 'anlage.html#ninja' },
  { id: 'cornhole', title: 'Cornhole', badge: 'Neu · sonntags ab 10 Uhr', text: 'Das Wurfspiel für jede Altersgruppe – sonntags ab 10:00 Uhr in unserer Halle, weitere Spielzeiten nach Vereinbarung.', img: UP + '2026/06/IMG-20260607-WA0001-723x1024.jpg', link: 'aktuelles.html#cornhole' },
  { id: 'sportabzeichen', title: 'Deutsches Sportabzeichen', badge: 'Mai bis Oktober', text: 'Jedes Jahr nehmen wir auf unserer Platzanlage das Sportabzeichen ab – für Kinder ab 6 bis ins hohe Alter.', img: UP + '2026/06/20260601_221347-768x1024.jpg', link: 'abteilung.html?a=leichtathletik#sportabzeichen' },
];

/* Wiederkehrende Angebote, die in Tafel & Finder auftauchen */
const EXTRA_SESSIONS = [
  { dept: 'verein', deptName: 'Cornhole', group: 'Cornhole – offenes Spiel', age: 'alle', sessions: [{ day: 7, from: '10:00', to: '', venue: 'halle' }], coaches: [{ name: 'Manuela Schülpen', email: 'manuela.schuelpen@etus-wedau.de' }] },
];

const SPORTABZEICHEN = {
  year: 2026,
  time: 'montags 17:00 – 19:00 Uhr',
  place: 'Platzanlage, Untere Masurenallee 331',
  dates: ['2026-05-04', '2026-06-01', '2026-07-06', '2026-08-03', '2026-09-07', '2026-10-05'],
  contact: 'birgitbokel@arcor.de',
};

/* ---------- Gesamtvorstand ---------- */
const BOARD = [
  {
    name: 'Manuela Schülpen', role: '1. Vorsitzende', phone: '0175 3468111', email: 'manuela.schuelpen@etus-wedau.de', badge: 'DOSB-zertifizierte Sozialwartin',
    tasks: ['Richtlinien der Vereinspolitik (u. a. Satzungswesen)', 'Überwachung der Vorstandsbeschlüsse', 'Repräsentation & Kontaktpflege', 'Einberufung & Vorsitz von Sitzungen und Versammlungen', 'Rechtsgeschäfte gem. BGB mit weiterem Vorstandsmitglied', 'Neue Sportangebote & sportstrategische Vision', 'Homepage & Pressearbeit', 'Mitarbeitergespräche, jährlicher Workshop', 'Organisation der Vereinsveranstaltungen & -feste', 'Jubilarliste & Mitgliederbestandserhebung', 'Zuschussanträge LSB', 'Einladungen Mitgliederversammlung'],
  },
  {
    name: 'Thomas Schräer', role: '2. Vorsitzender', phone: '0172 8005227',
    tasks: ['Aufnahmeanträge', 'Etablierung neuer Sportangebote', 'Sportkoordination, Aus- & Fortbildung von Übungsleiter*innen', 'Abrechnung der Übungsleiter-/Helferstunden', 'Hallen- und Sportanlagenplan', 'Kontakt zu Jugendleitung und Abteilungen', 'Vor-Ort-Koordination der Vereinsfeste', 'Energiethemen'],
  },
  {
    name: 'Christian Michels', role: '3. Vorsitzender', phone: '0172 2620125',
    tasks: ['Bauliche Koordination & Unterhaltung der Anlage', 'Vorausschau der Unterhaltungsarbeiten', 'Steuerung der Eigenleistung', 'Koordination Platzwart (Facility Manager)', 'Veranstaltungskalender', 'Abstimmung mit Pächter/Gastwirt', 'Vermietung Sportanlage, Grillanlage, Jugendraum', 'Zuschussanträge im Fachgebiet'],
  },
  {
    name: 'Bianca Stephan', role: 'Geschäftsführerin', phone: '0179 5938067',
    tasks: ['Vereinsfinanzen nach dem Grundsatz der Sparsamkeit', 'Personalkonten mit dem Steuerberater', 'Buchführung & Zahlungsverkehr', 'Quartalsabrechnung der Vereins- und Abteilungskassen', 'Haushaltsplan & Geschäftsbericht', 'Modernisierung & Digitalisierung des Geld- und Mitgliederwesens'],
  },
  { name: 'Angelika Eckhardt', role: 'Beitragswesen', email: 'angelika.eckhardt@etus-wedau.de', tasks: ['Mitgliedsbeiträge', 'Ummeldungen, Abmeldungen, Passivmitgliedschaft'] },
  { name: 'Christine Schefzig', role: 'Jugendwartin', tasks: ['Vereinsjugend & Jugendpflege', 'Jugendraum & Jugendaktionen'] },
];

/* ---------- Partner ---------- */
const PARTNERS = [
  { name: 'Gottwald Bach', logo: UP + '2025/07/etus-wedau-sponsoren-waldb.jpg', url: 'https://www.gottwaldbach.de/', branch: 'Partner des ETuS' },
  { name: 'ETL Schwertfeger', logo: UP + '2025/07/etus-wedau-sponsoren-schwertf-n.jpg', url: 'https://kanzlei.etl.de/schwertfeger-duisburg/', branch: 'Steuerberatung, Duisburg' },
  { name: 'Grings GmbH', logo: UP + '2026/10/Screenshot-2026-10-16-142946.png', url: 'https://www.gringsgmbh.de/', branch: 'Wärmepumpe & Photovoltaik' },
  { name: 'Sebetuhl', logo: UP + '2025/07/etus-wedau-sponsoren-ulmann.jpg', url: 'http://www.sebetuhl.de/', branch: 'Partner des ETuS' },
  { name: 'Malerbetrieb Runge', logo: UP + '2025/07/etus-wedau-sponsoren-runge.jpg', url: 'https://www.malerbetrieb-runge.de/', branch: 'Maler · Glaser · Bodenbeläge' },
  { name: 'Vereinsgaststätte Rasch', logo: UP + '2025/07/etus-wedau-sponsoren-rasch.jpg', url: 'gaststaette.html', branch: 'Gastronomie auf der Anlage' },
];

/* ---------- Downloads ---------- */
const DOWNLOADS = [
  { t: 'Aufnahmeantrag inkl. Schnuppermitgliedschaft', d: 'Stand 04/2026 · inkl. Beitragsübersicht (S. 2)', url: UP + '2026/10/ETuS-Aufnahmeantrag04_2026_inkl.-Schnupper.pdf', cat: 'Mitgliedschaft' },
  { t: 'Aufnahmeantrag (am PC ausfüllbar)', d: 'Stand 04/2026 · dynamisches PDF', url: UP + '2026/05/ETuS-Aufnahmeantrag04_2026-dynamisch.pdf', cat: 'Mitgliedschaft' },
  { t: 'Ummeldung / Abmeldung / Passiv', d: 'Änderungen der Mitgliedschaft', url: UP + '2025/08/Ummeldung-Abmeldung-Passiv.pdf', cat: 'Mitgliedschaft' },
  { t: 'Reservierung Grillecke & Jugendraum', d: 'Antrag für Feiern & Veranstaltungen', url: UP + '2025/08/Grill-Jugendraum_Reserv.pdf', cat: 'Anlage' },
  { t: 'Hallenbelegung Winter 2026/27', d: 'Hallenplan inkl. Heizzeiten', url: UP + '2026/10/2026-ETuS-Hallenbelegung-Heizung-Winter-2026-2027-3-A3.pdf', cat: 'Training' },
  { t: 'Vereinssatzung', d: 'Fassung 03/2023', url: UP + '2025/08/Satzungkomplett-03_2023.pdf', cat: 'Verein' },
  { t: 'Tennis: Einladung Jahreshauptversammlung 2026', d: 'Abteilung Tennis', url: UP + '2026/01/Tennis-Jahreshauptversammlung-2026.pdf', cat: 'Abteilungen' },
  { t: 'Bildung und Teilhabe (Stadt Duisburg)', d: 'Zuschuss zum Vereinsbeitrag für Kinder & Jugendliche', url: 'https://www.duisburg.de/vv/produkte/pro_du/dez_iii/50/Bildung_und_Teilhabe.php', cat: 'Mitgliedschaft', ext: true },
];

/* ---------- Aktuelles ---------- */
const NEWS = [
  {
    id: 'hallenplan-2627', date: '2026-10-20', dateLabel: 'Oktober 2026', dept: 'verein', tag: 'Verein', title: 'Hallenplan für die Saison 2026/27 ist online',
    excerpt: 'Die Hallenbelegung inklusive Heizzeiten für den Winter 2026/27 steht zum Download bereit.',
    body: ['Die neue Hallenbelegung für die Wintersaison 2026/27 ist da – inklusive der Heizzeiten. Alle Trainingszeiten findet ihr außerdem jederzeit aktuell in unserem Trainingsfinder.'],
    link: { label: 'Hallenplan (PDF)', url: UP + '2026/10/2026-ETuS-Hallenbelegung-Heizung-Winter-2026-2027-3-A3.pdf' },
  },
  {
    id: 'cornhole', date: '2026-10-16', dateLabel: 'Oktober 2026', dept: 'verein', tag: 'Neu', featured: true, title: 'Neu: Cornhole beim ETuS Wedau', img: UP + '2026/06/IMG-20260607-WA0001-723x1024.jpg', imgPos: 'center 20%',
    excerpt: 'Das ultimative Wurfspiel für jeden: sonntags ab 10:00 Uhr in unserer Halle – plus Spielmöglichkeiten nach Vereinbarung.',
    body: ['Wettkampf und Präzision, perfekt für jede Altersgruppe, Spannung und Action – und vor allem Gemeinschaft: Cornhole ist einfach zu lernen und macht vom ersten Wurf an Spaß.', 'Ab sofort spielen wir sonntags ab 10:00 Uhr in unserer Halle auf dem Vereinsgelände. Weitere Spielmöglichkeiten gibt es nach Vereinbarung – indoor wie outdoor. Wirf mit und werde Teil der Cornhole-Community!', 'Kontakt: Cornhole-Duisburg@proton.me oder manuela.schuelpen@etus-wedau.de'],
  },
  {
    id: 'tennis-vm-2026', date: '2026-09-12', dateLabel: 'September 2026', dept: 'tennis', tag: 'Tennis', title: 'Vereinsmeisterschaft 2026 gestartet', img: UP + '2026/09/TMMA-1024x768.jpg',
    excerpt: 'Bei bestem Tenniswetter und mit viel guter Laune wurden die ersten Doppel und Einzel gespielt.',
    body: ['Am Wochenende sind wir mit unserer diesjährigen Vereinsmeisterschaft gestartet. Bei bestem Tenniswetter und mit viel guter Laune wurden die ersten Doppel gespielt, tags darauf starteten die ersten Einzelbegegnungen.', 'Bleibt gespannt, wer unsere Vereinsmeister 2026 werden …'],
  },
  {
    id: 'verkehrsfuehrung', date: '2026-06-08', dateLabel: 'Juni 2026', dept: 'verein', tag: 'Wichtig', title: 'Geänderte Verkehrsführung zum Vereinsgelände',
    excerpt: 'Die Zufahrt für PKW erfolgt jetzt hinter dem Vereinsgelände entlang. Rad- und Fußweg bleiben wie gewohnt.',
    body: ['Die Verkehrsführung zum Vereinsgelände des ETuS Wedau wurde geändert. Der Zugang für PKW erfolgt nun hinter dem Vereinsgelände entlang: Nach der Ampel auf der (Unteren) Masurenallee links am Seniorenwohnheim hineinfahren.', 'Ab der 24. Kalenderwoche bis ca. Ende August 2026 war die Straße „Am Rangierbahnhof“ als Einbahnstraße eingerichtet und die Zufahrt aus Richtung Kreisverkehr Wedauer Brücke gesperrt – der Zugang erfolgte über die Lummerlandstraße.', 'Für Radfahrer*innen und zu Fuß ist der Zugang weiterhin über den bekannten Weg möglich.'],
    link: { label: 'Zur Anfahrt', url: 'anlage.html#anfahrt' },
  },
  {
    id: 'sportabzeichen-2026', date: '2026-06-01', dateLabel: 'Juni 2026', dept: 'leichtathletik', tag: 'Leichtathletik', title: 'Sportabzeichen 2026 – macht mit!', img: UP + '2026/06/20260601_221347-768x1024.jpg', imgPos: 'center 15%',
    excerpt: 'Sechs Abnahmetermine von Mai bis Oktober, jeweils montags 17–19 Uhr auf unserer Platzanlage.',
    body: ['Wer hat Lust, das Sportabzeichen im ETuS Wedau zu erwerben? Aus den Disziplingruppen Ausdauer, Kraft, Schnelligkeit und Koordination muss je eine Bedingung erfüllt werden – dazu der Nachweis der Schwimmfertigkeit.', 'Termine 2026: 4. Mai, 1. Juni, 6. Juli, 3. August, 7. September und 5. Oktober – jeweils montags 17:00 bis 19:00 Uhr auf unserer Platzanlage. Ausweichtermine nach Absprache mit der Übungsleiterin.', 'Kosten: Kinder/Jugend (6–17) 1,50 € für Urkunde und Nadel. Erwachsene: Urkunde 3,50 €, Nadel 5,00 €. Kontakt: birgitbokel@arcor.de'],
  },
  {
    id: 'la-jugend', date: '2026-06-01', dateLabel: 'Juni 2026', dept: 'leichtathletik', tag: 'Leichtathletik', title: 'Unsere Leichtathletik-Jugend', img: UP + '2026/06/20260601_220509-576x1024.jpg', imgPos: 'center 40%',
    excerpt: 'Montags trainieren U10 und Ü10 – neue Kinder sind herzlich willkommen.',
    body: ['Unsere Leichtathletik-Jugend wächst! Montags von 16 bis 17 Uhr trainiert die U10, von 17 bis 18 Uhr die Ü10. Ein Probetraining ist jederzeit kostenlos möglich.'],
  },
  {
    id: 'tennis-platzeroeffnung', date: '2026-04-10', dateLabel: '10. April 2026', dept: 'tennis', tag: 'Tennis', title: 'Platzeröffnung 2026', img: UP + '2026/04/PHOTO-2026-04-10-21-26-10-9-1024x768.jpg',
    excerpt: 'Nach der perfekten Aufbereitung unserer vier Plätze ging es bei bestem Tenniswetter los.',
    body: ['Am 10.04.2026 haben wir unsere Plätze eröffnet. Nach der perfekten Aufbereitung unserer vier Plätze konnte es bei bestem Tenniswetter losgehen. Einer kurzen Ansprache unseres neuen ersten Vorsitzenden Markus folgten die ersten Matches.', 'Aus allen Mannschaften haben zahlreiche Spielerinnen und Spieler die Plätze getestet und für gut befunden. Und da Tennisspielen hungrig macht, durfte die erste Grillwurst der Saison natürlich nicht fehlen. Ein besonderer Moment: die Ehrung des ehemaligen 1. Vorsitzenden – DANKE, Reinhard!'],
  },
  {
    id: 'tennis-platzaufbereitung', date: '2026-03-19', dateLabel: 'März 2026', dept: 'tennis', tag: 'Tennis', title: 'Platzaufbereitung für die Saison 2026', img: UP + '2026/03/IMG-20260318-WA0003-1024x725.jpg',
    excerpt: 'Am 18. und 19. März wurden unsere Tennisplätze fachgerecht aufbereitet – danke an alle Helfer!',
    body: ['Am 18. und 19. März wurden unsere Tennisplätze fachgerecht für die kommende Saison aufbereitet. Unter der kompetenten Anleitung unseres Platzwartes Alex sowie unseres Vize-Vorsitzenden Peter konnten alle Arbeiten erfolgreich durchgeführt werden.', 'Ein herzliches Dankeschön an alle Helferinnen und Helfer, die mit ihrem Einsatz optimale Spielbedingungen geschaffen haben!'],
  },
  {
    id: 'tennis-jhv', date: '2026-01-20', dateLabel: 'Januar 2026', dept: 'tennis', tag: 'Tennis', title: 'Tennis: Jahreshauptversammlung 2026', img: UP + '2026/01/IMG-20251213-WA0017-225x300.jpg',
    excerpt: 'Die Einladung zur Jahreshauptversammlung der Tennisabteilung als PDF.',
    body: ['Die Einladung und Tagesordnung zur Jahreshauptversammlung 2026 der Tennisabteilung findet ihr hier als PDF. Außerdem: Unsere Jugend ist mit viel Spaß und Treffsicherheit im Wintertraining mit Werner Gedigk.'],
    link: { label: 'Einladung (PDF)', url: UP + '2026/01/Tennis-Jahreshauptversammlung-2026.pdf' },
  },
  {
    id: 'ninja', date: '2025-09-15', dateLabel: 'September 2025', dept: 'verein', tag: 'Anlage', title: 'Ninja Parcours – öffentlich für jeden!', img: UP + '2025/09/etus-wedau-ninja-parcour.jpg',
    excerpt: 'Unser Ninja Parcours auf der Sportanlage ist öffentlich für jeden zugänglich.',
    body: ['Unser Ninja Parcours auf der Sportanlage ist öffentlich für jeden zugänglich. Kommt vorbei und probiert euch aus – ob Kids, Jugendliche oder Erwachsene.'],
  },
  {
    id: 'react-eu', date: '2025-07-15', dateLabel: 'Juli 2025', dept: 'verein', tag: 'Förderung', title: 'Rund 7.500 € Förderung aus REACT-EU', img: UP + '2025/07/React-EU.png', contain: true,
    excerpt: 'Mit Unterstützung des Stadtsportbunds Duisburg digitalisiert der ETuS Wedau seine Verwaltungsabläufe.',
    body: ['Die Digitalisierung hat alle Lebensbereiche erfasst – auch den Sport. Das REACT-EU-Programm ist eine Initiative der Europäischen Union, die die Digitalisierung in verschiedenen gesellschaftlichen Bereichen fördert.', 'Unser Verein hat sich um eine Förderung zur Digitalisierung seiner Verwaltungsabläufe beworben. Der Stadtsportbund Duisburg hat unseren Antrag für die digitale Ausstattung unterstützt: Insgesamt erhielt der Verein eine Förderung in Höhe von rund 7.500 Euro.'],
  },
];

/* ---------- Gaststätte ---------- */
const GASTRO = {
  name: 'Vereinsgaststätte ETuS Wedau',
  hosts: 'Jennifer und Frank Rasch',
  phone: '0203 721752',
  phoneHref: 'tel:+49203721752',
  // 0=So … 6=Sa, [von, bis] in Stunden; null = Ruhetag
  hours: { 0: [11, 22], 1: [16, 23], 2: [16, 23], 3: null, 4: [16, 23], 5: [16, 23], 6: [16, 23] },
  hoursText: [['Montag – Samstag', '16 – 23 Uhr'], ['Sonn- & Feiertage', '11 – 22 Uhr'], ['Mittwoch', 'Ruhetag']],
  images: [UP + '2025/08/biergarten.jpg', UP + '2025/09/etus-wedau-gaststaette1.jpg', UP + '2025/09/etus-wedau-gaststaette2.jpg', UP + '2025/09/etus-wedau-gaststaette3.jpg'],
};

/* ---------- Jugend: Altersstufen ---------- */
const YOUTH_STAGES = [
  { id: 'mini', title: 'Die Kleinsten', age: '3 – 6 Jahre', text: 'Spielerisch bewegen, Bälle fangen, toben und turnen – der erste Schritt in den Sport.', test: (g) => /3–5|ab 3|Minis|Jg\. 2020|Jg\. 2023/.test(g.group) },
  { id: 'kinder', title: 'Kinder', age: '6 – 10 Jahre', text: 'Grundlagen in Ballsport, Leichtathletik und Turnen – mit Spaß und ersten Spielen im Team.', test: (g) => g.age === 'kinder' && !/3–5|Minis/.test(g.group) },
  { id: 'jugend', title: 'Jugendliche', age: '10 – 17 Jahre', text: 'Training im Team, Spielbetrieb, Bogen- und Tennisjugend – und Platz für eigene Ziele.', test: (g) => g.age === 'jugend' },
];
