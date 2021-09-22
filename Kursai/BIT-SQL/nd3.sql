-- UŽDAVINYS:
-- valstybes kodas, miesto pavadinimas, valstybes pavadinimas, oficialiu kalbu kiekis
-- tik zemynuose: europa ir afrika
-- kur daugiau nei viena oficiali kalba
-- surusiuota pagal oficialiu kalbu kieki mazejimo tvarka, valstybes pavadinima didejimo tvarka

-- ATSAKYMAS
select country.code as valstybes_kodas, city.name as miesto_pavadinimas, 
country.name as valstybes_pavadinimas, sum(countrylanguage.IsOfficial) as oficialiu_kalbu_kiekis
from country, city, countrylanguage
where country.code = city.CountryCode and country.code = countrylanguage.countrycode 
and countrylanguage.IsOfficial = 'T' and (continent = 'europe' or continent = 'africa')
group by countrylanguage.IsOfficial, country.code, city.name, country.name
having sum(countrylanguage.IsOfficial) > 1
order by oficialiu_kalbu_kiekis desc, country.name asc
