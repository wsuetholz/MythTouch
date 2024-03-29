/*
 * File: app/model/ChannelModel.js
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

Ext.define('MythTouch.model.ChannelModel', {
    extend: 'Ext.data.Model',
    uses: [
        'MythTouch.model.ProgramModel'
    ],
    config: {
        fields: [
            {
                name: 'ChanId',
                sortType: 'asInt',
                type: 'int'
            },
            {
                name: 'ChanNum',
                sortType: 'asText',
                type: 'int'
            },
            {
                name: 'CallSign'
            },
            {
                convert: function(v, rec) {
                    if (v === '') {
                        v = 'resources/images/blank.png';
                    } else {
                        v = "img-proxy.php?" + v.replace("?", "&");
                    }
                    return v;

                },
                name: 'IconURL',
                type: 'string'
            },
            {
                name: 'ChannelName'
            }
        ],
        hasMany: {
            associationKey: 'Programs',
            model: 'MythTouch.model.ProgramModel',
            autoLoad: true,
            name: 'Programs',
            associatedName: 'Programs'
        }
    }
});