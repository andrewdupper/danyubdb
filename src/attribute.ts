export class Attribute {
    label: string;
    type: DynamoType;

    constructor(label: string, type: DynamoType) {
        this.label = label;
        this.type = type;
    }
}

export enum DynamoType {
    NUMBER,
    STRING,
    BINARY,
    BOOLEAN,
    LIST,
    MAP,
    SET_NUMBER,
    SET_STRING,
    SET_BINARY,
}