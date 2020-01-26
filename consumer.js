var Kafka = require('kafkajs').Kafka

plain_servers = ["b-1.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092","b-3.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092","b-2.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092"]


const kafka = new Kafka({
    clientId: 'app1',
    brokers: plain_servers
  })

const consumer = kafka.consumer({groupId: 'group1',})

f1()

async function f1 () {
    await consumer.connect()
    await consumer.subscribe({
      topic: 'AWSKafkaTutorialTopic',
    })

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })
    
    // await consumer.disconnect()
}


