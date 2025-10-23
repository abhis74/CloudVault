import { client } from "../db.js"
import { connectDB } from "../db.js"
try {

    const db = await connectDB()

    await db.command({
        collMod: 'users', validator: {
            $jsonSchema: {
                required: [
                    '_id',
                    'name',
                    'email',
                    'password',
                    'rootDirId'
                ],
                properties: {
                    _id: {
                        bsonType: 'objectId'
                    },
                    name: {
                        bsonType: 'string',
                        minLength: 3,
                        maxLength: 20,
                        description:"Name field Should be String and atleast 3 character"
                    },
                    email: {
                        bsonType: 'string',
                        description: "Please Enter the valid email "

                    },
                    rootDirId: {
                        bsonType: 'objectId'
                    },
                    password: {
                        bsonType: 'string',
                        minLength: 4
                    }
                },
                additionalProperties: false
            }
        },
        validationAction: "error",
        validationLevel: "strict"
    })
    await db.command({
        collMod: 'folders', validator: {
            $jsonSchema: {
                required: [
                    '_id',
                    'name',
                    'userId',
                    'parentId'
                ],
                properties: {
                    _id: {
                        bsonType: 'objectId'
                    },
                    name: {
                        bsonType: 'string'
                    },
                    parentId: {
                        bsonType: [
                            'objectId',
                            'null'
                        ]
                    },
                    userId: {
                        bsonType: 'objectId'
                    }
                },
                additionalProperties: false
            }
        },
        validationAction: "error",
        validationLevel: "strict"
    })
    await db.command({
        collMod: 'files', validator: {
            $jsonSchema: {
                required: [
                    '_id',
                    'name',
                    'userId',
                    'parentId',
                    'extension'
                ],
                properties: {
                    _id: {
                        bsonType: 'objectId'
                    },
                    name: {
                        bsonType: 'string'
                    },
                    extension: {
                        bsonType: 'string'
                    },
                    parentId: {
                        bsonType: [
                            'objectId',
                            'null'
                        ]
                    },
                    userId: {
                        bsonType: 'objectId'
                    }
                },
                additionalProperties: false
            }
        },
        validationAction: "error",
        validationLevel: "strict"
    })
} catch (err) { console.log(err) } finally {
    await client.close()
}

