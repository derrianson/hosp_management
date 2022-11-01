-- CREATE DATABASE HospitalManagement;

CREATE TABLE IF NOT EXISTS Login(
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    isAdmin BOOL NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS Users(
    userid      SERIAL ,
    username    VARCHAR(20)    NOT NULL REFERENCES Login(username),
    phoneno     INT8           NOT NULL,
    email       VARCHAR(30)    NOT NULL,
    aadharId    VARCHAR(12)    NOT NULL,
    PRIMARY KEY (userid)
);

-- CREATE TABLE IF NOT EXISTS Reception(
--     userid      VARCHAR(10)    NOT NULL,
--     username    VARCHAR(20)    NOT NULL REFERENCES Login(username),
--     phoneno     INT8           NOT NULL,
--     email       VARCHAR(30)    NOT NULL,
--     aadharId    VARCHAR(12)    NOT NULL,
--     HospitalId  VARCHAR(10)    NOT NULL,
--     PRIMARY KEY (userid)
-- );

CREATE TABLE IF NOT EXISTS Hospital(
    HospitalId  SERIAL ,
    Hospitalname VARCHAR(20)   NOT NULL,
    CityName    VARCHAR(10)    NOT NULL,
    PRIMARY KEY (HospitalId)
);
CREATE TABLE IF NOT EXISTS Ward(
    WardId      SERIAL ,
    Wardtype    VARCHAR(10)    NOT NULL,
    HospitalId  INTEGER REFERENCES Hospital(HospitalId),
    PRIMARY KEY (WardId)
);

CREATE TABLE IF NOT EXISTS Bed(
    BedId       SERIAL ,
    WardId      INTEGER REFERENCES Ward(WardId),
    isAvailable    BOOL        NOT NULL,
    isPrivate      BOOL        NOT NULL,
    PRIMARY KEY (BedId)
);

CREATE TABLE IF NOT EXISTS Patient(
    PatientId   SERIAL ,
    userid      INTEGER REFERENCES Users(userid),
    HospitalId  INTEGER REFERENCES Hospital(HospitalId),
    WardId      INTEGER REFERENCES Ward(WardId),
    BedId       INTEGER REFERENCES Bed(BedId),
    PatientName VARCHAR(10)    NOT NULL,
    PatientAge  VARCHAR(10)    NOT NULL,
    contact     VARCHAR(10)    NOT NULL,
    PRIMARY KEY (PatientId)
);

CREATE TABLE IF NOT EXISTS Bill(
    BookingId   SERIAL ,
    PatientId   SERIAL ,
    DateOfJoining date   

)


--  select hospitalid,wardtype, count(hospitalid) from ward group by hospitalid,wardtype;
--  drop table bed,bill,hospital,login,patient,users,ward;