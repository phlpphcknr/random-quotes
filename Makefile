PROJECT_ID=randomquotes-app
ZONE=europe-west1-b

create-tf-backend-bucket:
	gsutil mb -p $(PROJECT_ID) gs://$(PROJECT_ID)-terraform

###

SSH_STRING=pt.hackner@randomquotes-app-vm

ssh:
	gcloud compute ssh $(SSH_STRING)	\
		--project=$(PROJECT_ID)	\
		--zone=$(ZONE)