-- UŽDAVINYS:
-- - atspausdinti sarasa aktoriu (vardas, pavarde, kiek tokiu filmu), 
-- - kurie vaidino daugiau nei 2 'Action' filmuose

-- ATSAKYMAS
select actor.first_name as vardas, actor.last_name as pavarde,  count(actor.actor_id) as kiek_filmu
from actor, film_actor, film_category, category
where actor.actor_id = film_actor.actor_id and
film_actor.film_id = film_category.film_id and
film_category.category_id = category.category_id and
category.name = 'action'
group by actor.actor_id, actor.first_name, actor.last_name
having count(actor.actor_id) > 2;

-- ----------------------------------------
-- ISSIRASAU PAGAL KA SURISIU LENTELES

-- actor.actor_id

-- film_actor.actor_id
-- film_actor.film_id

-- film_category.film_id
-- film_category.category_id

-- category.category_id



