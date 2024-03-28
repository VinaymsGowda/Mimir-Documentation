<h1>Grafana Mimir Documentation</h1>

## Grafana Mimir

Grafana Mimir is a powerful, open-source time-series database optimized for storing and querying large volumes of metrics. It's built to work seamlessly with Prometheus, a popular monitoring tool.

### Why Grafana Mimir?
- **Scalable**: Handles a vast amount of data without a hitch.
- **Durable**: Uses object storage to keep your data safe over the long term.

Grafana Mimir is compatible with various object store implementations like  Amazon S3, Google Cloud Storage.
In this Repository i am using Grafana Mimir to Store Data in Minio Object Storage

So basically Grafana Mimir helps us to store our Prometheus Data in an Object Store .

<bold>Architecture of Grafana Mimir to write data to Object store</bold>
<img src="./images/tutorial-architecture.png"/>

<h1>The Above Diagram Explain this</h1>

<div>
    <p>Prometheus which is a used for Scrapping Metrics remote writes the data to Mimir</p>
    <p>A load balancer is a device or software that distributes network or application traffic across multiple servers.
    In this Documentation I am using Nginx load balancer which distributes the read and write requests about multiple mimir instances
    </p>
    <p>Mimir Instances are Responsible for doing read and write requests to the object Storage(In our Case we are using Minio for Object Storage)</p>
</div>

<h1>What are the Pre Requisites to run Grafana Mimir?</h1>

    <h1>First we will need a Object Storage for Mimir.</h1>
    <p>MinIO is a high-performance, S3 compatible object store</p>

    <bold>Steps to Setup Minio Server on your System</bold>
    
    Run Powershell as an administrator and run the following commands

1. This Command will install the minio executable file in your C Drive
    ```bash
    Invoke-WebRequest -Uri "https://dl.min.io/server/minio/release/windows-amd64/minio.exe" -OutFile "C:\minio.exe"
    
2. This Command will set root user for minio
     ```bash
    setx MINIO_ROOT_USER admin

3. This command will set the password for above user 
    ```bash
    setx MINIO_ROOT_USER password
    
4. This Command will start the minio Server
    ```bash
    C:.\minio.exe server C:\Data --console-address ":9001"

    Navigate to localhost:9001 and login to minio server with 
    username:admin
    password:password


