# Optigen

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

El funcionament d'Optigen es basa en quatre passos principals:

### 1. Selecció de plataforma

L'usuari selecciona el sistema que utilitza:

* Windows
* Ubuntu

### 2. Configuració del hardware

L'usuari indica la configuració del seu equip, incloent-hi els components compatibles amb Optigen.

Actualment, les principals opcions de hardware contemplades són:

* CPU Intel
* CPU AMD
* GPU NVIDIA
* GPU AMD

### 3. Selecció de les optimitzacions

L'usuari selecciona manualment les opcions que vol aplicar al seu sistema.

Aquest procés constitueix la configuració personalitzada d'Optigen.

Les opcions disponibles depenen de la plataforma i del hardware seleccionats.

### 4. Generació de l'script

A partir de totes les seleccions realitzades, Optigen genera un script personalitzat compatible amb el sistema de l'usuari.

L'usuari pot descarregar-lo i executar-lo localment al seu equip.

---

## 5. Perfils d'optimització

Optigen ofereix diferents perfils predefinits per facilitar la configuració:

1. **Rendiment**
2. **Equilibrat**
3. **Neteja**
4. **Gaming**
5. **Personalitzat**

Els perfils serveixen com a punt de partida per configurar les optimitzacions.

El perfil **Personalitzat** permet a l'usuari seleccionar manualment les opcions disponibles segons les seves necessitats.

---

## 6. Configuració i generació d'scripts

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

## 7. Scripts per plataforma

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

## 8. Execució local

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

## 9. Experiència d'usuari

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

## 10. Plataforma web

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

## 11. Seguretat i transparència

Optigen està dissenyat perquè l'usuari tingui visibilitat sobre la configuració que ha seleccionat abans de generar l'script.

La plataforma ha d'evitar generar accions que no corresponguin a les opcions seleccionades per l'usuari.

Els scripts generats són artefactes locals que l'usuari pot revisar abans d'executar-los.

Optigen no necessita mantenir un agent permanent executant-se al sistema de l'usuari.

---

## 12. Tecnologies

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

## 13. Model de negoci

Optigen disposarà de dos plans:

### Free

Accés gratuït a les funcionalitats bàsiques d'Optigen.

### Pro

Accés a funcionalitats premium i opcions avançades.

Les funcionalitats exactes incloses en cada pla es definiran durant el desenvolupament del producte.

---

## 15. Estat del projecte

Optigen es troba en fase de desenvolupament i definició del producte.

Les prioritats actuals són:

* definir l'experiència web;
* dissenyar la interfície de configuració;
* definir el sistema de perfils;
* definir les optimitzacions disponibles;
* establir la compatibilitat entre sistemes i hardware;
* desenvolupar el sistema de generació d'scripts;
* implementar el sistema d'usuaris i plans;
* construir la plataforma SaaS.

Windows i Ubuntu formen part de l'abast del producte com a plataformes equivalents.
