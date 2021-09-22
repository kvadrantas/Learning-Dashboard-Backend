-- 1. UZKLAUSA IS TOS PACIOS LENTELES KELIS KARTUS
-- 2. INSERT
-- 3. DELETE
-- 4. UPDATE
-- 5. JOIN

-- ----------------------------------------------------------------
-- Galima daryti uzklausa is tos pacios lenteles kelis kartus
-- From zonoje, jei to reikia
-- norint istraukti reikiamus duomenis
  
select
--     city.id,
    city.name as miestas,
    city.CountryCode as kodas,
    country.name as valstybe,
    count(*) as oficialios_kalbos,
    sostines.name as sostine
from
    country,
    city,
    countrylanguage,
    city as sostines
where
    country.code = city.CountryCode and
    country.code = countrylanguage.CountryCode and
    country.Capital = sostines.id and
    IsOfficial = 'T' and
    (continent = 'africa' or continent = 'europe')
group by
    city.id,
    city.name,
    city.CountryCode,
    country.name,
    sostines.name
having count(*) > 1
order by
    count(*) desc,
    country.name;
    
    
-- ----------------------------------------------------------------
-- SUPERLENTELE
-- 4079 * 4079 = 16638241 irasu (visos kombinacijos is abieju lenteliu)

select count(*)
from city c1, city c2;

-- ----------------------------------------------------------------

select c1.name, c2.Name as sostine
from city c1, city c2, country
where c1.CountryCode = country.Code and country.Capital = c2.id and c1.CountryCode = 'LTU';


-- ----------------------------------------------------------------
-- INSERT

-- VEDAM DUOMENIS TOKIA TVARKA KAIP SUKURTI STULPELIAI LENTELEJE
INSERT INTO city
VALUES (5000, 'Balbieriškis', 'LTU', 'Prienų', 966);

-- VEDAM DUOMENIS SAVO TVARKA, KADANGI NUSIRODEM EILISKUMA PATYS
-- siuo metodu galima praleisti ir id, kuris sukuriamas automatiskai
INSERT INTO city (countrycode, district, name, population)
VALUES ('LTU', 'Jurbarko', 'Klausučiai', 902);

-- ----------------------------------------------------------------
-- UPDATE
-- irasu pakeitimas (VISU, kurie atitinka salyga)

UPDATE city
SET district = 'Jurbarko sav.', population = population + 3
WHERE id = 5001;

UPDATE city
SET population = population + 10
WHERE countrycode = 'LTU';

-- ----------------------------------------------------------------
-- !!!!!!!!!!!
-- WORKBENCHAS TURI APSAUGA NUO MASINIO DUOMENU KEITIMO BE WHERE STATEMENT
-- Preferences -> SQL Editor -> Safe Updates (reject updates and deletes with no restriction)

-- ----------------------------------------------------------------
-- DELETE
-- irasu ISTRINIMAS (VISU, kurie atitinka salyga)

DELETE FROM city
WHERE id = 5000;

DELETE FROM city
WHERE countrycode = 'AFG';

-- DML - data manipulation language sudaro komandos skirtos duomenu kurimui/keitimui/trynimui (lenteles irasu):
-- INSERT
-- UPDATE
-- DELETE

-- DDL - data definition language sudaro komandos skirtos objektu kurimui/keitimui/trynimui (lenteliu, DB ir tt.):
-- CREATE
-- ALTER
-- DROP


-- ----------------------------------------------------------------
-- JOIN
-- LEFT
-- RIGHT
-- FULL (NESTANDARTAS)

select city.name, country.name, country.code
from city, country
where city.countrycode = country.code and
country.code like 'ltu';

-- TAS PATS SU JOIN
select city.name, country.name, country.code
from city join country on city.countrycode = country.code
where country.code like 'ltu';


-- ----------------------------------------------------------------
select c1.name, c2.Name as sostine
from city c1, city c2, country
where c1.CountryCode = country.Code and country.Capital = c2.id and c1.CountryCode = 'LTU';

select c1.name, c2.Name as sostine
from city c1 join country on c1.CountryCode = country.Code join city c2 on country.Capital = c2.id
where c1.CountryCode = 'LTU';



-- ----------------------------------------------------------------
-- KA JAU ISMOKOM
-- ----------------------------------------------------------------

-- SELECT [DISTINCT]
-- FROM
--     [ [LEFT/RIGHT/FULL] JOIN]
-- WHERE
-- GROUP BY
-- HAVING
--     UNION [ALL]
-- ORDER BY


-- =    ar lygu
-- >    ar daugiau
-- <    ar maziau
-- >=    ar daugiau arba lygu
-- <=    ar maziau arba lygu
-- <>    ar nelygu (JS !=)
-- like    ar panasu;
--     specialus simboliai:
--         % - bet kiek bet kokiu
--         _ - vienas bet koks
-- like '....' escape '~' - nurodomas escape simbolis ~
-- is null    ar null
-- is not null    ar ne null

-- AND    loginis ir (JS &&)
-- OR    loginis arba (JS ||)
-- NOT    loginis ne (neiginys) (JS !)

-- rusiavimo kryptys
-- ASC    didejimo tvarka (default)
-- DESC    mazejimo tvarka

-- iraso pridejimas (TIK po viena)


