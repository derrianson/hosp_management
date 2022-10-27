-- CREATE DATABASE HospitalManagement;

CREATE TABLE IF NOT EXISTS Login(
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    isAdmin BOOL NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS User(
    userid      VARCHAR(10)    NOT NULL,
    username    VARCHAR(20)    NOT NULL references Login(username),
    phoneno     INT8           NOT NULL,
    email       VARCHAR(30)    NOT NULL,
    aadharId    VARCHAR(12)    NOT NULL,
    HospitalId  VARCHAR(10)    NOT NULL,
    PRIMARY KEY (userid),
    username REFERENCES Login(username)
    
)



