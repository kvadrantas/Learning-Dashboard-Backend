-- UŽDAVINYS:
-- - kontinenta, regiona, bendras valstybiu plotas, bendras valstybiu gyventoju kiekis, valstybiu plotu vidurkis
-- - tik nepriklausomas valstybes
-- - grupuoti pagal kontinenta ir regiona
-- - nerodyti mazesniu valstybiu plotu vidurkiu negu 1000

-- ATSAKYMAS
select continent as Zemynas, region as Regionas, sum(surfacearea) as Bendras_plotas, sum(population) as Gyventoju_kiekis, avg(surfacearea) as Vidutinis_plotas
from country
where IndepYear is not null
group by continent, region
having avg(surfacearea) >= 1000
order by continent, region