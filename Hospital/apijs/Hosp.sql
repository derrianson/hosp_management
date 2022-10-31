-- CREATE DATABASE HospitalManagement;

CREATE TABLE IF NOT EXISTS Login(
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    isAdmin BOOL NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS Users(
    userid      VARCHAR(10)    NOT NULL,
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
    HospitalId  VARCHAR(10)    NOT NULL,
    Hospitalname VARCHAR(20)   NOT NULL,
    CityName    VARCHAR(10)    NOT NULL,
    PRIMARY KEY (HospitalId)
);
CREATE TABLE IF NOT EXISTS Ward(
    WardId      VARCHAR(10)    NOT NULL,
    Wardtype    VARCHAR(10)    NOT NULL,
    HospitalId  VARCHAR(10)    NOT NULL REFERENCES Hospital(HospitalId),
    PRIMARY KEY (WardId)
);

CREATE TABLE IF NOT EXISTS Bed(
    BedId       VARCHAR(10)    NOT NULL,
    WardId      VARCHAR(10)    NOT NULL REFERENCES Ward(WardId),
    isAvailable    BOOL        NOT NULL,
    isPrivate      BOOL        NOT NULL,
    PRIMARY KEY (BedId)
);

CREATE TABLE IF NOT EXISTS Patient(
    PatientId   VARCHAR(10)    NOT NULL,
    userid      VARCHAR(10)    NOT NULL REFERENCES Users(userid),
    HospitalId  VARCHAR(10)    NOT NULL REFERENCES Hospital(HospitalId),
    WardId      VARCHAR(10)    NOT NULL REFERENCES Ward(WardId),
    BedId       VARCHAR(10)    NOT NULL REFERENCES Bed(BedId),
    PatientName VARCHAR(10)    NOT NULL,
    PatientAge  VARCHAR(10)    NOT NULL,
    contact     VARCHAR(10)    NOT NULL,
    PRIMARY KEY (PatientId)
);

CREATE TABLE IF NOT EXISTS Bill(
    BookingId   VARCHAR(10)    NOT NULL,
    PatientId   VARCHAR(10)    NOT NULL,
    DateOfJoining date   

)


 select hospitalid,wardtype, count(hospitalid) from ward group by hospitalid,wardtype;