import * as React from 'react';

var Button = function (_a) {
    var color = _a.color;
    return React.createElement("button", { className: "text-yellow-600 bg-gray-500" },
        "Boop ", "".concat(color));
};

export { Button };
