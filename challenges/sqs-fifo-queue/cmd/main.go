package main

import (
	"context"
	"log"

	"github.com/Gabriel-Pessoa/sqs-fifo-queue/consumer"
	"github.com/Gabriel-Pessoa/sqs-fifo-queue/producer"
	"github.com/Gabriel-Pessoa/sqs-fifo-queue/sqs"
)

func main() {
	ctx := context.Background()
	queueUrl := "http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/my-queue.fifo"
	sqsClient := sqs.NewSQSClient(ctx)

	log.Println("App is running!")

	go producer.SendMessages(ctx, sqsClient, queueUrl, "1a2b3c4d", "Hello from producer 1")
	go producer.SendMessages(ctx, sqsClient, queueUrl, "7f8e9d0c", "Hello from producer 2")
	go producer.SendMessages(ctx, sqsClient, queueUrl, "0a9b8c7d", "Hello from producer 3")

	consumer.ReceiveMessages(ctx, sqsClient, queueUrl)
}
