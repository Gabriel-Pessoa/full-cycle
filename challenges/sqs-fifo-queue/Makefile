.PHONY: up-app log-app up-sqs

APP=app

up-app:
	docker compose up -d --build ${APP}

log-app:
	docker compose logs -f ${APP}

up-sqs:
	docker compose up -d --build sqs
	