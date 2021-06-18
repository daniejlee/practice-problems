var kthSmallest = function(root, k) {
    const results = [];
    function traverse(node) {
        if(!node) return;
        traverse(node.left);
        results.push(node.val);
        traverse(node.right);
    }
    traverse(root)
    // if(k > results.length)
    for(let i = 0; i < results.length; i++) {
        if(i === k - 1) return results[i];
    }
};
