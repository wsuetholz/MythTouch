var recStatus = {
          '-8': 'Tuner Busy',
          '-7': 'Low DiskSpace',
          '-6': 'Cancelled',
          '-5': 'Deleted',
          '-4': 'Aborted',
          '-3': 'Recorded',
          '-2': 'Recording',
          '-1': 'Will Record',
            0 : 'Unknown',
            1 : 'Dont Record',
            2 : 'Previous Recording',
            3 : 'Current Recording',
            4 : 'Earlier Showing',
            5 : 'Too Many Recordings',
            6 : 'Not Listed',
            7 : 'Conflict',
            8 : 'Later Showing',
            9 : 'Repeat',
            10: 'Inactive',
            11: 'Never Record'
                };
recTypes = {
            1: 'Record only this showing',
            2: 'Record this program in this timeslot everyday',
            3: 'Record at any time on channel ',
            4: 'Record at any time on any channel',
            5: 'Record this progam in theis timeslot every week',
            6: 'Find and record one showing of this title',
            7: 'Record with override settings',
            8: 'Don\'t record this showing',
            9: 'Find and record one showing of this title each day',
            10: 'Find and record one showing of this title each week'
};