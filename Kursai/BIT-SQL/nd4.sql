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

-- ----------------------------------------
-- ALTERNATYVA
select a.actor_id as id, a.first_name as vardas, a.last_name as pavarde, count(*) as filmu_kiekis
from
    actor a join film_actor fa on a.actor_id = fa.actor_id
    join film_category fc on fa.film_id = fc.film_id
    join category c on fc.category_id = c.category_id
where
    c.name = 'Action'
group by a.actor_id, a.first_name, a.last_name
having count(*) > 2
