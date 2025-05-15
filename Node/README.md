# Projekto API dokumentacija

Šis projektas yra Node.js + Express.js pagrindu sukurta REST API sistema, kuri tvarko įvairių duomenų resursus kaip vartotojus, užduotis, kategorijas ir kt.

## API funkcionalumas

### Vartotojai (`usersRoutes.js`)

- **GET /api/users**: Grąžina visus vartotojus.
- **GET /api/users/:id**: Grąžina konkretų vartotoją pagal ID.
- **POST /api/users**: Kuria naują vartotoją.
- **PUT /api/users/:id**: Atnaujina vartotojo duomenis.
- **DELETE /api/users/:id**: Pašalina vartotoją.

### Veiklos (`activityRoutes.js`)

- **GET /api/activities**: Grąžina visas veiklas/užduotis.
- **GET /api/activities/:id**: Grąžina konkrečią veiklą.
- **POST /api/activities**: Sukuria naują veiklą.
- **PUT /api/activities/:id**: Atnaujina veiklos duomenis.
- **DELETE /api/activities/:id**: Ištrina veiklą.

### Kategorijos (`categoryRoutes.js`)

- **GET /api/categories**: Gauti visas kategorijas.
- **POST /api/categories**: Sukurti naują kategoriją.
- **PUT /api/categories/:id**: Atnaujinti kategorijos pavadinimą.
- **DELETE /api/categories/:id**: Pašalinti kategoriją.

### Kiti resursai

- **Lecturer, Student, Subject, Video, Group ir kt.** — panašios funkcijos, veikiančios pagal atitinkamus route failus.

## Middleware ir saugumas

- **authMiddleware.js** — autentifikacijos ir autorizacijos patikros.
- **rolesMiddleware.js** — vaidmenų pagrindu leidžia arba blokuoja prieigą prie tam tikrų endpoint’ų.

## Duomenų bazė

- Projekto duomenys saugomi duomenų bazėje – konfigūracija ir ryšys nustatomas pagal atskirą `$config` arba `.env` failus (nurodoma, priklausomai nuo naudojamos DB).

## Paleisti projektą

1. Atsisiuntus arba klonuojant šį projektą, įdiegti priklausomybes:

```bash
npm install
```
