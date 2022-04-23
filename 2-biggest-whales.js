const owners = require('./untraded-owners')

let sortable = [];
for (var owner in owners) {
    sortable.push([owner, owners[owner]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(sortable.reverse().slice(0, 10))