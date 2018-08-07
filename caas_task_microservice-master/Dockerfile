FROM node:7

	RUN apt-get update && apt install -y git && \
	git clone  https://github.com/thedevopsguru/caas_task_microservice/ /home/ec2-user/test_repo
	WORKDIR /app
	COPY  package.json app.js config.json printer.js weather.js ./
	RUN npm install
	COPY . /app
	EXPOSE 8081
	RUN node app.js &
