// @ts-ignore
const crypto = require("crypto")

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0"
    const MAX_PARTITION_KEY_LENGTH = 256
    let candidate, partitionKey

    // if event is not provided return TRIVIAL_PARTITION_KEY
    if (!event) return TRIVIAL_PARTITION_KEY


    // if partition key is provided in the event we extract a valid 
    // stringified verison of the key  
    if (event.partitionKey && typeof event.partitionKey !== "string")
        partitionKey = JSON.stringify(event.partitionKey);
    else if (event.partitionKey && typeof event.partitionKey === "string")
        partitionKey = event.partitionKey
    
    
    // We set the candidate depending upon the condion of given partition key
    if (partitionKey && partitionKey.length <= MAX_PARTITION_KEY_LENGTH )
        candidate = partitionKey;
    else if (partitionKey && partitionKey.length > MAX_PARTITION_KEY_LENGTH )
        candidate = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    else
        candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");

    
    return candidate;
};
