/*
 * File: app/view/ScheduledList.js
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

Ext.define('MythTouch.view.ScheduledList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.scheduledList',

    config: {
        ui: 'round',
        store: 'UpComingProgramStore',
        grouped: true,
        onItemDisclosure: true,
        itemTpl: [
            '<img src="{Channel.IconURL}"  />',
            '<div class="list-schedule-item-recording-time">{[ Ext.Date.format(Ext.Date.parse(values.StartTime, "c"), "H:i")  ]} - {[ Ext.Date.format(Ext.Date.parse(values.EndTime, "c"), "H:i") ]}</div>',
            '<div class="list-schedule-item-title">{Title}</div>',
            '<div class="list-schedule-item-subtitle">{SubTitle}</div>',
            '<div class="list-schedule-item-description">{Description}</div>'
        ]
    }

});