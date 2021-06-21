
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuotesSchema = new Schema(
    {
        "items":{
            "properties":{
                "ask":{
                    "type":"integer"
                },
                "askSize":{
                    "type":"integer"
                },
                "bid":{
                    "type":"integer"
                    },
                "bidSize":{
                    "type":"integer"
                },
                "bookValue":{
                    "type":"number"
                },
                "language":{
                    "type":"string"
                },
                "longName":{
                    "type":"string"
                },
                "market":{
                    "type":"string"
                },
                "marketCap":{
                    "type":"integer"
                },
            }
            "type":"object"
        }
        "type":"array"
        }
)