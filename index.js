const createVector3 = (x, y, z) => ({ x, y, z })

const length = (data) => Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z)

const normalize = (data) => {
  const len = length(data)
  return len > 0
    ? createVector3(data.x / len, data.y / len, data.z / len)
    : createVector3(data.x, data.y, data.z)
}

const add = (data, other) => createVector3(data.x + other.x, data.y + other.y, data.z + other.z)

const subtract = (data, other) => createVector3(data.x - other.x, data.y - other.y, data.z - other.z)

const multiply = (data, scalar) => createVector3(data.x * scalar, data.y * scalar, data.z * scalar)

const divide = (data, scalar) => createVector3(data.x / scalar, data.y / scalar, data.z / scalar)

const dot = (data, other) => data.x * other.x + data.y * other.y + data.z * other.z

const cross = (data, other) =>
  createVector3(data.y * other.z - data.z * other.y, data.z * other.x - data.x * other.z, data.x * other.y - data.y * other.x)

const v = createVector3(1, 2, 3)
console.log(length(v))
const v2 = normalize(v)
const v3 = add(v2, createVector3(2, 3, 4))
const v4 = subtract(v2, createVector3(2, 3, 4))
const v5 = multiply(v2, 2)
const v6 = divide(v2, 2)
const v7 = dot(v2, createVector3(2, 3, 4))
const v8 = cross(v2, createVector3(2, 3, 4))
