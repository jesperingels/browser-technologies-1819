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
```body {font-family: sans-serfif;}```
Hierdoor zal de browser het font pakken wat als standaard font is 
ingesteld in de browser van de gebruiker. Zolang het maar sans-serif is.

__Wat kan ik aanpassen in de code?__ <br/>
Op dit moment gebruik ik geen custom font. Maar vraag ik aan de browser om zelf een 
font te kiezen dat sans-serif is. Dus heb ik deze feature in de app al geoptimaliseerd.
