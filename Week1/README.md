# Browser Technologies - Opdracht 1.2

### Uitleg 'OBAr' 
*(De app die ik in de projectweek gemaakt heb)*

Scan een willekeurig boek in de OBA. Met een API request wordt de 
data van het betreffende boek opgehaald en aan de gebruiker getoond. 
Met de AR (Augmented Reality) functie wordt er een zwevende video boven 
het boek getoond. De video verteld iets extra’s over het boek. Het is 
zo ook mogelijk om bijvoorbeeld gerelateerde boeken met de AR functie 
te tonen.

## 8 Features testen
#### Afbeeldingen uitzetten
Het uitzetten van de afbeeldingen in de app heeft weinig tot geen
gevolgen voor de bruikbaarheid van de app. Wanneer de barcode is gescand
wordt de titel en de cover afbeelding van het boek opgehaald vanuit de API
Dus dit is het enige wat niet getoond wordt wanneer de afbeeldingen uit 
staan. De gebruiker krijgt nog wel de titel van het boek te zien dus 
weet de gebruiker zeker dat hij/zij het juiste boek heeft gescand.

__Wat kan ik aanpassen in de code?__ <br/>
* Ik kan een alt text toevoegen aan de afbeelding met: alt="book-cover"

#### Custom fonts uitzetten
Ik gebruik geen custom fonts in mijn app. Ik geef aan de body een 
font-family= sans-serif mee: <br/>
```body {font-family: sans-serif;}``` <br/>
Hierdoor zal de browser het font pakken wat als standaard font is 
ingesteld in de browser van de gebruiker. Zolang het maar sans-serif is.

__Wat kan ik aanpassen in de code?__ <br/>
Op dit moment gebruik ik geen custom font. Maar vraag ik aan de browser om zelf een 
font te kiezen dat sans-serif is. Dus heb ik deze feature in de app al geoptimaliseerd.

#### Kleur uitzetten & kleurenblindheid instellen
Het uitzetten van de kleur d.m.v. extensies in chrome hebben geen invloed 
op de bruikbaarheid van de app. Ik heb hiervoor de extension: [greyscale](https://chrome.google.com/webstore/detail/grayscale-remove-colors/pngnpiiifdbbifjfojhnnhdnonfjonfl)
en [colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa)
gebruikt. 

__Wat kan ik aanpassen in de code?__ <br/>
Ik zou niks aanpassen aan de code aangezien er al een hoog kleur contrast in de app zit.

#### Muis/Trackpad werkt niet
De app heeft een hele simpele User Interface. Elke pagina is er 1 knop wat ook daadwerkelijk een semantische html ```<button>``` is. 
Door <kbd>Tab</kbd> en <kbd>Enter</kbd> te gebruiken kan je elke knop gebruiken. Er is dus 
geen muis of trackpad nodig om mijn app te gebruiken.

__Wat kan ik aanpassen in de code?__ <br/>
De app is heel simpel que navigatie daarom is er dus makkelijk om je toetsenbord te gebruiken
om door de app te navigeren. Ik zou dus niks aanpassen in m'n code.

#### Breedband internet uitzetten
Het inladen van de app op traag 3G internet duurt ongeveer 26 seconden.
Dit is natuurlijk super langzaam. Dit komt omdat ik heel veel JS libraries inlaad. 
Voor het scannen van de barcode wordt een library ingeladen en voor het gebruiken 
van de AR functionaliteit. 

__Wat kan ik aanpassen in de code?__ <br/>
* De library voor het gebruiken van de barcode scanner zou ik kunnen verwijderen. 
Door middel van een input veld kan de gebruiker ook handmatig de ISBN code invoeren van het boek.
Op deze manier zal de laadtijd aanzienlijk sneller zijn. 

* Om de gebruiker weinig te laten merken van de laadtijd kan ik er voor zorgen dat de gebruiker
wel op de 1e knop kan klikken door eerst quagga.js (barcode library) in te laden.
Vervolgens een script wat een event listener toevoegd aan de knop. en daarna de andere libraries pas
die ik ook pas na het scannen van de barcode nodig heb. *Dit werkt alleen door het async in te laden*

#### Javascript
Omdat ik heel veel libraries inlaadt zal het concept een beetje verloren gaan als alle javascript wordt 
uitgeschakeld. Ik kan wel de basis functionaliteit behouden door zelf een vervanging 
voor de libraries te maken. 

__Wat kan ik aanpassen in de code?__ <br/>
* Barcode scanner library (quagga.js) verwijderen. Een input veld toevoegen op de plek
van de barcode scanner, zodat de gebruiker handmatig de isbn-code kan invoeren.

* De data die normaal gesproken via een api request zou binnen komen, lokaal opslaan.
Op deze manier kan er maar een bepaald aantal boeken worden gescand. 

* In plaats van de AR video die bij het boek hoort, zonder AR afspelen. 

#### Cookies
De app maakt geen gebruik van cookies...

#### localStorage
De app maakt geen gebruik van localStorage...
















