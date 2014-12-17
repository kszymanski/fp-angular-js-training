app.directive("quantityBar", function(){
    return {
        template: "<div class='quantityIndicator'><div class='ratio'></div></div>",
        restrict: "EA",
        link: function($scope, $elem, $attrs){
            var value = parseInt($attrs.value,10);
            var max = parseInt($attrs.maxValue, 10);
            var ratio;
            if(value >= max){
                ratio = "100%";
            }else{
               ratio = (value / max) * 100 + "%"; 
            }
            $elem.find(".ratio").css("width", ratio);
        }
        
    };
});