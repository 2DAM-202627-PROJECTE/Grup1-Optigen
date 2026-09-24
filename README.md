# Optigen

> Plataforma web d'optimització d'equips pensada per ajudar els usuaris a analitzar i millorar el rendiment dels seus sistemes de manera senzilla i accessible.

## 1. Sobre el projecte

**Optigen** és una plataforma web SaaS orientada a la configuració i optimització de PCs i equips.

L'usuari accedeix a Optigen des del navegador, selecciona el seu sistema, hardware i les optimitzacions que vol aplicar, i la plataforma genera un **script personalitzat** a partir d'aquestes seleccions.

Optigen no requereix instal·lar cap aplicació pròpia al dispositiu.

La plataforma està pensada per funcionar amb:

* Windows
* Ubuntu

Ambdues plataformes formen part del producte i segueixen la mateixa filosofia d'ús.

---

## 2. Problema que solucionem

Configurar i optimitzar un PC pot requerir modificar nombrosos paràmetres del sistema, instal·lar o desinstal·lar components, ajustar configuracions i executar diferents ordres.

Això pot resultar complicat per a usuaris que:

* no saben exactament quins ajustos han d'aplicar;
* no volen buscar manualment cada configuració;
* no saben quins ajustos són compatibles amb el seu sistema;
* volen tenir més control sobre què estan modificant;
* volen disposar d'una configuració preparada per al seu equip.

Optigen centralitza aquest procés en una única experiència web.

### El servei permet:

1. Configurar diferents opcions d'optimització.
2. Analitzar possibles elements que poden afectar el rendiment.
3. Facilitar la gestió de fitxers temporals.
4. Oferir configuracions predefinides.
5. Crear perfils segons diferents necessitats.
6. Adaptar les configuracions segons el maquinari de l'usuari.
7. Generar scripts personalitzats segons la configuració seleccionada.
8. Permetre configurar les opcions manualment.
9. Centralitzar les opcions d'optimització en una única plataforma web.

---

## 3. A qui va dirigit?

Optigen està orientat principalment a:

* Gamers
* Usuaris que volen optimitzar el seu PC
* Usuaris avançats
* Entusiastes de hardware
* Usuaris que volen configurar Windows o Ubuntu
* Persones que volen generar configuracions personalitzades sense haver de crear manualment els scripts

---

## 4. Com funciona?

L'usuari accedeix a la plataforma des del navegador i selecciona el tipus d'optimització que necessita.

```text
Usuari
   ↓
Plataforma web
   ↓
Selecció del perfil
   ↓
Configuració del maquinari
   ↓
Configuració de l'optimització
   ↓
┌─────────────────────────────┐
│                             │
│  Configuració manual        │
│           o                 │
│  Generació d'script         │
│                             │
└─────────────────────────────┘
   ↓
Aplicació / execució
   ↓
Resultat
```

El servei està disponible en qualsevol moment des de la web.

### Perfils de configuració

La plataforma ofereix diferents perfils d'optimització adaptats a les necessitats de cada usuari.

Exemples:

1. **Rendiment** — Configuració orientada a prioritzar el rendiment del sistema.
2. **Equilibrat** — Configuració general pensada per a un ús diari.
3. **Neteja** — Orientada a la gestió de fitxers temporals i elements innecessaris.
4. **Gaming** — Configuració orientada a l'ús de videojocs.
5. **Personalitzat** — Permet seleccionar manualment les opcions que es volen analitzar o configurar.

### Configuració del maquinari

Per adaptar les recomanacions i configuracions al sistema de l'usuari, la plataforma permet seleccionar determinades característiques del maquinari.

#### Processador

L'usuari podrà seleccionar el fabricant del seu processador:

* **Intel**
* **AMD**

#### Targeta gràfica

L'usuari també podrà seleccionar el fabricant de la seva targeta gràfica:

* **NVIDIA**
* **AMD**

Aquestes opcions permetran adaptar les configuracions i els scripts generats segons el maquinari seleccionat.

---

## 5. Configuració i generació d'scripts

La configuració manual i la generació de l'script formen part del mateix procés.

Optigen no té un mode d'aplicació manual separat.

L'usuari:

```text
Selecciona plataforma
        ↓
Selecciona hardware
        ↓
Selecciona perfil
        ↓
Selecciona les optimitzacions
        ↓
Revisa la configuració
        ↓
Genera l'script
        ↓
Descarrega l'script
        ↓
Executa localment
```

L'script resultant conté les accions corresponents a les opcions seleccionades per l'usuari.

---

## 6. Scripts per plataforma

Optigen genera scripts específics segons el sistema operatiu seleccionat.

### Windows

Les configuracions de Windows generen scripts compatibles amb l'entorn de Windows, principalment mitjançant PowerShell.

Exemple:

```text
optigen-config.ps1
```

### Ubuntu

Les configuracions d'Ubuntu generen scripts compatibles amb l'entorn Linux/Ubuntu, principalment mitjançant Bash.

Exemple:

```text
optigen-config.sh
```

La plataforma, les opcions disponibles i les accions generades s'adapten al sistema seleccionat.

---

## 7. Execució local

Optigen és una plataforma web i no modifica directament el sistema operatiu de l'usuari des del navegador.

Quan una configuració necessita realitzar accions sobre el sistema, Optigen genera l'script corresponent.

L'usuari:

1. Revisa la configuració.
2. Genera l'script.
3. El descarrega.
4. El revisa si ho considera necessari.
5. L'executa localment al seu equip.

Aquesta arquitectura permet mantenir Optigen com una plataforma web sense necessitat d'instal·lar un agent o aplicació permanent.

---

## 8. Experiència d'usuari

L'experiència d'Optigen està dissenyada perquè el procés sigui clar i visual.

El sistema ha de permetre que l'usuari entengui:

* quin sistema està configurant;
* quin hardware ha seleccionat;
* quin perfil està utilitzant;
* quines optimitzacions ha seleccionat;
* quins canvis formaran part de l'script;
* quin script es generarà.

La transparència de la configuració és una part important de l'experiència del producte.

---

## 9. Plataforma web

Optigen és un **SaaS 100% web** accessible des del navegador.

La plataforma centralitza:

* configuració dels equips;
* perfils;
* selecció d'optimitzacions;
* lògica de compatibilitat;
* generació d'scripts;
* comptes d'usuari;
* funcionalitats Free i Pro.

L'usuari no necessita instal·lar cap aplicació pròpia d'Optigen.

L'únic element que pot sortir de la plataforma és l'script generat, que l'usuari executa localment quan sigui necessari.

---

## 10. Seguretat i transparència

Optigen està dissenyat perquè l'usuari tingui visibilitat sobre la configuració que ha seleccionat abans de generar l'script.

La plataforma ha d'evitar generar accions que no corresponguin a les opcions seleccionades per l'usuari.

Els scripts generats són artefactes locals que l'usuari pot revisar abans d'executar-los.

Optigen no necessita mantenir un agent permanent executant-se al sistema de l'usuari.

---

## 11. Tecnologies

La tecnologia definitiva del projecte es definirà durant el desenvolupament.

A nivell conceptual, Optigen necessita:

### Frontend

Interfície web per:

* configuració;
* selecció de hardware;
* perfils;
* optimitzacions;
* generació d'scripts;
* compte d'usuari.

### Backend

Responsable de:

* autenticació;
* gestió d'usuaris;
* plans;
* configuracions;
* lògica de generació;
* compatibilitat entre plataforma, hardware i optimitzacions.

### Generador d'scripts

Sistema encarregat de convertir les seleccions de l'usuari en un script compatible amb la plataforma seleccionada.

---

## 12. Model de negoci

Optigen disposarà de dos plans:

### Free

Accés gratuït a les funcionalitats bàsiques d'Optigen.

### Pro

Accés a funcionalitats premium i opcions avançades.

Les funcionalitats exactes incloses en cada pla es definiran durant el desenvolupament del producte.

---

## 13. Estat del projecte

**Estat actual:** [En desenvolupament / Beta / Disponible]

## 14. Contacte

**Web:** [URL]

**Email:** xaviersans@iesebre.com / davidstaicu@iesebre.com

**GitHub:** [UrlRepositori](https://github.com/2DAM-202627-PROJECTE/Grup1)
