

Create database pwc;


Create table users (
    user_id int Auto_increment NOT NULL , 
    user_name varchar (255),
    email varchar (255) UNIQUE,
    password varchar(255),
    PRIMARY KEY (user_id)
);

Create table messages(
    message_id int Auto_increment NOT NULL ,
    message_name varchar(255),
    message_subject varchar(255),
    Phone int ,
    message varchar (255),
    user_id int,
    PRIMARY KEY (message_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    
);