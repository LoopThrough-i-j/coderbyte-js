// @ts-nocheck
const given_app = require("./given_app")
const modified_app = require("./modified_app")

describe("Test Empty Event", () => {
    test('Event value undefined', () => {
        let event = undefined
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });
    
    test('Event value null', () => {
        let event = null
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('Event value 0', () => {
        let event = 0
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('Event value 1', () => {
        let event = 1
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('Event value "a"', () => {
        let event = "a"
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('Event value {}', () => {
        let event = {}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });
})

describe("Test with Event Contains Partition Key", () => {
    test('partitionKey = "aksljdnfiewjcdsailkjnsa"', () => {
        let event = {partitionKey: "aksljdnfiewjcdsailkjnsa"}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        )
    })
    
    test('partitionKey = 988', () => {
        let event = {partitionKey: 988}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('partitionKey = {something: ["abc", 123]}', () => {
        let event = {partitionKey: {something: ["abc", 123]}}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });
})



describe("Test Valid Candidate", () => {
    test('partition key length > MAX_LENGTH partitionKey = "aksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsa"', () => {
        let event = {partitionKey: "aksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsaaksljdnfiewjcdsailkjnsa"}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        )
    })
    
    test('partition key length < MAX_LENGTH', () => {
        let event = {partitionKey: "100"}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });

    test('partition key not provided', () => {
        let event = {something: "else"}
        expect(
            given_app.deterministicPartitionKey(event)
        ).toBe(
            modified_app.deterministicPartitionKey(event)
        );
    });
})