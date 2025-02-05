.PHONY: clean/debug

APP=batch-poc

build/debug:
	docker build --no-cache -t ${APP}:debug -f ./Dockerfile.debug .

run/debug:
	docker compose up -d ${APP}-debug 

log/debug:
	docker compose logs -f ${APP}-debug

clean/debug:
	docker compose rm -s -f ${APP}-debug
	