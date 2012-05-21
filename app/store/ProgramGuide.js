/*
 * File: app/store/ProgramGuide.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MythTouch.store.ProgramGuide', {
    extend: 'Ext.data.Store',
    requires: [
        'MythTouch.model.ChannelModel'
    ],

    config: {
        autoLoad: true,
        groupDir: 'ASC',
        groupField: 'ChanNum',
        model: 'MythTouch.model.ChannelModel',
        storeId: 'ProgramGuide',
        proxy: {
            type: 'ajax',
            directionParam: '',
            enablePagingParams: false,
            extraParams: {
                Details: true
            },
            filterParam: '',
            groupParam: '',
            limitParam: '',
            noCache: false,
            pageParam: '',
            sortParam: '',
            startParam: '',
            url: 'xml-proxy.php?Guide/GetProgramGuide',
            reader: {
                type: 'json',
                idProperty: 'ChanId',
                rootProperty: 'ProgramGuide.Channels',
                totalProperty: 'Count'
            }
        },
        listeners: [
            {
                fn: 'onJsonstoreBeforeLoad',
                event: 'beforeload'
            },
            {
                fn: 'onJsonstoreRefresh',
                event: 'refresh'
            }
        ]
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {

        dt = new XDate(true); // current date & time as UTC

        theproxy = store.getProxy();
        theproxy.setExtraParam('StartTime', Ext.Date.format(dt, 'Y-m-d\\TH:i:00'));

        dt.addHours(4);
        theproxy.setExtraParam('EndTime', Ext.Date.format(dt, 'Y-m-d\\TH:i:00'));

    },

    onJsonstoreRefresh: function(store, data, eOpts) {
        store.each(function (record) {
            record.ProgramsStore.sort('StartTime', 'ASC');
        });

    }

});