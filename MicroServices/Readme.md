<h1>Micro-Service</h1>

<p>Steps to run the micro-Service setup</p>

<h2>Pre-requisites</h2>

<ol>
<li>Nodejs</li>
<li>MongoDB Atlas Account</li>
</ol>

<p>Login to your MongoDB Atlas Account and create a cluster</p>
<p>After creating a cluster Navigate to Database and click Connect</p>
<p>1.First Enter the Database username and Password</p>
<p>2.Choose a Connection Method</p>
  <p>Choose Driver as Nodejs </p>
<p>3. You will see a connection String below , copy it and Replace <password> with the password for the user.
</p>

<bold>Store this connection String in a Notepad we will be using it to setup database connection  in our application.</bold>

To setup Database connection to the books MicroService

<bold>Steps</bold>

<ol>
    <li>
    1
        ```bash
            cd books     # Navigate into the books folder
         ```
    </li>
    <li>
    2
       Create a .env file add the following content inside it
       ```bash
       mongo_url=<Connection String>/bookservice
       ```
       Replace the Connection String with  the one you got from MongoDB atlas
    </li>
</ol>

<h2>Now The database connection is done</h2>


