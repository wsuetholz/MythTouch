/*
 * File: app/controller/GridGuideView.js
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

Ext.define('MythTouch.controller.GridGuideView', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            programTimes: {
                selector: 'programTimes',
                xtype: 'programTimes',
                autoCreate: false
            }
        },

        control: {
            "guidedataview": {
                initialize: 'onGuideDataViewInitialize'
            }
        }
    },

    onGuideDataViewInitialize: function(component, options) {
        ProgTimes = this.getProgramTimes();
        ProgTimes.setHtml('<table width="100%" border="0" cellpadding="4" cellspaceing="2" class="x-toolbar-dark"><tr><td class="x-channel-heading">Channel</td>');

        StartTime = XDate(Ext.getStore('ProgramGuide').getProxy().getExtraParams().StartTime, true); // create as UTC date

        hour = parseInt(StartTime.toLocaleTimeString().split(":")[0], 10); // convert to local time 
        min = parseInt(StartTime.toLocaleTimeString().split(":")[1], 10); // convert to local time
        for (i=0; i < 3; i++) {
            hours = hour + i;
            if (hours > 24) {
                hours = hours % 24;
            }
            for (j=0; j < 4; j++) {
                mins = min + (j * 15);
                if (mins > 60) {
                    mins = mins % 60;
                }
                ProgTimes.setHtml(ProgTimes.getHtml() + '<td width="8%" class="x-channel x-channel-heading-time">' + zeroPad(hours,2) + ':' + zeroPad(mins,2) +'</td>');
            }
        } 
        ProgTimes.setHtml(ProgTimes.getHtml() + '</tr></table>');

    }

});