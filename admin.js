var Kafka = require('kafkajs').Kafka

plain_servers = ["b-1.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092", "b-3.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092", "b-2.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:9092"]

zookeeper = "z-1.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:2181,z-2.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:2181,z-3.msk2-3-1.82apco.c2.kafka.us-west-2.amazonaws.com:2181"

const kafka = new Kafka({
    clientId: 'admin',
    brokers: plain_servers
})

admin = kafka.admin()

topic1 = {
    topic: 'jsapp1',
    numPartitions: 3,     // default: 1
    replicationFactor: 2, // default: 1
    replicaAssignment: [],  // Example: [{ partition: 0, replicas: [0,1,2] }] - default: []
    configEntries: []       // Example: [{ name: 'cleanup.policy', value: 'compact' }] - default: []
} 

params = {
    validateOnly: false,
    waitForLeaders: true,
    timeout: 500,
    topics: [topic1]
}

async function f1(){
    await admin.connect()
    await admin.createTopics(params)

    await admin.fetch
    await admin.disconnect()
}

f1()