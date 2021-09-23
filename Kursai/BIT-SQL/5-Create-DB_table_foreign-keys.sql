-- 1. CREATE
-- 2. DROP
-- 3. CHARSET
-- 4. COLLATION
-- 5. ENGINE
-- 6. NAUJOS LENTELES LAUKU PARAMETRAI
-- 7. LAUKU TIPAI
-- 8. FOREIGN KEYS
-- 9. ON UPDATE (RESTRICT/CASCADE)
-- 	  ON DELETE (RESTRICT/CASCASE)



-- CREATE
create database apskaita;

-- ----------------------------------------------------------------
-- DROP
-- Workbenchas neapsaugo istrina DB be perspejimo
drop database apskaita;

-- ----------------------------------------------------------------
-- DB KURIMAS
CHARACTER SET - simboliu kodu lentele. Jei charsetas sudarytas is simboliu uzimanciu 1 baita - tai amerikietiskas standartas.
Kadangi kitu saliu raides i toki charseta netilpo buvo sukurti 2 baitu simboliai.
Su 2 baitais galimi 65536 skirtingi simboliai (UTF16)
win1257- lietuviskas charsetas
https://en.wikipedia.org/wiki/Windows-1257
https://www.youtube.com/watch?v=MijmeoH9LT4
https://en.wikipedia.org/wiki/Windows_code_page

COLLATION
Tiktai tekstiniu lauku rusiavimas. Pagal lietuviska abecele laukai issirusiuoja vienaip, pagal angliska- kitaip.

CHARSET IR COLLATION GALIMA NUSTATYTI TIEK KIEKVIENAI BAZEI, TIEK LENTELEMS ATSKIRAI. JEI LENTELEJE PALIEKAMA DEFAULT, TAI
JI PASIIMA TOKIUS PAT KAIP BAZES
-- ----------------------------------------------------------------
ENGINE
kuriant nauja lentele pasirenkamas enginas. InnoDB yra defaultinis enginas. Kiti enginai gal ir veikia greiciau, bet nepaiko viso standarto
-- ----------------------------------------------------------------
-- NAUJOS LENTELES PARAMETRAI

PK - primary key
NN - not null
UQ - unique
BIN - paveiksleliams ir failams saugoti i DB (binary). Bloga praktika- failus reikia geriau saugoti failineje sistemoje, bet ne i DB.
	  saugumo reikalavimai to reikalauja. Pagal si lauka neina nei filtruoti, nei ieskoti.
UN -  visos reiksmes tik teigiamos (unsigned)
ZF -  uzpildymas nuliais (zero fill). Pvz.:
		decima(7,4)
		45.3
		45.3000	uzpildo nuliais tik po kablelio.
AI - sitas laukas automatiskai dides po 1, jeigu mes nenurodeme reiksmes (auto increment).
G - (generated)
DEFAULT/EXPRESSION - galima nurodyti defaultine reiksme

-- ----------------------------------------------------------------
-- LAUKU TIPAI

DATE - data
TIME - laikas
DATETIME - data ir laikas

DECIMAL(3,2) - skaicius turintis 3 sveikas dalis ir 2 skaitmenis po kalbelio
CHAR(20) - tekstas is 20 simboliu. Jei suvedam trumpesni teksta, vistiek uzima 10 simboliu. Max galimas ilgis 1-255
VARCHAR(20) - tekstas is 20 simboliu, bet saugo tik tiek simboliu, kiek suvedam + 1 pabaigos simbolis (Max galimas ilgis 1-255) pvz.:
'Rolandas'\u0000

-- ----------------------------------------------------------------
FOREIGN KEYS
PRIE FOREIGN KEYS PRIE 'ON UPDATE' IR 'ON DELETE' YRA 2 PASIRINKIMAI PAGAL STANDARTA:
- ON UPDATE + RESTRICT
	neleistu tevineje lenteleje (cekiai) PAKEISTI ar trinti id jeigu lenteleje (prekes) yra bent viena preke su nuoroda i ta ceki.
    kalba eina tik apie ID stulpelio keitima. Kitus laukus keisti galima. Vaikineje lentele (prekes) foreign key keisti galima.
    pakeitimai negalimi tik tevineje lenteleje.
    
- ON DELETE + RESTRICT 
	neleistu tevineje lenteleje (cekiai) TRINTI id jeigu lenteleje (prekes) yra bent viena preke su nuoroda i ta ceki.
    
- ON UPDATE + CASCADE
	jei tevineje lenteleje (cekiai) keiciame id, tai automatiskai bus pakeisti foreign keys id vaikineje (prekes) lenteleje
    
- ON DELETE + CASCADE
	jei tevineje lenteleje (cekiai) trinu irasa, tai ir vaikineje lenteleje istrins visus irasus vedancius i ta ceki
    
- SET NULL - pakeitus tevineje lenteleje primary key, vaikineje lenteleje atitikamus foreign key, pakeis i null

ON UPDATE geriau visada uzdeti RESTRINT, nes nera ko kaitalioti primary key
ON DELETE geriau visada uzdeti CASCADE
