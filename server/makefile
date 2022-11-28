ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	docker-compose up -d --build --remove-orphans

up:
	docker-compose up -d 

down:
	docker-compose down

down-V:
	docker-compose down -v

