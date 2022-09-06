create database google_slide;

use database google_slide;

create table user (
	id int auto_increment PRIMARY key not null,
	nama VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50)
);

create table slide (
	id int auto_increment PRIMARY key not null,
	nama VARCHAR(50),
	user_id int,
	FOREIGN KEY (user_id) REFERENCES user(id)
);

show tables;

INSERT into user values 
(null, "auzan", "auzan@gmail.com", "123"),
(null, "alpha", "alpha@gmail.com", "123"),
(null, "beta", "beta@gmail.com", "123");

select * from user;

INSERT into slide values 
(null, "mysql", 1),
(null, "express", 2);

select * from slide;

select slide.id as id, slide.nama as judul_slide, user.nama
from slide
inner join user on slide.user_id = user.id;

-- silahkan buat table kolaborasi
-- isi data table kolaborasi
-- tampilkan dengan join



