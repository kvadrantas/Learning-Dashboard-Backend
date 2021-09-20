-- UŽDAVINYS:
-- - kontinenta, regiona, bendras valstybiu plotas, bendras valstybiu gyventoju kiekis, valstybiu plotu vidurkis
-- - tik nepriklausomas valstybes
-- - grupuoti pagal kontinenta ir regiona
-- - nerodyti mazesniu valstybiu plotu vidurkiu negu 1000

-- ATSAKYMAS
select continent, region, sum(surfacearea), sum(population), avg(surfacearea)
from country
where IndepYear is not null
group by continent, region
having avg(surfacearea) >= 1000
order by continent, region