var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewsSchema = new Schema(
    {
        "properties":{
            "item":{
                "items":{
                    "properties":{
                        "description":{
                            "type":"string"
                        },
                        "guid":{
                            "type":"string"
                        },
                        "link":{
                            "type":"string"
                        },
                        "pubDate":{
                            "type":"string"
                        },
                        "title":{
                            "type":"string"
                        }
                    },
                    "type":"object"
                },
                "type":"array"
            },
            "language":{
            "type":"string"
            },
            "lastBuildDate":{
            "type":"string"
            }
        },
        "type":"object"
    }
)

module.exports = mongoose.model('Quotes', NewsSchema);