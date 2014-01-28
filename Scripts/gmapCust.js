
function LongPress(map, length) {
    this.length_ = length;
    var me = this;
    me.map_ = map;
    me.timeoutId_ = null;
    google.maps.event.addListener(map, 'mousedown', function (e) {
        me.onMouseDown_(e);
    });
    google.maps.event.addListener(map, 'mouseup', function (e) {
        me.onMouseUp_(e);
    });
    google.maps.event.addListener(map, 'drag', function (e) {
        me.onMapDrag_(e);
    });
};
LongPress.prototype.onMouseUp_ = function (e) {
    clearTimeout(this.timeoutId_);
};
LongPress.prototype.onMouseDown_ = function (e) {
    clearTimeout(this.timeoutId_);
    var map = this.map_;
    var event = e;
    this.timeoutId_ = setTimeout(function () {
        google.maps.event.trigger(map, 'longpress', event);
    }, this.length_);
};
LongPress.prototype.onMapDrag_ = function (e) {
    clearTimeout(this.timeoutId_);
};