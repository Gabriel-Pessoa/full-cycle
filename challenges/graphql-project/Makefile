db=mysql
APP=graphql-project

run/db:
	docker-compose up --detach --build ${db}

connect/db:
	docker-compose exec ${db} mysql -uroot -p

run/app:
	docker-compose up --detach --build ${APP}

run/test:
	docker-compose run ${APP} yarn test

restart/app:
	docker-compose restart ${APP}

migrate/up: 
	docker-compose run ${APP} npx sequelize-cli db:migrate

migrate/down: 
	docker-compose run ${APP} npx sequelize-cli db:migrate:undo

seed/all:
	docker-compose run ${APP} npx sequelize-cli db:seed:all

logs/all:
	docker-compose logs --follow

logs/db:
	docker-compose logs --follow ${db}

logs/app:
	docker-compose logs --follow ${APP}

remove/app:
	docker-compose rm --stop --force ${APP}

remove/db:
	docker-compose rm --stop --force ${db}