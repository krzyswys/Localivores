INSERT INTO drivers (id, address, apartment_number, city, email, first_name, last_name, password, phone_number, postal_code, availability, vehicle_type)
VALUES(1, 'Czarnowiejska 8A', '12', 'Kraków', 'andrij1234@gmail.com', 'Andrzej', 'Nowak', 'haslo1', '+48656128762', '30-054', true, 1),
      (2, 'Aleja Solidarności 22', '5B', 'Warszawa', 'marek_driver@gmail.com', 'Marek', 'Kowalski', 'haslo2', '+48507123456', '02-201', true, 1),
      (3, 'Lipowa 10', '7', 'Gdańsk', 'anna_driver@gmail.com', 'Anna', 'Nowak', 'haslo3', '+48789234567', '80-180', false, 1),
      (4, 'Piękna 15', '3', 'Kraków', 'karolina_driver@gmail.com', 'Karolina', 'Wiśniewska', 'haslo4', '+48660234567', '30-001', false, 0);


INSERT INTO users (id, address, apartment_number, city, email, first_name, last_name, password, phone_number, postal_code)
VALUES(1, 'Juliusza Lea 12A', '13', 'Kraków', 'jp2gmd@gmail.com', 'Jan', 'Paweł', 'haslo123', '+48658728762', '30-054'),
      (2, 'Aleja Niepodległości 20', '4C', 'Warszawa', 'user2@example.com', 'Anna', 'Kowalska', 'password2', '+48651234567', '01-200'),
      (3, 'Kościuszki 8', '12', 'Kraków', 'user3@example.com', 'Tomasz', 'Nowak', 'password3', '+48657894512', '30-102'),
      (4, 'Długa 15', '5B', 'Gdańsk', 'user4@example.com', 'Mateusz', 'Wiśniewski', 'password4', '+48779876543', '80-100'),
      (5, 'Mickiewicza 7', '3A', 'Poznań', 'user5@example.com', 'Katarzyna', 'Jankowska', 'password5', '+48660123456', '61-000'),
      (6, 'Plac Grunwaldzki 1', '10', 'Wrocław', 'user6@example.com', 'Piotr', 'Kaczmarek', 'password6', '+48650234678', '50-100'),
      (7, 'Leśna 5', '8', 'Katowice', 'user7@example.com', 'Magdalena', 'Pawlak', 'password7', '+48651237890', '40-500'),
      (8, 'Warszawska 30', '6', 'Lublin', 'user8@example.com', 'Marta', 'Dąbrowska', 'password8', '+48779876543', '20-100'),
      (9, 'Słoneczna 12', '2', 'Gdynia', 'user9@example.com', 'Krzysztof', 'Kwiatkowski', 'password9', '+48651234567', '81-200'),
      (10, 'Wiejska 9', '1', 'Szczecin', 'user10@example.com', 'Alicja', 'Zielińska', 'password10', '+48657894512', '70-102'),
      (11, 'Kwiatowa 3', '4', 'Bydgoszcz', 'user11@example.com', 'Marcin', 'Kaczmarek', 'password11', '+48779876543', '85-100'),
      (12, 'Piastowska 17', '5', 'Kraków', 'user12@example.com', 'Zofia', 'Nowak', 'password12', '+48660123456', '30-000'),
      (13, 'Spacerowa 11', '3', 'Warszawa', 'user13@example.com', 'Andrzej', 'Wiśniewski', 'password13', '+48650234678', '01-300'),
      (14, 'Parkowa 7', '9', 'Gdańsk', 'user14@example.com', 'Marta', 'Jankowska', 'password14', '+48651237890', '80-200'),
      (15, 'Mickiewicza 15', '6', 'Wrocław', 'user15@example.com', 'Paweł', 'Kowalski', 'password15', '+48779876543', '50-101'),
      (16, 'Ratuszowa 22', '12', 'Kraków', 'user16@example.com', 'Ewa', 'Pawlak', 'password16', '+48651234567', '30-110');

INSERT INTO extras (id, gmo)
VALUES (1, true), (2, false);

INSERT INTO payment_methods (id, apple_pay, credit_card, google_pay, paypal)
VALUES (1, true, true, true, true), (2, true, false, true, false);


INSERT INTO stores (id, address, apartment_number, city, discount, latitude, longitude, name, postal_code, user_id)
VALUES (1, 'Marszałkowska 12', null, 'Warszawa', 0, 0, 0, 'Domowe wyroby', '11-223', 2),
       (2, 'Sobieskiego 11', '19', 'Zamość', 0.1, 0, 0, 'Family Bistro', '11-123', 9),
       (3, 'Aleje Jana Pawła 2', null, 'Wadowice', 0, 0, 0, 'Papieski sklepik', '21-376', 10);


INSERT INTO products (id, name, description, discount, expiration_date, origin, price, quantity, weight, extras_id, store_id)
VALUES(1, 'chleb razowy', 'Świeży chlebek wypiekany w domowym piecu', 0.1, '2023-12-31', 'Poland', 4.99, 20, 0.5, 1, 1),
      (2, 'Jabłka Granny Smith', 'Soczyste i chrupiące jabłka od lokalnego producenta', 0.15, '2023-09-30', 'Poland', 1.49, 100, 0.2, 2, 1),
      (3, 'Miód naturalny', 'Czysty miód kwiatowy zebrane przez pszczoły z pobliskich łąk', 0.05, '2024-06-30', 'Poland', 9.99, 30, 0.75, 1, 1),
      (4, 'Ser kozi ziołowy', 'Delikatny ser kozi w aromatycznych ziołach', 0.2, '2023-11-15', 'Poland', 7.99, 15, 0.3, 1, 1),
      (5, 'Oliwa z oliwek extra virgin', 'Najwyższej jakości oliwa tłoczona na zimno', 0.1, '2025-03-31', 'Italy', 12.49, 50, 0.75, 2, 2),
      (6, 'Mleko prosto od krowy', 'Świeże mleko od lokalnego gospodarstwa', 0.0, '2023-09-15', 'Poland', 2.99, 40, 1.0, 1, 2),
      (7, 'Pierogi ruskie', 'Tradycyjne pierogi z nadzieniem ziemniaczano-serowym', 0.15, '2023-10-31', 'Poland', 6.99, 25, 0.6, 1, 2),
      (8, 'Kawa ziarnista Colombia', 'Wysokiej jakości ziarna kawy pochodzące z Kolumbii', 0.1, '2024-04-30', 'Colombia', 18.99, 10, 0.25, 2, 2),
      (9, 'Dżem truskawkowy', 'Domowy dżem ze świeżych truskawek', 0.08, '2023-12-31', 'Poland', 3.49, 30, 0.4, 2, 2),
      (10, 'Chipsy z batatów', 'Chipsy z batatów o delikatnym smaku i chrupiącej konsystencji', 0.12, '2023-11-30', 'Poland', 2.79, 60, 0.15, 1, 3),
      (11, 'Pomidory malinowe', 'Słodkie i soczyste pomidory malinowe', 0.1, '2023-09-15', 'Poland', 3.29, 35, 0.1, 1, 3);


INSERT INTO favourite_products_list (id, product_id, user_id)
VALUES (1, 1, 1), (2, 11, 1), (3, 4, 1),
       (4, 9, 2),
       (5, 10, 5), (6, 7, 5), (7, 2, 5), (8, 11, 5),
       (9, 8, 12), (10, 7, 12),
       (11, 7, 13),
       (12, 10, 14), (13, 7, 14), (14, 2, 14), (15, 11, 14),
       (16, 8, 16), (17, 11, 16);



INSERT INTO opening_hours (id, day_of_week, time_open, time_closed, store_id)
VALUES (1, 1, '9:00', '18:00', 1),
       (2, 2, '9:00', '18:00', 1),
       (3, 3, '9:00', '18:00', 1),
       (4, 4, '9:00', '18:00', 1),
       (5, 5, '9:00', '18:00', 1),
       (6, 1, '8:00', '22:00', 2),
       (7, 2, '8:00', '22:00', 2),
       (8, 3, '8:00', '22:00', 2),
       (9, 4, '8:00', '22:00', 2),
       (10, 5, '8:00', '22:00', 2),
       (11, 6, '9:00', '21:00', 2),
       (12, 7, '11:00', '20:00', 2),
       (13, 6, '12:00', '18:00', 3),
       (14, 7, '12:00', '18:00', 3);


INSERT INTO shop_reviews (id, date, description, rating, store_id, user_id)
VALUES (1, '2023-08-29 15:30:00', 'xd', 1, 1, 2),
       (2, '2023-07-21 11:30:00', 'Jedzenie nieświeże', 2, 1, 3),
       (3, '2023-08-22 11:30:00', 'Zdecydowanie odradzam!', 1, 1, 1),
       (4, '2023-08-22 9:01:00', 'Przyzwoite jedzenie', 4, 1, 10),
       (5, '2023-01-21 11:21:00', 'Najlepsze jedzenie pod słońcem!', 6, 2, 10),
       (6, '2023-01-21 11:20:00', 'Bardzo smaczne, małe porcje', 5, 2, 11);

INSERT INTO payments(id, amount, payment_date, payment_status)
VALUES (1, 19.98, '2023-01-21 11:30:00', 1),
       (2, 31.47, '2023-02-15 14:45:00', 1),
       (3, 36.00, '2023-03-10 09:50:00', 1),
       (4, 22.79, '2023-04-05 16:15:00', 1),
       (5, 26.49, '2023-05-02 12:30:00', 1),
       (6, 21.45, '2023-06-20 17:45:00', 1);


INSERT INTO orders(id, delivery_cost, delivery_date, order_date, order_status, driver_id, invoice_id, payment_id, user_id)
VALUES (1, 9.00, '2023-01-21 11:20:00', '2023-01-21 10:20:00', 1, 1, null, 1, 1),
        (2, 8.50, '2023-02-15 14:30:00', '2023-02-15 13:30:00', 1, 2, null, 2, 2),
        (3, 12.00, '2023-03-10 09:45:00', '2023-03-10 08:45:00', 1, 3, null, 3, 3),
        (4, 7.20, '2023-04-05 16:10:00', '2023-04-05 15:10:00', 1, 1, null, 4, 4),
        (5, 10.50, '2023-05-02 12:00:00', '2023-05-02 11:00:00', 1, null, null, null, 5),
        (6, 6.75, '2023-06-20 17:30:00', '2023-06-20 16:30:00', 1, 2, null, 6, 1);

INSERT INTO order_items(id, quantity, order_id, product_id)
VALUES (1, 2, 1, 1), (2, 2, 1, 3),
       (3, 10, 2, 9), (4, 7, 2, 11), (5, 10, 2, 1),
       (6, 1, 3, 1),
       (7, 10, 4, 1), (8, 1, 4, 2), (9, 1, 4, 1),
       (11, 20, 5, 4), (10, 2, 5, 3),
       (12, 1, 6, 7);

