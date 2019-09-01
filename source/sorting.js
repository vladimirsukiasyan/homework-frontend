'use strict';

const sorting = (objects, params) => {
    objects.sort((object1, object2) => {
        let resultOfCompare;
        for (let param of params) {
            if (object1[param] > object2[param]) return  1;
            else if (object1[param] < object2[param]) return resultOfCompare = -1;
        }
        return resultOfCompare;
    });
    return objects;
};