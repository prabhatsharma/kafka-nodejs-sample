var Kafka = require('kafkajs').Kafka

plain_servers = ["b-1.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092", "b-3.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092", "b-2.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092"]


const kafka = new Kafka({
  clientId: 'app1',
  brokers: plain_servers
})

const producer = kafka.producer()

f1()

async function f1() {
  await producer.connect()
  await producer.send({
    topic: 'jsapp1',
    messages: [
      { value: 'Hello from KafkaJS user!' },
    ],
  })

  await producer.disconnect()
}


