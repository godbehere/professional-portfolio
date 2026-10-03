PM2_NAME := professional-portfolio
BRANCH    ?= main

.PHONY: install dev build clean deploy

install:
	npm install

dev:
	npm run dev

build: clean
	npm run build

clean:
	rm -rf .next

deploy:
	git fetch origin
	git checkout $(BRANCH)
	git pull origin $(BRANCH)
	npm install
	rm -rf .next
	npm run build
	pm2 restart $(PM2_NAME)
