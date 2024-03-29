DROP DATABASE IF EXISTS artzone;

CREATE DATABASE artzone;

USE artzone;

CREATE TABLE user_account (
	id VARCHAR(255) NOT NULL,
	user_email VARCHAR(255) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	user_full_name VARCHAR(255) NOT NULL,
	user_avatar VARCHAR(255) NOT NULL,
  	user_number_of_posts INT NULL,
  	user_number_of_followers INT NULL,
  	user_number_of_following INT NULL deleted_at TIMESTAMP NULL,
	PRIMARY KEY (id)
);


CREATE TABLE post (
	id BIGINT NOT NULL AUTO_INCREMENT,
	post_content VARCHAR(255) NOT NULL,
	post_description TEXT NULL,
	post_tag TEXT NOT NULL,
	post_category INT NOT NULL,
	post_created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	post_created_by VARCHAR(255) NOT NULL,
	post_number_of_reactions INT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE post_reaction (
	id BIGINT NOT NULL AUTO_INCREMENT,
	post_id BIGINT NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comment (
	id BIGINT NOT NULL AUTO_INCREMENT,
	parent_id BIGINT NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	comment_content TEXT NOT NULL,
	has_post BOOLEAN NOT NULL deleted_at TIMESTAMP NULL,
	PRIMARY KEY (id)
);

CREATE TABLE user_notification (
	id BIGINT NOT NULL AUTO_INCREMENT,
  	notification_image VARCHAR(255) NOT NULL,
	notification_message VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE user_follower (
	id BIGINT NOT NULL AUTO_INCREMENT,
	follower_id VARCHAR(255) NOT NULL,
	user_id VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE product (
    id BIGINT NOT NULL AUTO_INCREMENT,
    product_content VARCHAR(255) NOT NULL,
    product_description TEXT NULL,
    product_tag TEXT NOT NULL,
    product_category INT NOT NULL,
    product_price FLOAT NOT NULL,
    product_is_free BOOLEAN NOT NULL,
    product_created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product_created_by VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE order {
    id BIGINT NOT NULL AUTO_INCREMENT,
    seller_id VARCHAR(255) NOT NULL,
    customer_id VARCHAR(255) NOT NULL,
    product_id BIGINT NOT NULL,
    product_price FLOAT NULL,
    payment_method VARCHAR(255) NOT NULL,
	delivery_name VARCHAR(255) NOT NULL,
	delivery_email VARCHAR(255) NOT NULL,
	additional_info TEXT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
}
