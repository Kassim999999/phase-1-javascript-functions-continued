// code your solution here

function saturdayFun (activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
    
}
saturdayFun();
saturdayFun('go to the club');

function mondayWork(activity = 'go to the office') {
    return(`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork('I will work from home.')

function wrapAdjective(wrap = '*') {
    return function(adjective = "special") {
        return `You are ${wrap}${adjective}${wrap}!`;
    };
}