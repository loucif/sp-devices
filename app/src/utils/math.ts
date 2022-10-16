const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180)

const sphericalToCartesian = (latitude: number, longitude: number, radius: number) => {
    let phi = degreesToRadians(90 - latitude)
    let theta = degreesToRadians(longitude + 180)
    // return x, y, z
    return [-(radius * Math.sin(phi) * Math.cos(theta)), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta)]
}

export { degreesToRadians, sphericalToCartesian }