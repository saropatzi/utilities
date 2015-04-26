var mergeOptions = function(defaultOptions, customOptions){
    if (typeof customOptions != 'undefined' && customOptions) {
        for (var attributeName in defaultOptions) {
            if (typeof customOptions[attributeName]!='undefined' && customOptions[attributeName]){
                if (typeof defaultOptions[attributeName] === 'object' && typeof customOptions[attributeName] === 'object'){
                    mergeOptions(defaultOptions[attributeName], customOptions[attributeName]);
                } else if (typeof defaultOptions[attributeName] === typeof customOptions[attributeName]){
                    defaultOptions[attributeName] = customOptions[attributeName];
                }
            }
        }
    }
    return defaultOptions;
};