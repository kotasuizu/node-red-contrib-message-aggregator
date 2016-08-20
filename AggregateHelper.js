/**
* Copyright (c) 2016 Kota Suizu
* Released under the MIT license
* http://opensource.org/licenses/mit-license.php
**/

var aggrArray = null

function AggregateHelper() {
    aggrArray = {};
}

AggregateHelper.prototype.aggregate = function(aggrKey, connCount, msgObj, callback) {
    var myaggregations = parseInt(connCount);

    // Aggregate初回到着処理
    if ((aggrArray[aggrKey] === undefined) || (aggrArray[aggrKey] === null)) {
        var myAggrObj = {
            "n": myaggregations,
            "data": new Array(myaggregations)
        };
        aggrArray[aggrKey] = myAggrObj;
    }

    // 入力数を減らす
    aggrArray[aggrKey].n--;
    // msg.payloadのデータを格納
    aggrArray[aggrKey].data[aggrArray[aggrKey].n] = msgObj;

    // Aggregate処理
    var result = null;
    if (aggrArray[aggrKey].n === 0) {
        result = new Array(myaggregations);
        for (var i = 0; i < myaggregations; i++) {
            result[i] = aggrArray[aggrKey].data[i].payload;
        }
        delete aggrArray[aggrKey];
    }

    callback(result);
};


module.exports = AggregateHelper;
