package consumer

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/sqs"
	"github.com/aws/aws-sdk-go-v2/service/sqs/types"
)

func ReceiveMessages(ctx context.Context, sqsClient *sqs.Client, queueUrl string) {
	for {

		result, err := sqsClient.ReceiveMessage(ctx, &sqs.ReceiveMessageInput{
			QueueUrl: aws.String(queueUrl),
			MessageSystemAttributeNames: []types.MessageSystemAttributeName{
				types.MessageSystemAttributeNameMessageGroupId,
			},
		})
		if err != nil {
			log.Fatalln("could not receive message:", err)
		}

		processMessage(ctx, sqsClient, queueUrl, result.Messages)
	}
}

func processMessage(ctx context.Context, sqsClient *sqs.Client, queueUrl string, messages []types.Message) {
	for _, msg := range messages {

		messageGroupID := msg.Attributes["MessageGroupId"]

		fmt.Printf("MessageBody: %s, MessageGroupId: %s\n", *msg.Body, messageGroupID)

		_, err := sqsClient.DeleteMessage(ctx, &sqs.DeleteMessageInput{
			QueueUrl:      aws.String(queueUrl),
			ReceiptHandle: msg.ReceiptHandle,
		})
		if err != nil {
			fmt.Printf("Could not delete message: messageBody=%s, error=%v\n", *msg.Body, err)
		}
	}
}
