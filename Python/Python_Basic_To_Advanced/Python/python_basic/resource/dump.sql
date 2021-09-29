BEGIN TRANSACTION;
CREATE TABLE users(id INTEGER PRIMARY KEY, username text, email text,     phone text, website text, regdate text);
INSERT INTO "users" VALUES(1,'Kim','KIM@naver.com','010-0000-0000','Kim.com','2021-03-28 01:33:38');
INSERT INTO "users" VALUES(2,'Lee','lee@daum.net','010-0000-0000','lee.com','2021-03-28 01:33:38');
INSERT INTO "users" VALUES(3,'Lee','Lee@naver.com','010-0000-0000','Lee.com','2021-03-28 01:33:38');
INSERT INTO "users" VALUES(4,'Son','Son@naver.com','010-0000-0000','Son.com','2021-03-28 01:33:38');
INSERT INTO "users" VALUES(5,'Jin','Jin@naver.com','010-0000-0000','Jin.com','2021-03-28 01:33:38');
COMMIT;
