import { Attribute, DynamoType } from "./attribute"

// entities own an id. Ids are unique number sequences associated with an idenity
// 

// export class Entity {
//     label: string;
//     attributes: Attribute[];

//     constructor(label: string) {
//         this.label = label;
//         this.attributes = new Array<Attribute>;
//     }

//     addAttribute(attribute: Attribute) {
//         this.attributes.push(attribute);
//     }
// }

// export interface Entity<T> {
//     label: string;
//     attributes: Attribute[];
//     getQueryParameter(): QueryParameter<T>;
// }

// class User implements Entity<User> {
//     label: string;
//     attributes: Attribute[];

//     constructor(label: string) {
//         this.label = label;
//         this.attributes = [new Attribute('id', DynamoType.STRING)];
//     }

//     getQueryParameter(): QueryParameter<User> {
//         this.attributes.forEach((attribute) => {
//             if (attribute.label == 'id') {
//                 let queryParam = QueryParameter<
//             }
//         })
//     }
// }

export class Entity {
    label: string;
    attributes: Attribute[];

    constructor(label: string) {
        this.label = label;
        this.attributes = [new Attribute('id', DynamoType.STRING)]
    }

    getQueryParameter(id: string): QueryParameter {
        const query: QueryParameter = {
            id: id,
            entity: this,
        }

        return query;
    }

}

export interface QueryParameter {
    id: string
    entity: Entity;
}