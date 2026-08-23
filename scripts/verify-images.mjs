import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const galleryDir = path.resolve(__dirname, '../public/images/gallery')
const available = new Set(fs.readdirSync(galleryDir).map((f) => f.replace('.jpg', '')))

let missingCount = 0

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const regex = /getLocalImageUrl\(['"]([^'"]+)['"]\)/g
  let match
  while ((match = regex.exec(content)) !== null) {
    const key = match[1]
    if (!available.has(key)) {
      console.error(`MISSING IMAGE KEY: "${key}" in ${filePath}`)
      missingCount++
    }
  }
}

function scan(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    if (fs.statSync(p).isDirectory()) {
      scan(p)
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      checkFile(p)
    }
  }
}

scan(path.resolve(__dirname, '../src'))

if (missingCount === 0) {
  console.log(`All getLocalImageUrl references are valid! (${available.size} local images available)`)
} else {
  console.error(`Found ${missingCount} missing image keys.`)
}
