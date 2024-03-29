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
<img src:"./images/tutorial-architecture.png"/>

<h1>The Above Diagram Explain this</h1>

<div>
    <p>Prometheus which is a used for Scrapping Metrics remote writes the data to Mimir</p>
    <p>A load balancer is a device or software that distributes network or application traffic across multiple servers.
    In this Documentation I am using Nginx load balancer which distributes the read and write requests about multiple mimir instances
    </p>
    <p>Mimir Instances are Responsible for doing read and write requests to the object Storage(In our Case we are using Minio for Object Storage)</p>
</div>

**Note:** We will be using docker to setup our service.Make sure you have Docker installed and running on your machine.

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

5. Navigate to 'ip_address':9001 and login to minio server with 
    username:admin
    password:password

Now that you have Minio Server running on Port 9001 , let's move forward to next steps.

In this Documentation i will be explaining on how to setup Mimir instances to write data to Minio Object Storage.

<!-- Explain About Docker Compose file which will have  all the services needed -->

1. Navigate to the MicroServices directory and follow the instructions given there to setup your Nodejs MicroService.
2. Now that you have the Micro-Service Setup with appropriate details we will start with our docker compose file.

3. We will be using the following images  from Docker Hub :
    # Grafana : grafana/grafana Running at Port 3000
    Grafana is an open-source platform for monitoring and observability. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. With Grafana, you can create, explore, and share dashboards with your team to foster a data-driven culture.


    ### Features:
   - **Visualizations**: Create dynamic and reusable dashboards with a wide range of visualization options.
   - **Alerts**: Set up alerts to notify you of potential issues within your metrics.
   - **Annotations**: Mark events on graphs to provide additional context.
   - **Explore**: Drill down into your metrics for ad-hoc querying and analysis.
   - **Scalability**: Designed to handle large amounts of data, making it suitable for small and large organizations alike.

    Grafana supports a multitude of data sources, including Prometheus, Elasticsearch, and many more, making it a versatile tool for any data-driven team.

    # prometheus : prom/prometheus  Running at Port 9090

     Prometheus collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if certain conditions are observed.

    ### Features:
    - **Multi-Dimensional Data Model**: Metrics are identified by a name and key/value pairs.
    - **PromQL**: A powerful query language to leverage the dimensionality of data.
    - **Pull Model**: Time series collection via an HTTP pull model.
    - **Service Discovery**: Targets are discovered via service discovery or static configuration.

    Prometheus is particularly well-suited for collecting time-series data in a microservices architecture.
   
    # cadvisor : gcr.io/cadvisor/cadvisor:latest Running at Port 8081

    ## cAdvisor (Container Advisor)

    cAdvisor is an open-source tool that provides container users with insights into resource usage and performance characteristics of their running containers. It's a daemon that collects, aggregates, processes, and exports information about running containers, offering a detailed view of resource isolation parameters, historical resource usage, and network statistics.

    ### Features:
    - **Real-time Metrics**: Tracks CPU, memory, filesystem, and network usage statistics.
    - **Container Efficiency**: Helps identify containers using excessive resources.
    - **Prometheus Integration**: Exports data in Prometheus format for easy integration.
    - **Comprehensive Visibility**: Provides a detailed look at the resource usage of containers.

    cAdvisor is designed to monitor the whole machine and is particularly useful in a microservices architecture where containerization is prevalent.

    # redis : redis:latest 

    The `redis:latest` Docker image is the official Redis server image that provides an in-memory data structure store, used as a database, cache, and message broker. This image is commonly used in conjunction with monitoring tools like cAdvisor to store container metrics efficiently.

    ### Features:
    - **In-Memory Storage**: Offers high-performance data storage and retrieval.
    - **Persistence**: Supports various persistence options for durability.

    # Node-exporter : prom/node-exporter:latest Running at Port 9100

    The `prom/node-exporter:latest` Docker image provides the latest version of the Node Exporter, which is a powerful tool for monitoring system-level metrics on systems. It's designed to collect a wide variety of hardware- and OS-level metrics, making it an essential part of any Prometheus monitoring setup.

    ### Features:
    - **Comprehensive Metrics**: Collects detailed system metrics including CPU, memory, disk, and network utilization.
    - **Prometheus Integration**: Seamlessly integrates with Prometheus for efficient monitoring and alerting.

    # mimir : grafana/mimir:latest

    A Mimir instance refers to a single deployment of Grafana Mimir, which is designed for long-term storage and high-availability monitoring of Prometheus metrics. It's built to handle large-scale data and provides a robust solution for time-series data management.

    ### Features:
    - **Scalable**: Can process and store vast amounts of metrics efficiently.
    - **Durable**: Utilizes object storage for reliable, long-term retention of data.

    # MinIO : minio/minio Running at Port 9001

    MinIO is an open-source object storage service that provides high-performance, S3 compatible storage.
    Here in this Documentation we will be using Minio Object Storage to store Metrics Data.

    ### Key Features:
    - **High Performance**: Optimized for speed with a minimalistic design.
    - **Scalability**: Can handle petabytes of data and millions of objects.
    - **Security**: Provides robust security features, including encryption and access management.


1. Navigate to Prometheus directory and follow the instructions there.
2. After Completing the setup of Prometheus 
3. Go to the config directory and follow the instructions there. 
4. Now we have Setup our Bucket in Minio Server to write  Metric Data.
5. After Completing the setup Mentioned in config directory we have all pre requisites configured

# Now Start the Docker Compose setup in docker-compose.yaml using the below Command

```bash
docker-compose up -d