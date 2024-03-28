# Micro-Service

Steps to run the micro-service setup.

## Pre-requisites

1. Node.js
2. MongoDB Atlas Account

Login to your MongoDB Atlas Account and create a cluster. After creating a cluster, navigate to the Database section and click 'Connect'.

### Database Connection Steps:

1. Enter the database username and password.
2. Choose a connection method and select the driver as Node.js.
3. You will see a connection string below; copy it and replace `<password>` with the password for the database user.

**Note:** Store this connection string in a notepad as we will use it to set up the database connection in our application.

## Setting Up Database Connection for the Books MicroService

**Steps:**

1. Navigate into the books folder:
   ```bash
   cd books

2. Create a .env file and add the following content inside it
mongo_url=connection string /bookservice
Replace connection string  with the one you got from MongoDB Atlas.
