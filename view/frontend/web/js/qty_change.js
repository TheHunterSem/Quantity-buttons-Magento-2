define([
    'jquery'
], function ($) {
    'use strict';

    $.widget('elogic.incrementDecrementQty', {
        options: {
            selector: '#qty-decrement, #qty-increment',
            increment: "#qty-increment",
            qty: "#qty"
        },
        _create: function() {
            this.event();
        },
        event: function () {
            var self = this;

            $(document).on('click', self.options.selector, function(){

                var element = $(this);
                var oldValue = $(self.options.qty).val();
                var newVal = 0;

                if (element.is(self.options.increment)) {
                    newVal = parseFloat(oldValue) + 1;
                } else {
                    if (oldValue > 1) {
                        newVal = parseFloat(oldValue) - 1;
                    }
                    if(oldValue == 1){
                        newVal = parseFloat(oldValue);
                    }
                }
                $(document).find(self.options.qty).val(newVal);
            });
        }
    });

    return $.elogic.incrementDecrementQty;

});