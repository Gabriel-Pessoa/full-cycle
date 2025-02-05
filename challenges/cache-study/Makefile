APP=cache-study
.PHONY: clean

clean:
	docker compose rm -s -f debug

# Create and start debug-container
run/debug:
	docker compose up --detach --build debug

log/debug:
	docker-compose logs --follow debug