import { PrismaClient } from '@prisma/client'
// khởi tạo đối tượng truy vấn csdl
const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    let products = await prisma.products.findMany()
    return products
})