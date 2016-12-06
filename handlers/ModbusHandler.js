var Modbus = require('jsmodbus');
var Promise = require('bluebird');

module.exports = {
    send: function (value) {
        
        var client = Modbus.client.tcp.complete({
            'host'              : '192.168.0.180', 
            'port'              : 502,
            'autoReconnect'     : true,
            'reconnectTimeout'  : 1000,
            'timeout'           : 5000,
            'unitId'            : 0
        });
        
        client.connect();
        client.on('connect', function () {
            return client.writeSingleRegister(321, value).then(function (resp) {
                return resp;
            }, console.error);
        });
    }
};