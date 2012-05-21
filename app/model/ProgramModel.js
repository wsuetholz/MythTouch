/*
 * File: app/model/ProgramModel.js
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

Ext.define('MythTouch.model.ProgramModel', {
    extend: 'Ext.data.Model',
    uses: [
        'MythTouch.model.RecordingModel'
    ],
    config: {
        fields: [
            {
                name: 'StartTime'
            },
            {
                name: 'EndTime'
            },
            {
                name: 'Title'
            },
            {
                name: 'SubTitle'
            },
            {
                name: 'Description',
                type: 'string'
            },
            {
                name: 'Category'
            },
            {
                name: 'Repeat'
            },
            {
                name: 'Stars',
                type: 'int'
            }
        ],
        hasOne: {
            associationKey: 'Recording',
            model: 'MythTouch.model.RecordingModel',
            associatedName: 'Recording'
        }
    }
});