-- AGREGACINES FUNKCIJOS 

select count(*), sum(population), avg(population), min(population), max(population)
from city
where name like 'a%';

-- GROPUP BY 
-- select dalyje gali buti tik agregacines funkcijos arba papildomai galia itraukti tik tuos
-- stulpelius, kurie nurodyti group by dalyje
select countrycode, count(*), sum(population), avg(population), min(population), max(population)
from city
group by countrycode;

-- GROPUP BY 2
select countrycode, district, count(*), sum(population), avg(population), min(population), max(population)
from city
group by countrycode, district;

-- HAVING 
-- jei norim atlikti papildoma filtravima pagal agregacines funkcijos rezultatus reikia naudoti Having
select countrycode, district, count(*), sum(population), avg(population), min(population), max(population)
from city
where name like '%a%'
group by countrycode, district
having avg(population) > 5000000;
