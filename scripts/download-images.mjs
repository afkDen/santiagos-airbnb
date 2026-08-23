import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const OUT_DIR = path.resolve(__dirname, '../public/images/gallery')

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

// Full verified image list
const IMAGES = [
  { key: 'ext1', uuid: 'aedee59c-00c6-48fc-8edc-e684ae38a6d3' },
  { key: 'ext2', uuid: '6043831d-e9d1-4e7d-a501-1876e1e88edf' },
  { key: 'ext3', uuid: 'ffd5ba89-7c68-48ed-bca7-529add0f6b8e' },
  { key: 'ext4', uuid: '7904e985-91d2-47e1-8d6d-f3ee94cd4baf' },
  { key: 'ext9', uuid: '72b11e48-9433-4fdb-b3da-5fff4c67f5f5' },
  { key: 'ext10', uuid: '98b5142f-e72f-4cdf-8d7a-c91d1a0e356d' },
  { key: 'pool1', uuid: '51364ca8-54b3-4f0b-9840-3f92171707eb' },
  { key: 'pool2', uuid: 'e9fae679-5f90-4c28-9675-71c03be31de0' },
  { key: 'pool3', uuid: '3af6b26c-4a6b-427f-a28a-c767df166b86' },
  { key: 'pool4', uuid: '0017c9e7-9077-4899-86df-49f2dfecd075' },
  { key: 'pool6', uuid: 'b800534f-c860-4d16-a179-fb2c4a90a4b8' },
  { key: 'kara1', uuid: '0602e46f-d78c-4a27-87fb-4a7247813d55' },
  { key: 'kara2', uuid: '066847df-060c-4ae6-ba4c-fbe732b4c9a5' },
  { key: 'kara3', uuid: 'cfbd6cbd-76b3-42d1-bb7b-6ba352d41450' },
  { key: 'bill1', uuid: '0ce25d04-888c-42a6-ad43-4433d8d60294' },
  { key: 'bill2', uuid: 'd689919f-f256-4d90-9753-af61e7965c31' },
  { key: 'arc1', uuid: '0b3fcbdd-4ad1-459b-8dd3-786a774c8521' },
  { key: 'arc2', uuid: '8d5c0226-0717-4fe1-9a76-88c002944ec1' },
  { key: 'arc3', uuid: 'c7618b1a-3fd3-4220-91e9-fdd87d3f4b14' },
  { key: 'din1', uuid: '7ab52115-9626-4fee-94c1-31776317887f' },
  { key: 'din2', uuid: '97ca24a6-4a16-4fdf-8e34-18f5f6d50574' },
  { key: 'din3', uuid: '422ade24-d533-4620-94ef-2f2311c99066' },
  { key: 'kit1', uuid: '07c88337-25d4-4164-977b-ade6a77d9f7f' },
  { key: 'kit2', uuid: '7a14c4ef-4630-4707-b982-b92a72a4cbc3' },
  { key: 'kit3', uuid: '34cbfa30-4591-469a-8bb0-e9e1ea6e3d38' },
  { key: 'kit4', uuid: '679d0422-ca4d-483a-9930-9b9171905841' },
  { key: 'lou1', uuid: '34ce9446-3458-48de-8f19-4f6dee8d8ae1' },
  { key: 'lou2', uuid: '27041d27-0bfc-4148-9167-4f0e51843487' },
  { key: 'lou3', uuid: '53089b73-cb81-40b3-b94e-011048c96502' },
  { key: 'lou4', uuid: 'cd39776f-1169-40fd-9f97-acc3c480ec90' },
  { key: 'liv1', uuid: '5f3c7ae0-83d1-4d7e-80ee-8882caeafb41' },
  { key: 'bed1', uuid: '1dfafeed-b7d8-4ee2-9685-f4b21ee2ac0c' },
  { key: 'bed2', uuid: '1eea7c15-e6bc-480f-9049-7a7ca831306a' },
  { key: 'bed3', uuid: '7fdad08c-cd56-4bd8-9913-df31206d2a71' },
  { key: 'bed4', uuid: '231f8e62-c8af-4ab9-ab7b-749426418278' },
  { key: 'bed5', uuid: '412ac041-c128-4dcb-be95-9613525155ac' },
  { key: 'bed6', uuid: 'a7a5da0a-0cca-4155-a690-85d8a35d5073' },
  { key: 'bed7', uuid: 'a416db78-e791-485f-99cd-681dfc37c943' },
  { key: 'bed8', uuid: 'c7314967-2138-4874-bf9c-036713e1e84f' },
  { key: 'bat1', uuid: '6a64f515-0249-440e-937b-73fe1cc63898' },
  { key: 'bat2', uuid: '7bd29da9-1398-456e-81ab-7f3f06a8b10f' },
  { key: 'bat3', uuid: '73e7dd06-2f9b-479e-8925-0a24bf769a9c' },
  { key: 'bat4', uuid: '380a4b0e-bc04-4540-8ab5-3446055037b4' },
  { key: 'bat5', uuid: '01672d22-f62b-4081-9372-e090179020ca' },
  { key: 'bat6', uuid: '5444278e-4394-474a-aa9f-e233672be193' },
  { key: 'bat7', uuid: 'edf6c0b7-2c0d-416a-895b-ae85e5455368' },
  { key: 'gym1', uuid: '7b8c51d9-24b2-4846-b173-6d2459c53981' },
  { key: 'gym2', uuid: '23fa05de-4f88-4694-9357-74ae76635ab2' },
  { key: 'gym3', uuid: 'd6337543-a580-4b38-aa27-35657a04ec03' },
  { key: 'fir1', uuid: '15fd6a0c-36f4-4c79-a187-279fc9e1d45c' },
  { key: 'bbl1', uuid: '7932f6a1-879d-4276-ab69-433d47ad8ca0' },
  { key: 'bbl2', uuid: 'ff9e2cfe-96b7-4992-8cd8-81499c84335f' },
  { key: 'out1', uuid: '58004ff1-df45-4949-ad63-6316ab7abe96' },
  { key: 'out2', uuid: '77973507-5528-471c-b8ac-e6d0c1968e2b' },
  { key: 'out6', uuid: 'e7b07cde-5fc2-4104-bc75-d55b0feeefbd' },
  { key: 'out7', uuid: 'ee1d6f90-bc3c-486b-a8ad-cbdfa2484e5a' },
  { key: 'gal_out1', uuid: '269a1081-43b6-4179-b104-e446e4878e29' },
  { key: 'gal_int1', uuid: 'c5099b93-dc0b-4082-ab4e-66d7c6229024' },
  { key: 'gal_ext1', uuid: 'f1e5dfce-68ba-4a14-8b10-92c43d231940' },
]

async function downloadAll() {
  console.log(`Starting download of ${IMAGES.length} property images...`)
  let count = 0

  for (const img of IMAGES) {
    const url = `https://a0.muscache.com/im/pictures/hosting/Hosting-1643466979772957530/original/${img.uuid}.jpeg?im_w=1920`
    const filePath = path.join(OUT_DIR, `${img.key}.jpg`)

    if (fs.existsSync(filePath)) {
      count++
      continue
    }

    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const buffer = Buffer.from(await res.arrayBuffer())
      fs.writeFileSync(filePath, buffer)
      count++
      console.log(`[${count}/${IMAGES.length}] Saved ${img.key}.jpg (${(buffer.length / 1024).toFixed(1)} KB)`)
    } catch (err) {
      console.error(`Failed to download ${img.key} (${img.uuid}):`, err.message)
    }
  }

  console.log(`Download finished! ${count} of ${IMAGES.length} images saved to public/images/gallery/`)
}

downloadAll()
