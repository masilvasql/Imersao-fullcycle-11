package consumer

import (
	"context"
	"fmt"

	"github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/masilvasql/imersao10-consolidacao/internal/infra/kafka/factory"
	"github.com/masilvasql/imersao10-consolidacao/pkg/uow"
)

func Comsume(topics []string, servers string, msgChan chan *kafka.Message) {
	kafkfaConsumer, err := kafka.NewConsumer(&kafka.ConfigMap{
		"bootstrap.servers": servers,
		"group.id":          "gostats",
		"auto.offset.reset": "earliest",
	})
	if err != nil {
		panic(err)
	}

	kafkfaConsumer.SubscribeTopics(topics, nil)

	for {
		msg, err := kafkfaConsumer.ReadMessage(-1)
		if err == nil {
			msgChan <- msg
		}
	}
}

func ProcessEvents(ctx context.Context, msgsChan chan *kafka.Message, uow uow.UowInterface) {
	for msg := range msgsChan {
		fmt.Println("Received message", string(msg.Value), "on topic", *msg.TopicPartition.Topic)
		strategy := factory.CreateProcessMessageStrategy(*msg.TopicPartition.Topic)
		err := strategy.Process(ctx, msg, uow)
		if err != nil {
			fmt.Println(err)
		}
	}
}
