import { Entity } from "./entity"
import { Attribute } from "./attribute"

// export class AccessPattern {
//     input: Attribute[]
// }

// USER userid
//     PHOTO photoid
//     POST postid
//     Settings settingsid

// Tree.query() -> Subtree
// Tree.query(FooId) -> Tree (Photos, Posts)


// id = GoogleAuth()
// Tree.query(id) -> Response<T>
// Response {
//      Many(T)
//      One(T)
//      None
//      Error(E)
// }

// Entity Foo
//     label = "Foo"
//     attributes = [...]
//     id: Query = FooId