-- UNION

-- abieju queriu rezultatus atvaizduoja viena po kito 
-- union veikia disticnt rezimu (nerodo dubliuojanciu irasu) 
select name
from city
where name like "V%"
union
select name
from country
where name like "L%"; 

-- -------------------------------------------------
-- abejuose queriuose turi buti vienodas stulpeliu kiekis, bet stulpeliai gali buti skirtingi
-- stulpelius galima sukeisti vietomis- eiliskumas nesvarbus
-- jeigu rusiavimas vyksta pagal pirmo querio antra stulpeli (population), tai antras queris bus rusiuojamas
-- pagal name, nes stulpeliai sukeisti vietomis
select name, population
from city
where name like "V%"
union
select population, name
from country
where name like "L%"
order by population;

-- -------------------------------------------------
-- jeigu reikia zinoti, is kokios lenteles paimti duomenys, galima kaip stringus prideti 'miestas' ir 'salis' 
select name, population, 'miestas'
from city
where name like "V%"
union
select population, name, 'salis'
from country
where name like "L%"
order by population;

-- -------------------------------------------------

select country.name as salis, city.name as miestas
from country, city
where country.code = city.countrycode
order by salis;

-- -------------------------------------------------
-- valstybes kodas, valstybes pavadinimas, miestu toje valstybeje kiekis
-- surusiuotas pagal miestu toje valstybeje kieki mazejimo tvarka
select country.code as valstybes_kodas, country.name as valst_pavadinimas, count(*) as miestu_valstybeje_kiekis
from country, city
where country.code = city.countrycode
group by country.code, country.name
order by miestu_kiekis desc;
