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

function main() {
    let userName = prompt("Введите ваше имя:");

    // invalid userName case processing
    if (userName === null || userName.trim() === "") {
        userName = "Путешественник";
    }



    const distances = [25, 140, 75, 220, 15, 90];

    const maxDistance = findMaxDistance(distances);
    const totalDistance = calculateTotalDistance(distances);

    const longRoutes = filterLongRoutes(distances);
    const longRoutesTotalDistance = calculateTotalDistance(longRoutes);

    const shortRoutesCount = distances.length - longRoutes.length;
    const shortRoutesTotalDistance = totalDistance - longRoutesTotalDistance;
}

main()
