# caas_task_microservice
PROBLEM:  Create a small micro-service in a language of your choice that returns the weather for a given zip code and deploy it to a Kubernetes cluster.

Publish all code on GitHub and be prepared to discuss the thought process behind all decisions and implementation

# We used API of Open Weather Map's public API and created our own microservice
Using the Fetch API to fetch Open Weather Map's public API for JSON data for US cities

Command line weather app using Node.js and OpenWeatherMap.

We used API of Open Weather Map's public API and created our own microservice
Using the Fetch API to fetch Open Weather Map's public API for JSON data for US cities

Command line weather app using Node.js and OpenWeatherMap.
This library provides an interface to query the current weather and temperature using a zipcode location and the OpenWeatherMap API.
⦁	Create an app, package it in a container and publish to a Docker registry:-
⦁	Creation of Dockerfile
FROM node:7

	RUN apt-get update && apt install -y git && \
	git clone  https://github.com/rthbb/microsservices_task /home/ec2-user/test_repo
	WORKDIR /app
	COPY  package.json app.js config.json printer.js weather.js ./
	RUN npm install
	COPY . /app
	EXPOSE 8081
	RUN node app.js &

Docker Build Image and run
docker build -t microservice_weather .

  
docker run -it microservice_weather
 
 

Run app in locolhost using this command:-
node app.js F 90210 20001 10001
 
Publish your image to a container registry AWS
aws ecr create-repository --repository-name microservice_weather
aws ecr get-login
Tag Image of container
docker tag final_weather:1.0 641825664234.dkr.ecr.ap-south-1.amazonaws.com/final_weather:latest
Push container
docker push 641825664234.dkr.ecr.ap-south-1.amazonaws.com/final_weather:latest
Deploying the containers
In order to deploy the containers I have created a small yml file for the microservice_weather service and the Container to be deployed.
####### deploy_to_kube.yml###########
apiVersion: v1
kind: Pod for docker image deployment to Kuberenetes
metadata:
  name: final_weather
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: final_weather
    spec:
      containers:
      - name: final_weather
        image: 641825664234.dkr.ecr.ap-south-1.amazonaws.com/final_weather:latest
        ports:
        - containerPort: 8081
        imagePullPolicy: Always


kubectl create -f /tmp/ deploy_to_kube.yml
Run your container on the cluster

 
kubectl run microservice_weather --image=641825664234.dkr.ecr.ap-south-1.amazonaws.com/final_weather:latest --port=8081
  

kubectl get deployment microservice_weather

 
 
Kubernates updates the pod and pulls the container with tag final_weather:1.0  from ECR.

 
curl http://13.232.82.65:8081
 

Kubernates Installation of worker and master nodes:-
 
On Master node:
sudo yum install -y kubelet kubeadm kubectl
Enable & start kubelet service:
sudo systemctl enable kubelet && sudo systemctl start kubelet
On worker node:
sudo yum install -y kubelet kubeadm kubectl


 


