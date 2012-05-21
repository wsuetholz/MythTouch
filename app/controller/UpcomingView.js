/*
 * File: app/controller/UpcomingView.js
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

Ext.define('MythTouch.controller.UpcomingView', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'ScheduledView'
        ],

        refs: {
            main: {
                selector: 'upcomingview',
                xtype: 'upcomingview',
                autoCreate: false
            }
        },

        control: {
            "upcominglist": {
                disclose: 'onListDisclose'
            }
        }
    },

    onListDisclose: function(list, record, target, index, e, options) {
        this.getMain().push({
            xtype: 'recordingdetail',
            data: record.data,
            title: record.data.Title
        });
    }

});