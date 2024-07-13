import { Entity, QueryParameter } from "./entity"

export class Tree {
    entity: Entity;
    children: Tree[];

    constructor(entity: Entity) {
        this.entity = entity;
        this.children = new Array<Tree>;
    }

    addChild(entity: Entity) {
        this.children.push(new Tree(entity))
    }

    query<OutputEntity>(id: QueryParameter): Response<OutputEntity, void> {
        if (id.entity == this.entity) {

        }
    }

}

abstract class Response<T, E> { 
    private response: string; 
    
    constructor(response: string) {
        this.response = response;
    }
    
    getResponse(){
        return this.response;
    }

    abstract unwrap(): T | E;
}

class Ok<T> extends Response<T, void> {
    data: T

    constructor(data: T) {
        super("Ok");
        this.data = data;
    }
    
    unwrap(): T {
        return this.data;
    }
}

class Err<E> extends Response<void, E> {
    err: E

    constructor(err: E) {
        super("Err");
        this.err = err;
    }

    unwrap(): E {
        return this.err;
    }
}