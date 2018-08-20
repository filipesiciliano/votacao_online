module.exports.cron = {
    // ['seconds', 'minutes', 'hours', 'dayOfMonth', 'month', 'dayOfWeek']
    myFirstJob: {
        schedule: '* * * * * *',
        onTick: function() {
          console.log('I am triggering when time is come');
        },
        onComplete: function() {
          console.log('I am triggering when job is complete');
        },
        start: true, // Start task immediately
        timezone: 'America/Sao_Paulo', // Custom timezone
        context: undefined, // Custom context for onTick callback
        runOnInit: true // Will fire your onTick function as soon as the requisit initialization has happened.
      }
  };