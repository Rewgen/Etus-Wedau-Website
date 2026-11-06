# ETuS Wedau – Website-Entwurf (Version 3)

Der kräftige Look aus Version 1 (Anthrazit + Signalgelb, sportliche Schrift, Gleis-Motive) kombiniert mit der Übersichtlichkeit aus Version 2. Dazu kommt, wie gewünscht:

- **Fotos nur dezent:** kleine, leicht entsättigte Vorschaubilder auf den Sportarten-Kacheln (in Farbe beim Darüberfahren), Fotos in den Köpfen der Abteilungsseiten, Teamfotos, Bilder auf der Seite „Aktuelles“, Gaststätte und Anlage. Der Kopf der Startseite bleibt grafisch.
- **Startseite erweitert, aber ruhig:** „Mehr als ein Sportverein“ mit Werten und Vereinsfilm (lädt erst nach Klick), dazu „Unsere Vereinsanlage“ mit drei Fotos, Ausstattung, „Anlage entdecken“ und „Feier anfragen“.
- **Keine Abfahrtstafel.** Es gibt nichts, was täglich gepflegt werden muss.
- **News nur dezent.** Auf der Startseite steht eine schmale Textzeile mit den drei neuesten Meldungen.
- **Für alle Altersgruppen:** „Was passt zu mir?“ mit Tabs für Kinder, Jugendliche, Erwachsene und Senior*innen.
- **Jugend gut sichtbar:** eigener Menüpunkt und „Jugend“-Kennzeichnung an den Abteilungskacheln.

## Navigation & Service (Runde 3)
- Klappmenüs für **Verein** (Über uns, Vorstand, Geschichte, Ehrenamt, Partner, Satzung), **Abteilungen** und **Anlage** (Vereinsanlage, Feiern & Vermietung, Ninja Parcours, Gaststätte, Anfahrt).
- **Infoleiste** oben mit Telefon, E-Mail, Adresse, Live-Status der Gaststätte, Instagram und Zugang „Intern“. Dazu ein schließbarer Hinweis zur geänderten Zufahrt.
- **Anlage-Seite** mit Sprungleiste (Symbole, mitlaufend), Anfrageformular „Feier anfragen“ und Ninja-Parcours-Foto. Die **Gaststätte** hat eine eigene Seite.
- **Partner:** dezentes Logo-Laufband auf der Startseite mit Hinweis „Partner werden“, eigene **Partnerseite** mit Logos, Unterstützungsformen, Spendenkonto und Anfrage.
- **Abteilungsübersicht** als Liste mit Altersgruppen, Trainingstagen und Ansprechpartner, damit sie sich von den Kacheln der Startseite unterscheidet.
- **Fotos je Abteilung:** Galerie mit Vergrößerung aus Abteilungsfotos und den Bildern der Abteilungs-News, also z. B. alle Tennisbilder unter Tennis.
- **Vorstand** mit aufklappbaren Aufgaben, Bereich **Mitmachen & Ehrenamt**, **Schnellleiste am Handy** (Start, Training, Anrufen, Mitglied).

## Einfache Extras
- **Was passt zu mir?** zeigt die passenden Gruppen mit Tagen und Uhrzeiten, direkt aus den Trainingsdaten.
- **„Heute“-Markierung** in allen Trainingstabellen. Sie ergibt sich automatisch aus dem Wochentag, es muss nichts gepflegt werden.
- **„In meinen Kalender“** an jeder Trainingszeit legt einen wöchentlich wiederkehrenden Termin an (Handy oder Outlook).
- **Live-Status der Gaststätte** aus den festen Öffnungszeiten.
- Karte erst nach Klick (Datenschutz), Formulare mit Pflichtfeldern, Klappmenü mit allen Abteilungen.

## Ansehen
`node tools/serve.js` starten und <http://localhost:5182> öffnen, oder `index.html` direkt im Browser öffnen.

## Seiten
Start · Verein (Vorstand, Chronik, Partner, Satzung) · Abteilungen + je eine Seite pro Abteilung · Kinder & Jugend · Trainingszeiten · Aktuelles · Anlage (Sportstätten, Ninja Parcours, Vermietung, Gaststätte, Anfahrt) · Mitglied werden · Kontakt · Impressum · Datenschutz

Alle Inhalte stehen zentral in `assets/js/data.js`.

## Noch offen
- Fehlende Trainingszeiten (Tischtennis, Seniorengymnastik, Sitz-Yoga, Segeln, Tennis-Uhrzeiten)
- Formulare sind Demo und müssen vor Livegang an den E-Mail-Versand angebunden werden
- Impressum und Datenschutz rechtlich prüfen
