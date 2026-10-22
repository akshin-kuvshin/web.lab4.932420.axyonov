function findMaxDistance(d) {
    let maxDistance = arr[0];
    for (const d_i of d)
        if (maxDistance < d_i)
            maxDistance = d_i;
    return maxDistance;
}

function filterLongRoutes(d) {
    const longRouteCriteria = 100;
    const longRoutes = [];
    for (const d_i of d)
        if (d_i > longRouteCriteria)
            longRoutes.push(d_i);
    return longRoutes;
}

function calculateTotalDistance(d) {
    let totalDistance = 0;
    for (const d_i of d)
        totalDistance += d_i;
    return totalDistance;
}
