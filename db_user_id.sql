create database identity_manager_db;

use identity_manager_db;

select * from users;

ALTER TABLE Users ADD COLUMN resetPasswordToken VARCHAR(255) NULL;

ALTER TABLE Users ADD COLUMN resetPasswordExpires DATETIME NULL;

UPDATE Users SET role = 'admin' WHERE email = 'your-email@gmail.com';

UPDATE Users SET role = 'admin' WHERE email = 'gfg12@gmail.com';

UPDATE Users SET role = 'admin' WHERE email = 'mah123@gmail.com';

UPDATE Users SET role = 'admin' WHERE email = 'savitri123@gmail.com';






