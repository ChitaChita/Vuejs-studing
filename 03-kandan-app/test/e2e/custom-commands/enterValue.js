exports.command = function(selector, event, keyCode){
    return this.this.clearValue(selector)
        .setValue(selector, value)
        .trigger(selector, 'keyup', 13)
}