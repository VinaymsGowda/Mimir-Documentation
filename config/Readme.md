# Setting up mimir to write data into our Minio Object Storage

Open ur Minio Server which we set up earlier in this Documentation running at port 9001

# Go to Access Key Page and Create a new access key.

**Note** While Creating the Access Key Download and import the keys.
On Downloading the Key you will get credentials.json downloaded on your System.
We will be Using the Secret key and the Access Key in the json later on for Authentication while Writing Data.

# Now Go to Buckets Page at under Administrator Section of minio Server

Create a bucket with a name of your choice as we will be using this bucker to store our data.

Now let's start setting Mimir up for writing data into our newly created bucket:

1. Go to the mimir.yaml file and find this code

```bash
    s3:
      endpoint: IP_Address:9000  # IP address of the server
      access_key_id: <Access Key from credentials.json>
      secret_access_key: <Secret Key from credentials.json>
      insecure: true
      bucket_name: <Bucket_Name>
```

# You have completed with your Mimir Setup to write data to Minio bucket Storage.


