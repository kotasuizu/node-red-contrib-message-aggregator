/**
* Copyright (c) 2016 Kota Suizu
* Released under the MIT license
* http://opensource.org/licenses/mit-license.php
**/

module.exports = function(RED) {
    "use strict";
    var AggregateHelper = require('./AggregateHelper.js');
    var helper = new AggregateHelper();

    // Aggregator-Node
    function Aggregator(n) {
        RED.nodes.createNode(this, n);

        this.aggregations = n.aggregations;

        var node = this;
        this.on('input', function(msg) {
            helper.aggregate(msg.CorrelId.toString(), node.aggregations, msg, function(result) {
                // Aggregate処理
                if ((result !== undefined) && (result !== null)) {
                    msg.payload = result;
                    node.send(msg);
                    node.log(RED._('Succeeded to aggregate.'));
                }
            });
        });
    }
    RED.nodes.registerType("Aggregator", Aggregator);
}
