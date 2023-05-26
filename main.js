import * as THREE from 'three';
import { sun, sunAxis, sunRotate } from './Planets/sun.js'
import { mercury, mercuryOrbit, mercuryRing, mercurySpeed, mercuryAxis, mercuryRotate } from './Planets/mercury'
import { venus, venusOrbit, venusRing, venusSpeed, venusAxis, venusRotate } from './Planets/venus'
import { earth, earthOrbit, earthRing, earthSpeed, earthAxis, earthRotate } from './Planets/earth'
import { mars, marsOrbit, marsRing, marsSpeed, marsAxis, marsRotate } from './Planets/mars'
import { jupiter, jupiterOrbit, jupiterRing, jupiterSpeed, jupiterAxis, jupiterRotate } from './Planets/jupiter'
import { saturn, saturnOrbit, saturnRing, saturnSpeed, saturnAxis, saturnRotate, saturnRingPlanet } from './Planets/saturn'
import { uranus, uranusOrbit, uranusRing, uranusSpeed, uranusAxis, uranusRotate } from './Planets/uranus'
import { neptune, neptuneOrbit, neptuneRing, neptuneSpeed, neptuneAxis, neptuneRotate } from './Planets/neptune'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040, 0.2); // soft white light
scene.add(light);

const environmentTexture = new THREE.TextureLoader().load('./assets/star_milky.jpg');
scene.background = environmentTexture;


scene.add(sun);

//Mercury
scene.add(mercury);
scene.add(mercuryOrbit);
mercury.add(mercuryRing);
mercuryRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Venus
scene.add(venus);
scene.add(venusOrbit);
venus.add(venusRing);
venusRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Earth
scene.add(earth);
scene.add(earthOrbit);
earth.add(earthRing);
earthRing.rotation.x = Math.PI / 2; // Obrót wzdłuż osi X o 90 stopni

//Mars
scene.add(mars);
scene.add(marsOrbit);
mars.add(marsRing);
marsRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Jupiter
scene.add(jupiter);
scene.add(jupiterOrbit);
jupiter.add(jupiterRing);
jupiterRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Saturn
scene.add(saturn);
scene.add(saturnOrbit);
saturn.add(saturnRing);
saturnRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni
saturn.add(saturnRingPlanet);

//Uranus
scene.add(uranus);
scene.add(uranusOrbit);
uranus.add(uranusRing);
uranusRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni

//Neptune
scene.add(neptune);
scene.add(neptuneOrbit);
neptune.add(neptuneRing);
neptuneRing.rotation.x = Math.PI / 2; // Obrót wokół osi X o 90 stopni


let selectedPlanet = sun;
let isDragging = false;
let prevMouseX = 0;
let prevMouseY = 0;

const menuIds = ['modular-window', 'sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'time', 'Move', 'stop-animation', 'ars', 'CameraMove', 'cont', 'desc-holder', 'content', 'holdeofDescNames', 'planetName', 'descriptionName','descHolder','zakres'];



let test = false;
let closeIconHolder;

function selectPlanet(planet) {

  if (planet.name !== '') {

    let root = document.getElementById('cont');
    let content = document.createElement('div');
    content.classList.add('my-content');
    content.id = 'content'

    let planetName = document.createElement('div');
    planetName.classList.add('planet-name');
    planetName.id = 'planetName'

    let closeIconHolder = document.createElement('div');
    closeIconHolder.classList.add('close-icon');
    closeIconHolder.textContent = 'X';
    closeIconHolder.id = 'X'

    let holdeofDescNames = document.createElement('div')
    holdeofDescNames.classList.add('desc-names-holder')
    holdeofDescNames.id = 'holdeofDescNames'

    let descriptionName = document.createElement('div')
    descriptionName.classList.add('desc-name')
    descriptionName.textContent = 'description of the planet'
    descriptionName.id = 'descriptionName'

    let descriptionHolder = document.createElement('div')
    descriptionHolder.classList.add('description-holder')
    descriptionHolder.id = 'desc-holder text-break'


    if (test === true) {

      closeIconHolder.addEventListener('click', function () {

        root.removeChild(root.firstChild);
        test = false;
      });
      root.removeChild(root.firstChild);
      test = false;
    }

    if (test === false) {
      if (planet.name === 'Mercury') {
        planetName.textContent = 'Mercury';
        descriptionHolder.textContent = 'Merkury – najmniejsza i najbliższa Słońca planeta Układu Słonecznego. Jako planeta dolna znajduje się dla ziemskiego obserwatora zawsze blisko Słońca, dlatego jest trudna do obserwacji. Mimo to należy do planet widocznych gołym okiem i była znana już w starożytności. Merkurego dojrzeć można jedynie tuż przed wschodem lub tuż po zachodzie Słońca. Ukształtowanie powierzchni Merkurego przypomina Księżyc: są na nim liczne kratery uderzeniowe i pozbawiony jest on atmosfery. Temperatura powierzchni waha się od −173 °C do 427 °C. W przeciwieństwie do Księżyca, planeta ma jednak duże żelazne jądro, generujące pole magnetyczne stukrotnie słabsze od ziemskiego[4]. Rozmiar jądra sprawia, że Merkury ma jedną z największych gęstości spośród planet Układu Słonecznego[5] (Ziemia ma nieznacznie większą gęstość). Merkury nie ma naturalnych satelitów. Pierwsze udokumentowane obserwacje Merkurego sięgają pierwszego tysiąclecia p.n.e. Starożytni Grecy początkowo uważali, że są to dwa ciała niebieskie: pierwsze widzialne tylko przed wschodem Słońca (nazywali je Apollo), drugie widzialne tylko po zachodzie Słońca (nazywali je Hermesem)[6]. Starożytni Egipcjanie, Chaldejczycy oraz późniejsi astronomowie greccy wiedzieli, że Merkury widoczny o poranku i wieczorem jest tą samą planetą. Było to znane Egipcjanom już około 1150 roku p.n.e. Za sprawą szybkiego ruchu planety, powodowanego jej krótką orbitą, Rzymianie nadali planecie nazwę na cześć posłańca bogów i patrona handlarzy – Merkurego. Symbol astronomiczny planety to stylizowana wersja kaduceusza Hermesa[7]. W porównaniu z innymi planetami Układu Słonecznego o Merkurym wiadomo stosunkowo niewiele; ze względu na problemy natury technicznej zbadały go dotychczas tylko dwie sondy. Pierwsza z nich – Mariner 10 – w latach 1974–1975 trzykrotnie przeleciała obok Merkurego i wykonała mapy 45% powierzchni. Sonda MESSENGER w 2008 i 2009 roku dokonała trzech przelotów obok planety, po czym w latach 2011–2015 badała ją z orbity jako sztuczny satelita. Wystrzelona w 2018 roku sonda BepiColombo ma dotrzeć na orbitę wokół Merkurego w 2025 roku.'
        test = true;
      } else if (planet.name === 'Venus') {
        planetName.textContent = 'Venus';
        descriptionHolder.textContent = 'Wenus – druga pod względem odległości od Słońca planeta Układu Słonecznego. Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu. Jej obserwowana wielkość gwiazdowa sięga −4,6m. Ponieważ Wenus jest bliżej Słońca niż Ziemia, zawsze jest widoczna w niewielkiej odległości kątowej od niego; jej maksymalna elongacja to 47,8°. Odległość Wenus od Ziemi zmienia się w zakresie od około 40 mln km do około 259 mln km[2]. Nazwa planety wzięła się od rzymskiej bogini miłości, Wenus. Na niebie planeta jest widoczna przez około trzy godziny przed wschodem Słońca[3] nad wschodnim horyzontem lub po zachodzie Słońca[3] nad zachodnim horyzontem. Nieodłączna towarzyszka wschodzącego i zachodzącego Słońca, nazywana jest także Gwiazdą Poranną (Zaranną, Porankową) lub Jutrzenką (łac. Stella Matutina), kiedy zwiastuje wschód Słońca, albo Gwiazdą Wieczorną, która finalizuje jego zachód. Wenus jest klasyfikowana jako planeta skalista (inaczej: typu ziemskiego) i jest czasami nazywana „planetą bliźniaczą” albo „siostrą Ziemi” – ze względu na podobną wielkość, masę i skład chemiczny[4]. Atmosfera Wenus jest jednak zupełnie odmienna od ziemskiej. Jest pokryta nieprzezroczystą warstwą dobrze odbijających światło chmur kwasu siarkowego, które nie pozwalają na obserwację jej powierzchni z kosmosu w świetle widzialnym. Ma najgęstszą atmosferę ze wszystkich planet skalistych w Układzie Słonecznym, składającą się głównie z dwutlenku węgla. Na Wenus nie ma obiegu węgla, który powodowałby wiązanie węgla w skałach. Nie stwierdzono na niej również śladów organizmów żywych, które by go wiązały w biomasie. Istnieją przypuszczenia, że w przeszłości na Wenus były oceany, tak jak na Ziemi[5], ale odparowały, gdy temperatura powierzchni wzrosła. Obecny krajobraz Wenus jest suchy i pustynny, tworzony przez pokryte pyłem skały. Woda w atmosferze najprawdopodobniej dysocjowała, a z powodu braku pola magnetycznego, wodór został wywiany w przestrzeń międzyplanetarną przez wiatr słoneczny[6]. Ciśnienie atmosferyczne na powierzchni planety jest około 92 razy większe niż na Ziemi.'
        test = true;
      } else if (planet.name === 'Earth') {
        planetName.textContent = 'Earth';
        descriptionHolder.textContent = 'Ziemia (łac. Terra, Tellus; gr. Γαῖα, trb. Gaja) – trzecia, licząc od Słońca, oraz piąta pod względem wielkości planeta Układu Słonecznego. Pod względem średnicy, masy i gęstości jest to największa planeta skalista Układu Słonecznego. Ziemia jest zamieszkana przez miliony gatunków, w tym przez człowieka[9]. Jest jedynym znanym miejscem we Wszechświecie, w którym występuje życie[10]. Według danych zebranych metodą datowania izotopowego, planeta uformowała się ok. 4,54 ± 0,05 mld lat temu[11][8][12][13]. Prawdopodobnie w ciągu pierwszego miliarda lat po uformowaniu się Ziemi w oceanach pojawiło się życie. Z żyjących na Ziemi organizmów żywych składa się biosfera, która wpływa na jej atmosferę, hydrosferę, litosferę i inne czynniki abiotyczne planety, umożliwiając rozwój i wzrost liczby organizmów aerobowych i anaerobowych oraz powstanie ozonosfery. Rozwój życia na lądzie i w wodzie umożliwiła powłoka ozonowa oraz ziemskie pole magnetyczne, zmniejszając natężenie promieniowania ultrafioletowego[14], oraz magnetosfera, odbijająca cząstki wiatru słonecznego i promieniowania kosmicznego. Dystans dzielący Słońce od Ziemi, jej właściwości fizyczne oraz jej historia geologiczna są najważniejszymi czynnikami, które pozwoliły organizmom żyć i ewoluować. Różnorodność biologiczna Ziemi nieustannie powiększa się, chociaż w dziejach życia Ziemi proces ten był kilkukrotnie przerywany, kiedy miało miejsce masowe wymieranie gatunków[15]. Pomimo że naukowcy szacują, że ok. 99% gatunków organizmów żywych (ok. 5 mld)[16] kiedykolwiek zamieszkujących Ziemię uważa się za wymarłe[17][18], wciąż mieszka na niej ok. 10–14 mln gatunków[9][19], z czego 1,2 mln zostało udokumentowanych[20].'
        test = true;
      } else if (planet.name === 'Mars') {
        planetName.textContent = 'Mars';
        descriptionHolder.textContent = 'Mars – czwarta od Słońca planeta Układu Słonecznego. Krąży między orbitą Ziemi a pasem planetoid, dzielącym go od orbity Jowisza. Planeta została nazwana od imienia rzymskiego boga wojny – Marsa, zawdzięcza ją barwie, która przy obserwacji z Ziemi wydaje się rdzawo-czerwona i kojarzyła się starożytnym Rzymianom z pożogą wojenną. Odcień ten bierze się od tlenków żelaza pokrywających powierzchnię. Mars jest planetą wewnętrzną z cienką atmosferą, o powierzchni usianej kraterami uderzeniowymi, podobnie jak powierzchnia Księżyca i wielu innych ciał Układu Słonecznego. Występują na nim różne rodzaje terenu, podobne do ziemskich: wulkany, doliny, kaniony, pustynie i polarne czapy lodowe. Okres obrotu wokół własnej osi jest niewiele dłuższy niż ziemski i wynosi 24,6229 godziny (24 h 37 m 22 s). Na Marsie znajduje się najwyższy wulkan w Układzie Słonecznym – Olympus Mons i największy kanion – Valles Marineris. Gładki obszar równinny Vastitas Borealis na półkuli północnej, który obejmuje 40% powierzchni planety, może być pozostałością ogromnego uderzenia[2]. W przeciwieństwie do Ziemi, Mars jest mało aktywny geologicznie i nie ma tektoniki płyt. Do czasu pierwszego przelotu sondy Mariner 4 obok Marsa w 1965 roku spekulowano na temat obecności ciekłej wody na powierzchni planety. Podstawą spekulacji były obserwowane okresowe zmiany jasności obszarów powierzchni, w szczególności w pobliżu biegunów, które w obserwacjach teleskopowych wydawały się morzami i kontynentami. Długie ciemne linie na powierzchni, nazwane kanałami marsjańskimi, były interpretowane przez niektórych jako kanały nawadniające wybudowane przez istoty rozumne[3]. Ich obserwacje wytłumaczono później złudzeniem optycznym, ale spośród planet Układu Słonecznego poza Ziemią, występowanie na Marsie wody, a tym samym warunków do życia, jest wciąż najbardziej prawdopodobne[4]. Badania geologiczne zebrane przez bezzałogowe misje sugerują, że Mars miał kiedyś duże zasoby wody powierzchniowej, a małe wypływy wód podobne do gejzerów mogły występować w ciągu ostatniej dekady[5]'
        test = true;
      } else if (planet.name === 'Jupiter') {
        planetName.textContent = 'Jupiter';
        descriptionHolder.textContent = 'Jowisz – piąta w kolejności od Słońca i największa planeta Układu Słonecznego[b]. Masa Jowisza jest nieco mniejsza niż jedna tysięczna masy Słońca, a zarazem dwa i pół razy większa niż łączna masa pozostałych planet w Układzie Słonecznym. Wraz z Saturnem, Uranem i Neptunem tworzą grupę gazowych olbrzymów, nazywaną czasem również planetami jowiszowymi. Planetę znali astronomowie w czasach starożytnych, była związana z mitologią i wierzeniami religijnymi wielu kultur. Rzymianie nazwali planetę na cześć najważniejszego bóstwa swojej mitologii – Jowisza[3]. Obserwowany z Ziemi Jowisz może osiągnąć jasność do −2,95m. Jest to trzeci co do jasności naturalny obiekt na nocnym niebie po Księżycu i Wenus (okresowo, w momencie wielkiej opozycji, jasnością może mu dorównywać Mars). Największa planeta Układu Słonecznego składa się w trzech czwartych z wodoru i w jednej czwartej z helu; może posiadać także skaliste jądro złożone z cięższych pierwiastków. Szybka rotacja nadaje mu kształt spłaszczonej elipsoidy obrotowej (ma też niewielkie, ale zauważalne zgrubienie w płaszczyźnie równika). Powierzchnię planety, którą stanowią nieprzezroczyste wyższe warstwy atmosfery, pokrywa kilka warstw chmur, układających się w charakterystyczne pasy widoczne z Ziemi[c]. Najbardziej znanym szczegółem jego powierzchni jest odkryta w XVII wieku przy pomocy teleskopu Wielka Czerwona Plama, będąca antycyklonem o średnicy większej niż średnica Ziemi.'
        test = true;
      } else if (planet.name === 'Saturn') {
        planetName.textContent = 'Saturn';
        descriptionHolder.textContent = 'Saturn – gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości. Charakterystyczną jego cechą są pierścienie, składające się głównie z lodu i w mniejszej ilości z odłamków skalnych; inne planety-olbrzymy także mają systemy pierścieni, ale żaden z nich nie jest tak rozległy ani tak jasny. W maju 2023 roku znanych było 145 naturalne satelity Saturna, najwięcej wśród planet[2]. Promień Saturna jest około 9 razy większy od promienia Ziemi[3]. Chociaż jego gęstość to tylko jedna ósma średniej gęstości Ziemi, ze względu na wielokrotnie większą objętość masa Saturna jest dziewięćdziesiąt pięć razy większa niż masa Ziemi[4]. We wnętrzu Saturna panują wysokie ciśnienie i temperatura. Wnętrze gazowego olbrzyma najprawdopodobniej składa się z jądra z żelaza, niklu, krzemu i tlenu, otoczonego warstwą metalicznego wodoru, warstwy pośredniej ciekłego wodoru i ciekłego helu oraz zewnętrznej warstwy gazowej[5]. Prąd elektryczny w warstwie metalicznej wodoru generuje pole magnetyczne Saturna, które jest nieco słabsze niż pole magnetyczne Ziemi i ma około jedną dwudziestą natężenia pola wokół Jowisza[6]. Zewnętrzna warstwa atmosfery wydaje się na ogół spokojna, choć mogą się na niej utrzymywać długotrwałe układy burzowe. Na Saturnie wieją wiatry o prędkości ok. 1800 km/h; są one silniejsze niż na Jowiszu.'
        test = true;
      } else if (planet.name === 'Uranus') {
        planetName.textContent = 'Uranus';
        descriptionHolder.textContent = 'Uran − gazowy olbrzym, siódma od Słońca planeta Układu Słonecznego, trzecia pod względem wielkości i czwarta pod względem masy. Nazwa planety pochodzi od Uranosa, greckiego boga, uosobienia nieba (klasyczna greka: Οὐρανός), ojca Kronosa (Saturna) i dziada Zeusa (Jowisza). Choć jest widoczny gołym okiem[b] podobnie jak pięć innych planet, umknął uwadze starożytnych obserwatorów z powodu małej jasności i powolnego ruchu po sferze niebieskiej[3]. William Herschel ogłosił odkrycie planety 13 marca 1781, po raz pierwszy w historii rozszerzając znane granice Układu Słonecznego. Uran to również pierwsza planeta odkryta przy pomocy teleskopu. Uran budową i składem chemicznym przypomina Neptuna, a obie planety mają odmienną budowę i skład niż większe gazowe olbrzymy: Jowisz i Saturn. Astronomowie czasem umieszczają je w oddzielnej kategorii „lodowych olbrzymów”. Atmosfera Urana, chociaż składa się głównie z wodoru i helu (podobnie jak atmosfery Jowisza i Saturna), zawiera więcej zamrożonych substancji lotnych (tzw. lodów) niż atmosfery większych planet-olbrzymów; są to substancje takie jak woda, amoniak i metan oraz śladowe ilości węglowodorów[4]. Jest najzimniejszą atmosferą planetarną w Układzie Słonecznym; minimalna temperatura to 49 K (−224 °C). Ma ona złożoną, warstwową strukturę. Uważa się, że jej najniższe chmury tworzy woda, a najwyższa warstwa chmur jest utworzona z kryształków metanu[4]. Z kolei wnętrze Urana składa się głównie z lodów i skał[5].'
        test = true;
      } else if (planet.name === 'Neptune') {
        planetName.textContent = 'Neptune';
        descriptionHolder.textContent = 'Neptun – gazowy olbrzym, ósma, najdalsza planeta w Układzie Słonecznym, czwarta pod względem średnicy i trzecia pod względem masy. Neptun jest ponad 17 razy masywniejszy od Ziemi i masywniejszy od swojego "bliźniaka" Urana, który ma masę prawie 15 razy większą od masy Ziemi[b]. Krąży wokół Słońca w odległości około 30 razy większej niż dystans Ziemia-Słońce. Nazwa pochodzi od rzymskiego boga mórz Neptuna. Jego symbol astronomiczny to Neptune symbol.svg, stylizowany trójząb Neptuna. Odkryty 23 września 1846[4] Neptun jest jedyną planetą Układu Słonecznego, której istnienie wykazano nie na podstawie obserwacji nieba, ale na drodze obliczeń matematycznych. Niespodziewane zmiany w ruchu orbitalnym Urana doprowadziły astronomów do wniosku, że podlega on perturbacjom pochodzącym od nieznanej planety. Neptun został następnie zaobserwowany przez Johanna Galla w miejscu przewidzianym przez Urbaina Le Verriera, a wkrótce został też odkryty jego największy księżyc, Tryton; żaden z pozostałych 13 znanych dziś księżyców Neptuna nie został odkryty za pomocą teleskopu aż do XX wieku. Neptun został odwiedzony przez tylko jedną sondę kosmiczną, Voyager 2, która przeleciała w pobliżu planety 25 sierpnia 1989. Neptun przypomina składem Urana, co odróżnia je od większych gazowych olbrzymów, Jowisza i Saturna. Atmosfera Neptuna, choć – podobnie jak na Jowiszu i Saturnie – składa się głównie z wodoru i helu wraz ze śladami węglowodorów i prawdopodobnie azotu, zawiera większą ilość tzw. „lodów”, czyli substancji lotnych w warunkach ziemskich, takich jak woda, amoniak i metan. Astronomowie czasami kategoryzują Urana i Neptuna jako „lodowe olbrzymy” w celu podkreślenia tych różnic[5]. Wnętrze Neptuna, podobnie jak Urana, składa się głównie z lodów i skał[6]. Ślady metanu w zewnętrznych obszarach planety przyczyniają się do nadania jej charakterystycznego niebieskiego koloru[7].'
        test = true;
      } else if (planet.name === 'Sun') {
        planetName.textContent = 'Sun';
        descriptionHolder.textContent = 'Słońce (łac. Sol, gr. Ἥλιος, trb. Hḗlios; symbol: ☉) – gwiazda centralna Układu Słonecznego, wokół której krąży Ziemia, inne planety tego układu, planety karłowate oraz małe ciała Układu Słonecznego. Słońce składa się z gorącej plazmy utrzymywanej przez grawitację i kształtowanej przez pole magnetyczne. Jest prawie idealnie kuliste[13][14]. Ma średnicę około 1 392 684 km[3], około 109 razy większą niż Ziemia, a jego masa (1,989 ×1030 kg, około 333 tysięcy razy większa niż masa Ziemi (M⊕)) stanowi około 99,86% całkowitej masy Układu Słonecznego[15]. Około trzy czwarte masy Słońca stanowi wodór, resztę głównie hel. Pozostałe 1,69% (co odpowiada około 5600 M🜨) tworzą cięższe pierwiastki, w tym m.in. tlen, węgiel, neon i żelazo[16]. Słońce uformowało się około 4,567 mld lat temu[9] na skutek zapadania grawitacyjnego obszaru w dużym obłoku molekularnym. Większość materii zgromadziła się w centrum, a reszta utworzyła orbitujący wokół niego spłaszczony dysk, z którego ukształtowała się pozostała część Układu Słonecznego. Centralna część stawała się coraz gęstsza i gorętsza, aż w jej wnętrzu rozpoczęła się synteza termojądrowa. Naukowcy sądzą, że niemal wszystkie gwiazdy powstają na skutek tego procesu. Słońce jest typu widmowego G2 V, czyli należy do tzw. żółtych karłów ciągu głównego. Widziane z Ziemi ma barwę białą[17]. Oznaczenie typu widmowego „G2” wiąże się z jego temperaturą efektywną równą 5778 K (5505 °C). Oznaczenie klasy widmowej „V” wskazuje, że Słońce należy do ciągu głównego gwiazd i generuje energię w wyniku fuzji jądrowej, łącząc jądra wodoru w hel. W ciągu sekundy Słońce przetwarza w jądrze około 620 mln ton wodoru[18][19].'
        test = true;
      }
      content.append(planetName, closeIconHolder, descriptionName, descriptionHolder);
      root.append(content);
    }


    selectedPlanet = planet;
    camera.lookAt(selectedPlanet.position);
  }

}

if (test) {
  let XIcon = document.getElementById('X');
  XIcon.addEventListener('click', function () {
    let content = document.getElementById('content');
    if (content) {
      content.remove();
      test = false;
    }
  });
}

function handleCloseIconClick() {
  content.remove();
}

if (closeIconHolder !== undefined) {
  closeIconHolder.addEventListener('click', handleCloseIconClick);
}



function onMouseDown(event) {
  const clickedElementId = event.target.id;

  if (!menuIds.includes(clickedElementId)) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      selectPlanet(intersects[0].object);
    }

    isDragging = true;
  }

}
function onMouseMove(event) {
  if (isDragging) {
    const movementX = event.clientX - prevMouseX;
    const movementY = event.clientY - prevMouseY;

    const rotationSpeed = 0.01;
    const rotationX = movementY * rotationSpeed;
    const rotationY = movementX * rotationSpeed;

    camera.position.sub(selectedPlanet.position);
    camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationY);
    camera.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotationX);
    camera.position.add(selectedPlanet.position);

    camera.lookAt(selectedPlanet.position);
  }

  prevMouseX = event.clientX;
  prevMouseY = event.clientY;
}

function onMouseUp(event) {
  isDragging = false;
}


function onScroll(event) {
  const scrollElementId = event.target.id;
  

  if (!menuIds.includes(scrollElementId)) {
  const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

  const zoomSpeed = 0.1;
  const zoomFactor = 1 + delta * zoomSpeed;

  const distance = camera.position.distanceTo(selectedPlanet.position);

  let minDistance;

  switch (selectedPlanet.name) {
    case 'Sun':
      minDistance = 12;
      break;
    case 'Jupiter':
      minDistance = 1.5;
      break;
    case 'Uranus':
      minDistance = 0.5;
      break;
    case 'Saturn':
      minDistance = 1.5;
      break;
    case 'Mercury':
      minDistance = 0.15;
      break;
    case 'Mars':
      minDistance = 0.16;
      break;
    case 'Venus':
      minDistance = 0.2;
      break;
    case 'Earth':
      minDistance = 0.20;
      break;
    case 'Neptune':
      minDistance = 0.6;
      break;
  }
  if ((distance > minDistance && distance <= 2000) || (distance <= minDistance && delta > 0) || (distance > 2000 && delta < 0)) {
    const cameraPosition = camera.position.clone().sub(selectedPlanet.position).multiplyScalar(zoomFactor).add(selectedPlanet.position);
    camera.position.copy(cameraPosition);
  }
  }
}

const planetsRing = [
  { planet: mercury, ring: mercuryRing, speed: mercurySpeed },
  { planet: venus, ring: venusRing, speed: venusSpeed },
  { planet: earth, ring: earthRing, speed: earthSpeed },
  { planet: mars, ring: marsRing, speed: marsSpeed },
  { planet: jupiter, ring: jupiterRing, speed: jupiterSpeed },
  { planet: saturn, ring: saturnRing, speed: saturnSpeed },
  { planet: uranus, ring: uranusRing, speed: uranusSpeed },
  { planet: neptune, ring: neptuneRing, speed: neptuneSpeed }
];

const planetsRotate = [
  { planet: sun, planetAxis: sunAxis, planetRotate: sunRotate },
  { planet: mercury, planetAxis: mercuryAxis, planetRotate: mercuryRotate },
  { planet: venus, planetAxis: venusAxis, planetRotate: venusRotate },
  { planet: earth, planetAxis: earthAxis, planetRotate: earthRotate },
  { planet: mars, planetAxis: marsAxis, planetRotate: marsRotate },
  { planet: jupiter, planetAxis: jupiterAxis, planetRotate: jupiterRotate },
  { planet: saturn, planetAxis: saturnAxis, planetRotate: saturnRotate },
  { planet: uranus, planetAxis: uranusAxis, planetRotate: uranusRotate },
  { planet: neptune, planetAxis: neptuneAxis, planetRotate: neptuneRotate },
];

function updateRingScale() {
  planetsRing.forEach(({ planet, ring }) => {
    const distance = planet.position.distanceTo(camera.position);
    const scale = Math.sqrt(distance) * 8;
    ring.scale.set(scale, scale, 1);
  });
}

let number = 1;
let times = document.getElementById('time');
times.addEventListener('change', () => {
  number = times.value;
});


let orginalMarsPosition = mars.position

function rotatePlanets() {
  planetsRing.forEach(({ planet, speed }) => {
    if (movable) {
      const orbitCenter = new THREE.Vector3(0, 0, 0); // Środek orbity
      const axis = new THREE.Vector3(0, 1, 0); // Oś Y (wzdłuż pionowej osi Y)
      const rotationSpeed = speed * number; // Prędkość obrotu (w radianach na klatkę)

      planet.position.applyAxisAngle(axis, rotationSpeed);
      planet.position.add(orbitCenter);

      planet.rotation.y += rotationSpeed;


      if (follow) {
        // Aktualizacja pozycji kamery względem planety
        camera.position.copy(selectedPlanet.position); // Ustawienie pozycji kamery na pozycję planety
        const cameraOffset = new THREE.Vector3(0, 130, -200); // Przesunięcie kamery względem planety (można dostosować)
        cameraOffset.applyQuaternion(selectedPlanet.quaternion); // Zastosowanie rotacji planety do przesunięcia kamery
        camera.position.add(cameraOffset);
        camera.lookAt(selectedPlanet.position); // Skierowanie kamery w stronę planety
      }
    }
  });
}

// Funkcja renderująca scenę
function renderScene() {
  rotatePlanets();

  // Renderowanie sceny (kod renderowania nie jest zawarty w przykładzie, należy go dodać odpowiednio do Twojego kodu)
  // renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  renderScene();
  updateRingScale();

  planetsRotate.forEach(({ planet, planetAxis, planetRotate }) => {
    planet.rotateOnAxis(planetAxis, planetRotate);
  });

  renderer.render(scene, camera);
}


let movable = false;
let handleMove = document.getElementById('Move');
handleMove.addEventListener('click', () => {
  movable = true;
});

let pauseAnimation = document.getElementById('stop-animation')
pauseAnimation.addEventListener('click', (() => {
  movable = false
}))

let follow = false;
let handleCameraMove = document.getElementById('CameraMove');
handleCameraMove.addEventListener('click', () => {
  follow = !follow;
});

// Dodawanie nasłuchiwania na zdarzenia myszy
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('wheel', onScroll);
document.addEventListener('mouseup', onMouseUp, false);


const planetElements = document.querySelectorAll("#modular-window div");

planetElements.forEach((planet) => {
  planet.addEventListener("click", onPlanetClick);
});

function onPlanetClick(event) {
  const planetId = event.target.id;

  switch (planetId) {
    case "sun":
      selectPlanet(sun);
      break;
    case "mercury":
      selectPlanet(mercury);
      break;
    case "venus":
      selectPlanet(venus);
      break;
    case "earth":
      selectPlanet(earth);
      break;
    case "mars":
      selectPlanet(mars);
      break;
    case "jupiter":
      selectPlanet(jupiter);
      break;
    case "saturn":
      selectPlanet(saturn);
      break;
    case "uranus":
      selectPlanet(uranus);
      break;
    case "neptune":
      selectPlanet(neptune);
      break;
    default:
      break;
  }
}


// Ustawianie pozycji kamery
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 20;
camera.far = 4000;
camera.updateProjectionMatrix();

animate();