export const create = (x, y, z) => ({ x, y, z })

export const length = (data) => Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z)

export const normalize = (data) => {
  const len = length(data)
  return len > 0
    ? create(data.x / len, data.y / len, data.z / len)
    : create(data.x, data.y, data.z)
}

export const add = (data, other) => create(data.x + other.x, data.y + other.y, data.z + other.z)

export const subtract = (data, other) => create(data.x - other.x, data.y - other.y, data.z - other.z)

export const multiply = (data, scalar) => create(data.x * scalar, data.y * scalar, data.z * scalar)

export const divide = (data, scalar) => create(data.x / scalar, data.y / scalar, data.z / scalar)

export const dot = (data, other) => data.x * other.x + data.y * other.y + data.z * other.z

export const cross = (data, other) =>
  create(data.y * other.z - data.z * other.y, data.z * other.x - data.x * other.z, data.x * other.y - data.y * other.x)

const v = create(1, 2, 3)
console.log(length(v))
const v2 = normalize(v)
const v3 = add(v2, create(2, 3, 4))
const v4 = subtract(v2, create(2, 3, 4))
const v5 = multiply(v2, 2)
const v6 = divide(v2, 2)
const v7 = dot(v2, create(2, 3, 4))
const v8 = cross(v2, create(2, 3, 4))
