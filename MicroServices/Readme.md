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

THe Connection String will look like this "mongodb+srv://'username':'password'@'clusterName'.i30sge8.mongodb.net"

## Setting Up Database Connection for the Books MicroService

**Steps:**

1. Navigate into the books folder:
   ```bash
   cd books

2. Create a .env file and add the following content inside it
mongo_url=connection string/bookservice
Replace connection string  with the one you got from MongoDB Atlas.

Similarly follow the same steps to setup the Database connection for Customers and Orders Service by navigating to Customers and Orders folder respectfully

The mongo_url inside env file will be
mongo_url=connection string/customerservice for Customer Service .env file
mongo_url=connection string/orderservice   for  Order Service .env File

Note: Replace the ip address inside orders.js file under orders directory with your actual ip address

<p>You are all set Navigate back to root Directory of this repo and continue with the setup</p>
