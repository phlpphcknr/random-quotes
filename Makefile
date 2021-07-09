PROJECT_ID=randomquotes-app
ZONE=europe-west1-b

create-tf-backend-bucket:
	gsutil mb -p $(PROJECT_ID) gs://$(PROJECT_ID)-terraform

###

SSH_STRING=pt.hackner@randomquotes-app-vm

LOCAL_TAG=randomquotes-app:latest
REMOTE_TAG=gcr.io/$(PROJECT_ID)/$(LOCAL_TAG)
CONTAINER_NAME=randomquotes-api

ssh:
	gcloud compute ssh $(SSH_STRING) \
	--project=$(PROJECT_ID) \
		--zone=$(ZONE)

ssh-cmd:
	@gcloud compute ssh $(SSH_STRING) \
	--project=$(PROJECT_ID) \
		--zone=$(ZONE) \
			--command="$(CMD)"

build-docker:
	docker build -t $(LOCAL_TAG) .

push-docker:
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)

deploy-docker:
	$(MAKE) ssh-cmd CMD="docker-credential-gcr configure-docker"
	@echo"Pulling docker image ..."
	$(MAKE) ssh-cmd CMD="docker pull $(REMOTE_TAG)"
	@echo"Stop and remove previous docker container ..."
	-$(MAKE) ssh-cmd CMD="docker container stop $(CONTAINER_NAME)"
	-$(MAKE) ssh-cmd CMD="docker container rm $(CONTAINER_NAME)"
	@echo"Running new docker container ..."
	$(MAKE) ssh-cmd CMD="docker run -d --name=$(CONTAINER_NAME) \
	--restart=unless-stopped \
		-p 80:3000 \
			-e PORT=3000 \
				$(REMOTE_TAG)"
