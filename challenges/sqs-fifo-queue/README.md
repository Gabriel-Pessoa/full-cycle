
# Implementing FIFO Queue with Amazon SQS
This project provides a practical example of how to configure and use a FIFO Queue in Amazon SQS, ensuring the ordered processing of messages in distributed systems.

## 📄 Description
The solution demonstrates how to send and consume messages from a FIFO queue using the AWS SDK. It is ideal for scenarios where the sequence of events is critical and must be preserved.

## 🚀 Features
- Creation of a FIFO queue in Amazon SQS

- Sending messages with MessageGroupId and MessageDeduplicationId

- Ordered consumption of messages

- Guaranteed processing without duplication

## 🛠️ Prerequisites
- Docker
- Docker Compose

## 🚀 How to Run

1. Start the SQS service:
```bash
make up-sqs
```

2. Create a FIFO queue:
```bash
docker exec sqs awslocal sqs create-queue --queue-name my-queue.fifo --attributes "FifoQueue=true,ContentBasedDeduplication=true"
```

3. Start the application:
 ```bash
make up-app
```

4. Access logs:
 ```bash
make log-app
```