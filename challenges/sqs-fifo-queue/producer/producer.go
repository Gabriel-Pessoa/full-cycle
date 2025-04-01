package producer

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/sqs"
)

func SendMessages(ctx context.Context, sqsClient *sqs.Client, queueUrl, messageGroupID, messageBodyPattern string) {
	for i := 0; i < 10; i++ {
		messageBody := fmt.Sprintf("%s. Sequence Number: %d", messageBodyPattern, i)

		_, err := sqsClient.SendMessage(ctx, &sqs.SendMessageInput{
			MessageBody:    aws.String(messageBody),
			QueueUrl:       aws.String(queueUrl),
			MessageGroupId: aws.String(messageGroupID),
		})
		if err != nil {
			log.Fatalln("could not send message:", err)
		}
	}
}
