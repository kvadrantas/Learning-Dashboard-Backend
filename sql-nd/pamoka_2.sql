-- AGREGACINES FUNKCIJOS 

select count(*), sum(population), avg(population), min(population), max(population)
from city
where name like 'a%';

-- GROPUP BY 
select countrycode, count(*), sum(population), avg(population), min(population), max(population)
from city
group by countrycode;

-- GROPUP BY 2
select countrycode, district, count(*), sum(population), avg(population), min(population), max(population)
from city
group by countrycode, district;

-- HAVING 
select countrycode, district, count(*), sum(population), avg(population), min(population), max(population)
from city
where name like '%a%'
group by countrycode, district
having avg(population) > 5000000;





