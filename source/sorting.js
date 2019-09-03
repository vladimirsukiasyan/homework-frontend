'use strict';

const sorting = (objects, params) => {
    if([objects,params].every(Array.isArray)){
        objects.sort((object1, object2) => {
            for (let param of params) {
                if (object1[param] > object2[param]) return 1;
                else if (object1[param] < object2[param]) return -1;
            }
            return 0;
        });
    }
    return objects;
};