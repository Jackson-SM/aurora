import { createClient } from 'redis'

const redis = createClient()

async function initRedis() {
  redis.on('error', (err) => console.log('Redis Client Error', err))

  await redis.connect().then(() => {
    console.log('Redis connected')
  })
}

export { initRedis, redis }
